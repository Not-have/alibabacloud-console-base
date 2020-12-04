import {
  useMemo
} from 'react';

import {
  ITopNavButton
} from '../../types';
import buildMenuLanguage from '../../util/build-menu-language';
import buildMenuAccount from '../../util/build-menu-account';

import useModelProps from './_use-model-props';

export default function useMenus(): ITopNavButton[] {
  const {
    menus,
    language,
    account
  } = useModelProps();
  
  return useMemo(() => {
    const finalMenus = [...menus];
    const menuLang = buildMenuLanguage(language);
    const menuAccount = buildMenuAccount(account);
    
    if (menuLang) {
      finalMenus.push(menuLang);
    }
    
    if (menuAccount) {
      finalMenus.push(menuAccount);
    }
    
    return finalMenus;
  }, [language, menus, account]);
}
