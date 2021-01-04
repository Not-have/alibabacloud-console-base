import {
  css
} from 'styled-components';

import {
  COLOR
} from '../var';

export const mixinShadowS = css`
  box-shadow: 0 0 2px 0 ${COLOR.SHADOW};
  box-shadow: 0 0 2px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowSUp = css`
  box-shadow: 0 -1px 2px 0 ${COLOR.SHADOW};
  box-shadow: 0 -1px 2px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowSRight = css`
  box-shadow: 1px 0 2px 0 ${COLOR.SHADOW};
  box-shadow: 1px 0 2px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowSDown = css`
  box-shadow: 0 1px 2px 0 ${COLOR.SHADOW};
  box-shadow: 0 1px 2px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowSLeft = css`
  box-shadow: -1px 0 2px 0 ${COLOR.SHADOW};
  box-shadow: -1px 0 2px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowM = css`
  box-shadow: 0 0 4px 0 ${COLOR.SHADOW};
  box-shadow: 0 0 4px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowMUp = css`
  box-shadow: 0 -2px 4px 0 ${COLOR.SHADOW};
  box-shadow: 0 -2px 4px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowMRight = css`
  box-shadow: 2px 0 4px 0 ${COLOR.SHADOW};
  box-shadow: 2px 0 4px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowMDown = css`
  box-shadow: 0 2px 4px 0 ${COLOR.SHADOW};
  box-shadow: 0 2px 4px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowMLeft = css`
  box-shadow: -2px 0 4px 0 ${COLOR.SHADOW};
  box-shadow: -2px 0 4px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowL = css`
  box-shadow: 0 0 8px 0 ${COLOR.SHADOW};
  box-shadow: 0 0 8px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowLUp = css`
  box-shadow: 0 -4px 8px 0 ${COLOR.SHADOW};
  box-shadow: 0 -4px 8px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowLRight = css`
  box-shadow: 4px 0 8px 0 ${COLOR.SHADOW};
  box-shadow: 4px 0 8px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowLDown = css`
  box-shadow: 0 4px 8px 0 ${COLOR.SHADOW};
  box-shadow: 0 4px 8px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowLLeft = css`
  box-shadow: -4px 0 8px 0 ${COLOR.SHADOW};
  box-shadow: -4px 0 8px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowXl = css`
  box-shadow: 0 0 16px 0 ${COLOR.SHADOW};
  box-shadow: 0 0 16px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowXlUp = css`
  box-shadow: 0 -8px 16px 0 ${COLOR.SHADOW};
  box-shadow: 0 -8px 16px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowXlRight = css`
  box-shadow: 8px 0 16px 0 ${COLOR.SHADOW};
  box-shadow: 8px 0 16px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowXlDown = css`
  box-shadow: 0 8px 16px 0 ${COLOR.SHADOW};
  box-shadow: 0 8px 16px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
export const mixinShadowXlLeft = css`
  box-shadow: -8px 0 16px 0 ${COLOR.SHADOW};
  box-shadow: -8px 0 16px 0 var(--cb-color-shadow, ${COLOR.SHADOW});
`;
