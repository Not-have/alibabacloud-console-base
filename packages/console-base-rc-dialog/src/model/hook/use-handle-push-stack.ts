import {
  useCallback
} from 'react';

import {
  pushStack
} from '../util';

import useStateId from './use-state-id';
import useDialogStackItem from './use-dialog-stack-item';

/**
 * 全局性事件托管
 */
export default function useHandlePushStack(): () => void {
  const dialogId = useStateId();
  const dialogStackItem = useDialogStackItem();
  
  return useCallback(() => pushStack(dialogId, dialogStackItem), [dialogId, dialogStackItem]);
}
