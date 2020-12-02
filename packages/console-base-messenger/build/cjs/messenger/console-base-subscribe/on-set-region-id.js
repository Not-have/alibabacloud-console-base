"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onSetRegionId;

var _const = require("../../const");

var _subscribeByConsoleBase = _interopRequireDefault(require("../../util/subscribe-by-console-base"));

/**
 * console-base 响应设置地域 ID
 */
function onSetRegionId(fn) {
  return (0, _subscribeByConsoleBase.default)(_const.EMessageBroadcastByApp.REGION_SET_ID, fn);
}