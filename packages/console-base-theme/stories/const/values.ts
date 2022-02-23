import buildCssCode from '../util/build-css-code';

const CODE_FRAGMENT_IMPORT_CSS = `import {
  css
} from 'styled-components';
`;
const CODE_FRAGMENT_IMPORT_CSS_AND_COLOR = `${CODE_FRAGMENT_IMPORT_CSS}
import {
  COLOR
} from '../var';
`;
const CODE_FRAGMENT_IMPORT_CSS_AND_SIZE = `${CODE_FRAGMENT_IMPORT_CSS}
import {
  SIZE
} from '../var';
`;

export const CODE_BEGIN_GLOBAL_STYLE = `import {
  DefaultTheme,
  GlobalStyleComponent,
  createGlobalStyle
} from 'styled-components';

import {
  ThemeColors,
  ThemeTypo,
  ThemeSize
} from '../var';

interface ITheme {
  COLOR: ThemeColors;
  TYPO: ThemeTypo;
  SIZE: ThemeSize;
}

export default function createThemeGlobalStyle({
  COLOR,
  TYPO,
  SIZE
}: ITheme): GlobalStyleComponent<any, DefaultTheme> { // eslint-disable-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return createGlobalStyle<any>\`
    :root {`;
export const CODE_END_GLOBAL_STYLE = `    }
  \`;
}`;
export const CODE_INDENT_GLOBAL_STYLE = 3;
export const CODE_BEGIN_TEXT = CODE_FRAGMENT_IMPORT_CSS_AND_COLOR;
export const CODE_BEGIN_BG = CODE_FRAGMENT_IMPORT_CSS_AND_COLOR;
export const CODE_BEGIN_BORDER = CODE_FRAGMENT_IMPORT_CSS_AND_COLOR;
export const CODE_BEGIN_ORDER_RADIUS = CODE_FRAGMENT_IMPORT_CSS_AND_SIZE;
export const CODE_BEGIN_SHADOW = CODE_FRAGMENT_IMPORT_CSS_AND_COLOR;
export const CODE_BEGIN_LINK = `${CODE_FRAGMENT_IMPORT_CSS_AND_COLOR}
const linkCommon = css\`
  transition: all ease-in-out 0.3s;
  
  &:link {
    text-decoration: none;
  }
  
  &:hover {
    text-decoration: underline;
  }
\`;
`;

export const CODE_BEGIN_INPUT = `${CODE_FRAGMENT_IMPORT_CSS_AND_COLOR}
export const mixinInputReset = css\`
  border: 1px solid transparent;
  box-sizing: border-box;
  outline: none;
  background-color: transparent;
  transition: all ease-in-out 0.3s;
  
  &::placeholder {
${buildCssCode({
    attr: 'color',
    keys: ['COLOR', 'INPUT_PLACEHOLDER'],
    indent: 2
  })}
  }
  
  &::-ms-clear {
    display: none;
  }
\`;`;

export const CODE_BEGIN_TS_BUTTON = `${CODE_FRAGMENT_IMPORT_CSS}
import {
  COLOR,
  SIZE
} from '../var';

import {
  mixinShadowLDown
} from './shadow';

/**
 * 对按钮样式进行重置：
 * 1. 去掉 padding、background、border，定义 outline 以防止丑陋的 Chrome focus outline 样式
 * 2. 设置字体（family、颜色、大小、行间距等）继承
 * 3. 避免 link hover 的样式干扰
 * 4. 定义 disabled 的基础样式
 */
export const mixinButtonReset = css\`
  padding: 0;
  border: 1px solid transparent;
  box-sizing: border-box;
  outline: none;
  background: none;
  line-height: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all ease-out 0.3s;
  
  &:hover,
  &:link:hover {
    text-decoration: none;
  }
  
  &[disabled] {
    cursor: not-allowed;
  }
\`;

export const mixinButtonShadow = css\`
  &:hover,
  &:focus {
    \${mixinShadowLDown}
  }
  
  &:active,
  &:disabled {
    box-shadow: none;
  }
\`;`;
