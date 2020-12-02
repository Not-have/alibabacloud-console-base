import { EDialogFocusHow } from '../const';
import findFocusable from './find-focusable';
/**
 * 获取下一个要 focus 的元素
 */

export default function getNextElementToFocus(domDialog, domDialogContent, how) {
  var focusableElements;

  if (how === EDialogFocusHow.AUTO) {
    // AUTO 的情况下，需要优先 focus 内容区（且输入优先）
    focusableElements = findFocusable(domDialogContent, true);

    if (focusableElements.length) {
      return focusableElements[0];
    } // 如果内容区没有可 focus 的元素，再获取整体的


    focusableElements = findFocusable(domDialog);
    return focusableElements[0] || domDialog; // 如果整体也没有，那只好 dialog 本身了
  }

  focusableElements = findFocusable(domDialog);

  if (!focusableElements.length) {
    return domDialog;
  }

  var maxIndex = focusableElements.length - 1;
  var focusingPrev = how === EDialogFocusHow.PREV;
  var index = focusableElements.indexOf(document.activeElement) + (focusingPrev ? -1 : 1); // activeElement Chrome 2+, Firefox 3.0+ IE4 + Opera 9.6+ Safari 4.0+

  if (index < 0) {
    index = focusingPrev ? maxIndex : 0;
  }

  if (index > maxIndex) {
    index = 0;
  }

  return focusableElements[index];
}