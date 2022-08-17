import React, {
  useState
} from 'react';

import CodeMirror from '../../src';
import PkgInfo from '../pkg-info';

const CSS = `#tag-selector {
  position: absolute;
  top: 0;
  left: 0;
  color: #ccc;
}
.class-selector {
  display: flex;
  flex-direction: column;
}`;

export default function DemoCss(): JSX.Element {
  const [stateValue, setStateValue] = useState<string>(CSS);
  
  return <>
    <PkgInfo />
    <CodeMirror {...{
      conf: {
        mode: 'text/css'
      },
      value: stateValue,
      onChange: setStateValue
    }} />
  </>;
}
