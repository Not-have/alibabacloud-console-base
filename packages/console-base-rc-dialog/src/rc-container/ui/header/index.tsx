import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  COLOR,
  BORDER,
  SIZE
} from '@alicloud/console-base-theme';
import {
  typo
} from '@alicloud/console-base-styled-mixin';

import {
  EDialogMode
} from '../../../const';
import {
  usePropMode,
  useDialogTitle
} from '../../../model';

interface IScProps {
  mode?: EDialogMode;
}

const cssCommon = css`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 ${SIZE.PADDING_X_DIALOG * 2 + 16}px 0 ${SIZE.PADDING_X_DIALOG}px;
  box-sizing: border-box;
  color: ${COLOR.TEXT_TITLE};
  color: var(--cb-color-text-title, ${COLOR.TEXT_TITLE});
`;

const cssNormal = css`
  padding-top: ${SIZE.PADDING_X_DIALOG * 2 / 3}px;
`;

// slide 和 slide-up 共用
const cssSlide = css`
  border-bottom: ${BORDER.DIVIDER_FADE};
  border-bottom: var(--cb-border-divider-fade, ${BORDER.DIVIDER_FADE});
  height: ${SIZE.HEIGHT_DIALOG_SLIDE_HEADER}px;
`;

const ScHeader = styled.header<IScProps>`
  ${cssCommon};
  ${props => (props.mode !== EDialogMode.NORMAL ? cssSlide : cssNormal)};
  
  h4 {
    flex: 1;
    margin: 0;
    padding: 0;
    line-height: 24px;
    font-size: 16px;
    font-weight: 400;
    ${typo.ellipsis};
  }
`;

export default function Header(): JSX.Element | null {
  const title = useDialogTitle();
  const mode = usePropMode();
  
  return mode !== EDialogMode.NORMAL || title ? <ScHeader {...{
    mode
  }}>
    <h4>{title}</h4>
  </ScHeader> : null;
}
