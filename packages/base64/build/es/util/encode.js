import btoa from './btoa';
import utob from './utob';

function _encode(u) {
  return btoa(utob(u));
}
/**
 * 支持 unicode 的 base64 编码，如果 uriSafe 为 true，则末尾的 `=` 会被抹掉，`+` 转成 `-`
 */


export default function encode(str, uriSafe) {
  var base64Str = _encode(String(str));

  return uriSafe ? base64Str.replace(/[+/]/g, function (m0) {
    return m0 === '+' ? '-' : '_';
  }).replace(/=/g, '') : base64Str;
}