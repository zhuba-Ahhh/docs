import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // autoSidebar: [{type: 'autogenerated', dirName: '.'}],

  docsSidebar: [
    [
      {
        type: 'autogenerated',
        dirName: '简介',
      },
    ],
    [
      {
        label: '快速开始',
        type: 'category',
        collapsed: false,
        "link": {
          "type": "generated-index",
          "description": "通过以下文档，快速上手Mybricks",
          "slug": "quick-start"
        },
        items: [
          {
            type: 'autogenerated',
            dirName: '快速开始',
          },
        ],
      },
    ],
    [
      {
        label: '组件库',
        type: 'category',
        items: [
          {
            type: 'autogenerated',
            dirName: '组件库',
          },
        ],
      },
    ],
    [
      {
        label: '案例',
        type: 'category',
        items: [
          {
            type: 'autogenerated',
            dirName: '案例',
          },
        ],
      },
    ],
    {
      type: 'autogenerated',
      dirName: '常见问题',
    },
    {
      type: 'autogenerated',
      dirName: 'FAQ',
    },
    {
      type: 'autogenerated',
      dirName: '更新日志',
    },
  ],

  schoolSidebar: [
    {
      type: 'autogenerated',
      dirName: '课程',
    },
  ]
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
