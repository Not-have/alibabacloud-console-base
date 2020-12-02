import { IDemoConfig } from '../types';
/**
 * 这个拦截器用于模拟 demo 中获取验证码
 *
 * 使用 `fetcher.interceptRequest(fetcherDemoInterceptorMockVerifyCodeUrl)`
 */
export default function fetcherDemoInterceptorMockVerifyCodeUrl(config: IDemoConfig): Partial<IDemoConfig> | undefined;
