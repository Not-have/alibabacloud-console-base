import update from 'immutability-helper';

import {
  IPropsTab
} from '../../types';
import {
  IContextState
} from '../types';

export default function reducePruneClosedTabs(state: IContextState, tabs: IPropsTab[]): IContextState {
  const {
    closedTabs
  } = state;
  
  if (!closedTabs.length) {
    return state;
  }
  
  let pruned = false;
  
  const prunedClosedTabs = closedTabs.reduce((result, v): IPropsTab[] => {
    if (tabs.includes(v)) {
      result.push(v);
    } else {
      pruned = true;
    }
    
    return result;
  }, []);
  
  if (!pruned) {
    return state;
  }
  
  return update(state, {
    closedTabs: {
      $set: prunedClosedTabs
    }
  });
}
