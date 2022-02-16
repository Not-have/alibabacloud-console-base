import {
  broadcast
} from '@alicloud/post-message';

import {
  EMessageBroadcastByConsoleBase
} from '../enum';

/**
 * ConsoleBase 发消息，仅限定 type，不需要记录日志
 */
export default function broadcastByConsoleBase<P = void>(type: EMessageBroadcastByConsoleBase | string, payload?: P): void {
  broadcast(type, payload);
}
