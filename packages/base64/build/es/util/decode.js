import atob from './atob';
import btou from './btou';

function _decode(a) {
  return btou(atob(a));
}
/**
 * 支持 unicode 的 base64 解码
 */


export default function decode(str) {
  return _decode(String(str).replace(/[-_]/g, function (m0) {
    return m0 === '-' ? '+' : '/';
  }).replace(/[^A-Za-z0-9+/]/g, ''));
}