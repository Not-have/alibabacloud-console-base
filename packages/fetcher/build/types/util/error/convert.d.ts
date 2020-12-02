import { IFetcherConfig, IFetcherError } from '../../types';
/**
 * 将错误类型转成 IFetcherError，填入 config，并把 @alicloud/fetcher-fetch 和 @alicloud/fetcher-jsonp 的错误 name 转成 @alicloud/fetcher 的
 *
 * 曾经利用过 Error 的继承，但效果不好.. 有兴趣可以看看
 *   如何自定义错误 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 *
 * 其中一个问题是没有办法（或者我不知道怎么弄）给自定义的 Error 类添加 toJSON 方法（写在 prototype 里无法继承，只能写在实例上）
 * 所以最终选择了工厂模式
 */
export default function convertError<C extends IFetcherConfig = IFetcherConfig>(err: Error, config: C): IFetcherError<C>;
