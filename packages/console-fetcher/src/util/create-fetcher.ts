import {
  FetcherConfig,
  Fetcher,
  createFetcher
} from '@alicloud/console-fetcher-basic';
import interceptRisk from '@alicloud/console-fetcher-interceptor-res-risk';

import {
  IConsoleFetcherInterceptorOptions
} from '../types';

export default (config?: FetcherConfig, interceptorOptions: IConsoleFetcherInterceptorOptions = {}, useNewRisk?: boolean): Fetcher => {
  let configBody: FetcherConfig['body'] = config?.body;

  if (useNewRisk && typeof config?.body !== 'string') {
    configBody = {
      riskVersion: '2.0', // 通过第三个参数来控制是否使用新版本的风控
      ...config?.body
    };
  }

  const fetcher: Fetcher = createFetcher<FetcherConfig>({
    ...config,
    body: configBody
  }, interceptorOptions);
  
  interceptRisk(fetcher, interceptorOptions.riskConfig);
  
  return fetcher;
};
