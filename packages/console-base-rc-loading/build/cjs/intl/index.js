"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _consoleBaseIntlFactoryBasic = _interopRequireDefault(require("@alicloud/console-base-intl-factory-basic"));

var _enUs = _interopRequireDefault(require("./locales/en-us"));

var _zhCn = _interopRequireDefault(require("./locales/zh-cn"));

var _zhTw = _interopRequireDefault(require("./locales/zh-tw"));

var _jaJp = _interopRequireDefault(require("./locales/ja-jp"));

var _frFr = _interopRequireDefault(require("./locales/fr-fr"));

var _deDe = _interopRequireDefault(require("./locales/de-de"));

var _koKr = _interopRequireDefault(require("./locales/ko-kr"));

var _default = (0, _consoleBaseIntlFactoryBasic.default)({
  'en-US': _enUs.default,
  'zh-CN': _zhCn.default,
  'zh-TW': _zhTw.default,
  'ja-JP': _jaJp.default,
  'fr-FR': _frFr.default,
  'de-DE': _deDe.default,
  'ko-KR': _koKr.default
});

exports.default = _default;