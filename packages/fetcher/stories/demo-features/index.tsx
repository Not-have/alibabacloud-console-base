import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  P,
  List,
  Button,
  PrePromise
} from '@alicloud/demo-rc-elements';

import {
  createFetcherErrorSkipNetwork
} from '../../src';
import {
  fetcher1
} from '../fetcher';

const {
  get,
  post
} = fetcher1;

const paramsInOptions = {
  p1: 'param1111 - will not override p1 in params',
  added: 'yes - will be added'
};

const params = {
  p1: 'param1',
  p2: 2,
  pArr: ['p.arr.1', 'p.arr.2', 'p.arr.3']
};

function testNormal(): Promise<unknown> {
  return get({
    params: paramsInOptions
  }, 'https://oneapi.alibaba-inc.com/mock/boshit/success', params);
}

function testPriority(): Promise<unknown> {
  return get({
    params: paramsInOptions,
    additionalInterceptorsForRequest: [
      [function() {
        console.info(111);
      }],
      [2, function() {
        console.info(222); // 在开始执行
      }]
    ]
  }, 'https://oneapi.alibaba-inc.com/mock/boshit/success', params);
}

function testSkipNetwork(): Promise<unknown> {
  return get({
    params: paramsInOptions,
    additionalInterceptorsForRequest: [
      [function() {
        throw createFetcherErrorSkipNetwork<boolean>(new Promise<boolean>(resolve => window.setTimeout(() => resolve(true), 500)));
      }]
    ]
  }, 'https://oneapi.alibaba-inc.com/mock/boshit/success', params);
}

function testPostJson(): Promise<unknown> {
  return post({
    headers: {
      'Content-Type': 'application/json'
    },
    params: paramsInOptions
  }, 'https://oneapi.alibaba-inc.com/mock/boshit/success', params);
}

function testAbort(): Promise<unknown> {
  const abortController = new AbortController();
  
  setTimeout(() => abortController.abort(), 36);
  
  return get({
    signal: abortController.signal
  }, 'https://oneapi.alibaba-inc.com/mock/boshit/success', params);
}

export default function DemoFeatures(): JSX.Element {
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  const handleTestNormal = useCallback(() => setStatePromise(testNormal()), [setStatePromise]);
  const handleTestPriority = useCallback(() => setStatePromise(testPriority()), [setStatePromise]);
  const handleTestSkipNetwork = useCallback(() => setStatePromise(testSkipNetwork()), [setStatePromise]);
  const handleTestPostJson = useCallback(() => setStatePromise(testPostJson()), [setStatePromise]);
  const handleTestAbort = useCallback(() => setStatePromise(testAbort()), [setStatePromise]);
  
  return <>
    <H1>临时拦截器</H1>
    <P>可以通过 <code>additionalInterceptorsForRequest</code> 添加临时的拦截器，它只影响当前的请求。</P>
    <List ordered>
      <span>默认的临时拦截器会在 <em>预设</em> 拦截器（如果没有指定优先级）之后执行，优先级的默认值为 10</span>
      <span>通过指定优先级，如 <code>[1, interceptor]</code> 可以让它在预设拦截器之前执行</span>
      <span>通过在请求拦截器中使用 <code>createFetcherErrorSkipNetwork(promise, fetcherConfig)</code> 可以直接返回结果，不经过网络请求和响应拦截器</span>
    </List>
    <Button onClick={handleTestNormal}>testNormal</Button>
    <Button onClick={handleTestPriority}>testPriority</Button>
    <Button onClick={handleTestSkipNetwork}>testSkipNetwork</Button>
    <Button onClick={handleTestPostJson}>testPostJson</Button>
    <Button onClick={handleTestAbort}>testAbort</Button>
    <PrePromise promise={statePromise} />
  </>;
}
