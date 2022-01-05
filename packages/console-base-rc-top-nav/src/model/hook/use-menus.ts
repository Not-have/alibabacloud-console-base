import {
  useMemo
} from 'react';

import {
  IPropsTopNavButton
} from '../types';
import {
  buildMenuLanguage,
  buildMenuAccount
} from '../../util';

import useModelProps from './_use-model-props';
import useHandleMenuDropdownVisibleChange from './use-handle-menu-dropdown-visible-change';

export default function useMenus(): IPropsTopNavButton[] {
  const {
    menus,
    language,
    account
  } = useModelProps();
  const handleMenuDropdownVisibleChange = useHandleMenuDropdownVisibleChange();
  
  return useMemo((): IPropsTopNavButton[] => {
    const menuLang = buildMenuLanguage(language);
    const menuAccount = buildMenuAccount(account);
  
    return [
      ...(menus || []),
      menuLang,
      menuAccount
    ].filter(v => v).map(v => {
      const {
        key,
        dropdown
      } = v!;
      
      if (dropdown && key) {
        return {
          ...v,
          dropdown: {
            ...dropdown,
            onVisibleChange: visible => handleMenuDropdownVisibleChange(visible, dropdown.onVisibleChange, key)
          }
        };
      }
      
      return v;
    }) as IPropsTopNavButton[];
  }, [language, menus, account, handleMenuDropdownVisibleChange]);
}
