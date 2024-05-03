import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.nubia.neostore',
  name: '应用商店',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          quickFind: true,
          action: 'clickCenter',
          matches: '[vid="roundProgressBar"]',
          exampleUrls:
            'https://m.gkd.li/140048181/a8a822fe-2bec-4aeb-b0fe-0469fc9cd4f3',
          snapshotUrls: 'https://i.gkd.li/i/15195038',
        },
      ],
    },
  ],
});
