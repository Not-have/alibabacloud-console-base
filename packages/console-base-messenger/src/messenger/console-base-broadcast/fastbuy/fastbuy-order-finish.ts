import {
  IPayloadFastbuy
} from '../../../types';
import {
  EMessageBroadcastByConsoleBase
} from '../../../const';
import {
  broadcastByConsoleBase
} from '../../../util';

/**
 * Fastbuy 完成支付
 */
export default function fastbuyOrderFinish(payload: IPayloadFastbuy): void {
  broadcastByConsoleBase<IPayloadFastbuy>(EMessageBroadcastByConsoleBase.FASTBUY_ORDER_FINISH, payload);
}
