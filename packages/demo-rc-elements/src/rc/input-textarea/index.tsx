import React, {
  ChangeEvent,
  forwardRef,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  useControllableValueSoftTrim
} from '@alicloud/react-hook-controllable-value';

import {
  TInputTextAreaRef,
  IPropsInputTextarea
} from '../../types';
import {
  CSS_FORM_CONTROL_INPUT_TEXTAREA
} from '../../const';

const ScInputTextarea = styled.textarea`
  ${CSS_FORM_CONTROL_INPUT_TEXTAREA}
`;

function InputTextarea({
  value,
  defaultValue,
  onChange,
  ...props
}: IPropsInputTextarea, ref: TInputTextAreaRef): JSX.Element {
  const [controllableValue, controllableOnChange] = useControllableValueSoftTrim(true, value, defaultValue, onChange);
  const handleChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => controllableOnChange(e.target.value), [controllableOnChange]);
  
  return <ScInputTextarea {...{
    ...props,
    ref,
    value: controllableValue,
    onChange: handleChange
  }} />;
}

export default forwardRef(InputTextarea);
