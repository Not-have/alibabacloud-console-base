import { setCookie } from '@alicloud/cookie';
import { COOKIE_SEC_TOKEN } from '../const';
export default function cookieSetToken(value) {
  setCookie(COOKIE_SEC_TOKEN, value, {
    days: 0 // session cookie

  });
}