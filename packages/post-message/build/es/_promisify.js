import _isError from 'lodash/isError';
import _isPlainObject from 'lodash/isPlainObject';
import _forEach from 'lodash/forEach';
import { subscribe, subscribeOnce, broadcast } from './_basic';
/**
 * 以 promise 的形式广播事件的时候的 payload 包裹
 */

/**
 * postMessage 不支持传 Error 对象
 */
function errorToPlain(err) {
  if (!_isError(err)) {
    return err;
  }

  var plain = {};

  _forEach(err, function (v, k) {
    plain[k] = v;
  });

  ['message', 'name', 'stack'].forEach(function (v) {
    if (!plain[v]) {
      plain[v] = err[v];
    }
  });
  return plain;
}

function plainToError(o) {
  if (!_isPlainObject(o)) {
    return o;
  }

  var err = new Error();

  _forEach(o, function (v, k) {
    err[k] = o[k];
  });

  return err;
}
/**
 * 广播事件，返回 Promise，必须要有 subscribePromise 来承接该事件，否则此 Promise 将永远无法结束
 */


export function broadcastPromise(type, payload) {
  // 生成一个事件 type，用于 subscribePromise 里进行事件回调，因为 `postMessage` 无法传输 function，
  // 所以只好经由这种「曲线救国」的方式。
  var _dismiss_ = "".concat(type, "/end/").concat(Date.now(), "-").concat(Math.round(Math.random() * 100000)); // 这里会触发 subscribePromise 的回调，不要放到 new Promise 内部，因为它可能会报错，这个错需要保持是同步的


  broadcast(type, {
    payload: payload,
    _dismiss_: _dismiss_
  });
  return new Promise(function (resolve, reject) {
    // subscribePromise 的回调返回的是 Promise，它 resolve 或 reject 都会广播一个以 _dismiss_ 为类型的 message，
    // 这里使用单次订阅是因为这个 message 只需要消费一次。
    subscribeOnce(_dismiss_, function (payloadBack) {
      if (!payloadBack) {
        // 一般来说不可能没有 payloadBack，但代码需要严谨
        return reject();
      }

      var value = payloadBack.value,
          error = payloadBack.error;

      if (error) {
        reject(plainToError(error));
      } else {
        resolve(value);
      }
    });
  });
}
/**
 * 对 broadcastPromise 对应的 type 进行响应，这里关心的 payload 还是 broadcastPromise 所传入的 payload
 */

export function subscribePromise(type, fn) {
  return subscribe(type, function (payload) {
    // 得到的 payload 下有 _dismiss_ 参数才响应，否则 pass
    if (!(payload !== null && payload !== void 0 && payload._dismiss_)) {
      return;
    } // 这里广播是事件会被 `broadcastPromise` 方法内部的 subscribeOnce 消化


    Promise.resolve(fn(payload.payload)).then(function (value) {
      broadcast(payload._dismiss_, {
        value: value
      });
    }, function (err) {
      broadcast(payload._dismiss_, {
        error: errorToPlain(err)
      });
    });
  });
}