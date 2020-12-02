"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useModelRef;

var _useModelContext = _interopRequireDefault(require("./_use-model-context"));

function useModelRef() {
  return (0, _useModelContext.default)().REF;
}