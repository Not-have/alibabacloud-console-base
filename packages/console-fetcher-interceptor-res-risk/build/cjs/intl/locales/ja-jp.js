"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  'attr:phone': '電話',
  'attr:email': 'Eメール',
  'attr:mfa': '仮想MFAデバイス',
  'attr:code': '認証コード',
  'op:confirm': 'OK',
  'op:cancel': 'キャンセル',
  'op:risk_forbidden': '操作中止',
  'op:risk_invalid_go': '新しいウィンドウで設定を完了する',
  'op:risk_invalid': '認証方法',
  'op:verify_by_phone': '電話により認証',
  'op:verify_by_email': 'メールにより認証',
  'op:verify_by_mfa': 'MFA認証',
  'op:send_code': 'コードの取得',
  'op:change_phone': '変更',
  'op:change_email': '変更',
  'op:change_mfa': 'バインド解除',
  'op:resend_after_{n}s': '{n} 秒',
  'message:invalid_unknown!lines': "\u8A8D\u8A3C\u65B9\u6CD5\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002\n\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u3092\u4FDD\u8B77\u3059\u308B\u306B\u306F\u3001\u307E\u305A\u8A8D\u8A3C\u65B9\u6CD5\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002",
  'message:invalid_unsupported_{method}!html!lines': "\u78BA\u8A8D\u65B9\u6CD5 <code>{method}</code> \u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093\u3002\n\u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u3092\u4FDD\u8B77\u3059\u308B\u306B\u306F\u3001\u307E\u305A\u8A8D\u8A3C\u65B9\u6CD5\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002",
  'message:forbidden': '高いセキュリティリスクが検出されたため、操作を完了できません。サポートセンターに連絡してください。',
  'message:code_required': '確認コードを入力してください。',
  'message:code_send_error': '確認コードの送信に失敗しました。しばらくしてからもう一度試してください。',
  'message:code_incorrect': '確認コードが正しくありません。もう一度入力してください。',
  'message:verify_cancelled': '確認はユーザーによってキャンセルされました。',
  'message:no_get_code_url': '確認コードのURLが設定されていないことを確認し、開発に連絡してください。'
};
exports.default = _default;