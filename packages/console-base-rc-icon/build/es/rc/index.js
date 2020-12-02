import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      transform: rotate(", "deg);\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " 1s linear infinite;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  font-family: ", " !important;\n  \n  &:before {\n    content: '", "';\n    ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0deg);\n    transform-origin: 50% 50%;\n  }\n  \n  100% {\n    transform: rotate(1turn);\n    transform-origin: 50% 50%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { glyph } from '@alicloud/console-base-styled-mixin';
import { EIconType } from '../const';
var fontFamily = glyph.injectGlobalFontFace({
  projectId: '1256165',
  hash: '5hvfha9x7ut',
  dataUrl: 'data:application/x-font-woff2;charset=utf-8;base64,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'
});
var kfRotate = keyframes(_templateObject());
var ScI = styled.i(_templateObject2(), glyph.base, fontFamily, function (props) {
  return props.code;
}, function (props) {
  return props.rotateCss;
});
var cssLoading = css(_templateObject3(), kfRotate);
/**
 * ConsoleBase 项目自用的图标组件
 */

export default function Icon(_ref) {
  var type = _ref.type,
      _ref$rotate = _ref.rotate,
      rotate = _ref$rotate === void 0 ? 0 : _ref$rotate,
      props = _objectWithoutProperties(_ref, ["type", "rotate"]);

  var code = EIconType[type];
  var rotateCss = null;

  if (code === EIconType.loading) {
    rotateCss = cssLoading;
  } else if (rotate > 0) {
    rotateCss = css(_templateObject4(), rotate);
  }

  return /*#__PURE__*/React.createElement(ScI, _objectSpread(_objectSpread({}, props), {}, {
    code: code ? "\\".concat(code) : '',
    rotateCss: rotateCss
  }));
}