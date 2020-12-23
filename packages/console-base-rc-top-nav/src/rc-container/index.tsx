import React from 'react';

import Provider from '../model';
import {
  IPropsTopNav
} from '../types';

import Ui from './ui';

export default function WithProvider({
  bodyClass,
  dock,
  logo,
  menus,
  language,
  account,
  customLeft,
  customRight,
  ...props
}: IPropsTopNav): JSX.Element {
  return <Provider props={{
    bodyClass,
    dock,
    logo,
    menus,
    language,
    account,
    customLeft,
    customRight
  }}>
    <Ui {...props} />
  </Provider>;
}
