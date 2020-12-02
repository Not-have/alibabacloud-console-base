import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { EDialogLockState } from '../../const';
var idIncrementer = 0;

function getId() {
  idIncrementer += 1;
  return "".concat(idIncrementer); // 不要拼接其他的 因为逻辑中会用它来做数字比较
}

export default function getDefaultContextState(data) {
  return {
    id: getId(),
    // 因为每次 render 都会调用它，所以下一个 dialog 的 id 跟前一个是不连着的，但这并不要紧，只要保证 state.id 是不变的就行
    mounted: false,
    active: false,
    locked: EDialogLockState.NO,
    zIndex: -1,
    data: _objectSpread({}, data),
    propsUpdate: {},
    windowHeight: window.innerHeight,
    countForcedUpdate: 0
  };
}