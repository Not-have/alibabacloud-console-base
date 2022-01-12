import {
  useCallback
} from 'react';

import useHandleSetVisible from './use-handle-set-visible';

export default function useHandleClose(): () => void {
  const handleSetVisible = useHandleSetVisible();
  
  return useCallback((): void => handleSetVisible(false), [handleSetVisible]);
}
