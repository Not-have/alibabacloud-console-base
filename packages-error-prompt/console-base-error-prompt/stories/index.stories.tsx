import React from 'react';
import {
  storiesOf
} from '@storybook/react';
import {
  withKnobs
} from '@storybook/addon-knobs';

import pkgInfo from '../package.json';

import DemoDefault from './demo-default';
import DemoComponent from './demo-component';

storiesOf(pkgInfo.name, module)
    .addDecorator(withKnobs)
    .add('default', () => <DemoDefault />)
    .add('component', () => <DemoComponent />);
