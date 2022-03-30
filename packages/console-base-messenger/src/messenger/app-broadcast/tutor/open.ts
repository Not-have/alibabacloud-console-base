import {
  EMessageBroadcastByApp
} from '../../../enum';
import {
  IPayloadTutorOpen
} from '../../../types';
import {
  broadcastByApp
} from '../../../util';

/**
 * 打开教程（到第几步）
 */
export default function openTutor(id: string, step?: number): void {
  broadcastByApp<IPayloadTutorOpen>(EMessageBroadcastByApp.TUTOR_OPEN, {
    id,
    step
  });
}