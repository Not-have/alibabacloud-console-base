"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onSetResourceGroupResourceCount;

var _const = require("../../const");

var _subscribeByConsoleBase = _interopRequireDefault(require("../../util/subscribe-by-console-base"));

/**
 * console-base 响应设置当前选中的资源组
 */
function onSetResourceGroupResourceCount(fn) {
  return (0, _subscribeByConsoleBase.default)(_const.EMessageBroadcastByApp.RESOURCE_GROUP_SET_RESOURCE_COUNT, fn);
}