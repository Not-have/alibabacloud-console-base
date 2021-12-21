import {
  useCallback
} from 'react';

import {
  EAction
} from '../const';

import useModelDispatch from './_use-model-dispatch';

export default function useDispatchUpdateWindowHeight(): () => void {
  const dispatch = useModelDispatch();
  
  return useCallback(() => dispatch({
    type: EAction.UPDATE_WINDOW_HEIGHT
  }), [dispatch]);
}
