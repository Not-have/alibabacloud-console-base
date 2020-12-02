var REG_METHODS_CAN_NOT_HAVE_BODY = /^(GET|HEAD|JSONP)$/i;
/**
 * method 对应的请求是否可以包含 body
 */

export default function canHaveBody() {
  var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'GET';
  return !REG_METHODS_CAN_NOT_HAVE_BODY.test(method);
}