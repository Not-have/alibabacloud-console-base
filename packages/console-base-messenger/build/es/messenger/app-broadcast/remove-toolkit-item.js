import { EToolkitTypeShort } from '../../const';
import composeToolkitType from '../../util/compose-toolkit-type';
import { broadcastByApp } from '../../util/broadcast-by-app';
/**
 * 移除工具
 */

export default function removeToolkitItem(id) {
  broadcastByApp(composeToolkitType(EToolkitTypeShort.REMOVE), id);
}