import React, {
  CSSProperties
} from 'react';
import styled from 'styled-components';

import {
  mixinBorderRadiusXs,
  mixinShadowLDown
} from '@alicloud/console-base-theme';

import {
  IPropsTooltip
} from '../../types';
import {
  ACTION_OFFSET,
  ACTION_SIZE,
  ETooltipPlacement,
  ETooltipTheme
} from '../../const';
import {
  getTooltipCssColors
} from '../../util';

import TooltipTitle from './tooltip-title';
import TooltipArrow from './tooltip-arrow';
import TooltipActions from './tooltip-actions';

interface IPropsScTooltip {
  placement: ETooltipPlacement;
  theme: ETooltipTheme;
}

const ScTooltip = styled.div<IPropsScTooltip>`
  position: absolute;
  padding: 8px 16px;
  box-sizing: border-box;
  font-size: 12px;
  transition: all ease-in-out 0.3s;
  ${mixinShadowLDown}
  ${mixinBorderRadiusXs}
  ${props => getTooltipCssColors(props.theme)}
`;

/**
 * 纯展示，无逻辑
 */
export default function Tooltip({
  style,
  title,
  content,
  placement = ETooltipPlacement.TOP,
  theme = ETooltipTheme.NORMAL,
  arrow = true,
  width,
  onConfig,
  onClose,
  ...props
}: IPropsTooltip): JSX.Element {
  const finalStyle: CSSProperties = {
    ...style
  };
  
  if (width && width > 0) {
    finalStyle.width = width;
  } else {
    finalStyle.whiteSpace = 'nowrap';
  }
  
  if (onConfig || onClose) {
    finalStyle.paddingRight = ACTION_OFFSET * 2 + ACTION_SIZE * (onConfig && onClose ? 2 : 1);
  }
  
  return <ScTooltip {...{
    placement,
    theme,
    ...props,
    style: finalStyle
  }}>
    {title ? <TooltipTitle>{title}</TooltipTitle> : null}
    {content}
    {arrow ? <TooltipArrow {...{
      placement,
      theme
    }} /> : null}
    <TooltipActions {...{
      onConfig,
      onClose
    }} />
  </ScTooltip>;
}
