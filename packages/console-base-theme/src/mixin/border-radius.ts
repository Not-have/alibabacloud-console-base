import {
  css
} from 'styled-components';

import {
  SIZE
} from '../var';

export const mixinBorderRadiusXs = css`
  border-radius: ${SIZE.BORDER_RADIUS_XS}px;
  border-radius: var(--cb-size-border-radius-xs, ${SIZE.BORDER_RADIUS_XS}px);
`;
export const mixinBorderRadiusS = css`
  border-radius: ${SIZE.BORDER_RADIUS_S}px;
  border-radius: var(--cb-size-border-radius-s, ${SIZE.BORDER_RADIUS_S}px);
`;
export const mixinBorderRadiusM = css`
  border-radius: ${SIZE.BORDER_RADIUS_M}px;
  border-radius: var(--cb-size-border-radius-m, ${SIZE.BORDER_RADIUS_M}px);
`;
export const mixinBorderRadiusL = css`
  border-radius: ${SIZE.BORDER_RADIUS_L}px;
  border-radius: var(--cb-size-border-radius-l, ${SIZE.BORDER_RADIUS_L}px);
`;
export const mixinBorderRadiusXl = css`
  border-radius: ${SIZE.BORDER_RADIUS_XL}px;
  border-radius: var(--cb-size-border-radius-xl, ${SIZE.BORDER_RADIUS_XL}px);
`;
