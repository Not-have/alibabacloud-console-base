import {
  ReactNode
} from 'react';

import useModelProps from './_use-model-props';

export default function usePropCustomRight(): ReactNode {
  return useModelProps().customRight;
}
