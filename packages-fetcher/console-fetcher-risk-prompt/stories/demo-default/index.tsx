/* eslint-disable no-console */
import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';

import riskPrompt, {
  type RiskValidator,
  type RiskParametersGetter
} from '../../src';

interface IRiskResponseData {
  AccountId: string;
  CodeType: string;
  VerifyType: string;
  VerifyDetail: boolean;
  RiskValidators: RiskValidator[];
}

const ScButton = styled(Button)`
  margin: 0 8px;
`;

export default function DemoDefault(): JSX.Element {
  const handleSubRiskBindPrompt = useCallback(async () => {
    const riskPromptResult = await riskPrompt({
      riskResponse: {
        data: {
          Validators: {
            Validator: [
              {
                VerifyDetail: 'false',
                VerifyType: 'ga'
              }
            ]
          },
          CodeType: 'ims_login_update',
          VerifyDetail: '137****2864',
          VerifyType: 'sms',
          AliyunIdkp: '1647******209939'
        }
      }
    });

    console.log('sub_risk_bind_prompt_result', riskPromptResult);
  }, []);

  const handleSubRiskAuthPrompt = useCallback(async () => {
    const riskParametersGetter: RiskParametersGetter<IRiskResponseData> = riskResponse => {
      return {
        accountId: riskResponse.AccountId,
        validators: riskResponse.RiskValidators,
        codeType: riskResponse.CodeType,
        verifyType: riskResponse.VerifyType,
        verifyDetail: riskResponse.VerifyDetail
      };
    };

    const riskPromptResult = await riskPrompt<IRiskResponseData>({
      riskResponse: {
        RiskValidators: [
          {
            VerifyDetail: 'false',
            VerifyType: 'ga'
          },
          {
            VerifyDetail: 'zzzzzz',
            VerifyType: 'sms'
          }
        ],
        CodeType: 'ims_login_update',
        VerifyDetail: true,
        VerifyType: 'ga',
        AccountId: '12345****000'
      },
      riskParametersGetter
    });

    console.log('sub_risk_auth_prompt_result', riskPromptResult);
  }, []);

  const handleSubRiskInvalidPrompt = useCallback(async () => {
    const riskPromptResult = await riskPrompt({
      newRisk: true,
      riskResponse: {
        data: {
          Action: 'doubleConfirm',
          Message: '000您的账户出现异常，详情请联系客服。',
          Extend: {
            scriptId: '12345'
          },
          Validators: {
            Validator: [
              {
                VerifyDetail: '1234****000',
                VerifyType: 'mmm'
              }
            ]
          },
          CodeType: 'ecs_instance_delete',
          Tag: 'RR000',
          VerifyDetail: '1234****0',
          VerifyType: 'sms',
          AliyunIdkp: '1234****0',
          NoRisk: false
        }
      }
    });

    console.log('sub_risk_auth_prompt_result', riskPromptResult);
  }, []);

  const handleNewMainRiskPrompt = useCallback(async () => {
    const riskPromptResult = await riskPrompt({
      riskResponse: {
        data: {
          Validators: {
            Validator: [
              {
                VerifyDetail: '1234***0',
                VerifyType: 'sms'
              }
            ]
          },
          CodeType: 'ims_login_update',
          VerifyURL: 'https://passport.aliyun.com:4333/iv/remote/mini/request.htm?havana_iv_token=123456****0',
          VerifyDetail: '137****2864',
          VerifyType: 'sms',
          AliyunIdkp: '1234***0'
        }
      }
    });

    console.log('sub_risk_bind_prompt_result', riskPromptResult);
  }, []);

  const handleOldMainRiskPrompt = useCallback(async () => {
    const riskPromptResult = await riskPrompt({
      riskResponse: {
        data: {
          verifyDetail: '1234****0',
          codeType: 'rg_authorization_add',
          verifyType: 'sms'
        }
      }
    });

    console.log('new_main_prompt_result', riskPromptResult);
  }, []);

  return <>
    <H1>风控弹窗 console-base-risk-prompt</H1>
    <ScButton onClick={handleSubRiskBindPrompt}>子账号风控弹窗 - 绑定 MFA</ScButton>
    <ScButton onClick={handleSubRiskAuthPrompt}>子账号风控弹窗 - 验证 MFA</ScButton>
    <ScButton onClick={handleSubRiskInvalidPrompt}>子账号风控弹窗 - Invalid</ScButton>
    <ScButton onClick={handleNewMainRiskPrompt}>新版主账号风控弹窗</ScButton>
    <ScButton onClick={handleOldMainRiskPrompt}>旧版主账号风控弹窗</ScButton>
  </>;
}