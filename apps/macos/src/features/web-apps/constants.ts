import {
  Anthropic,
  Copilot,
  Gemini,
  Grok,
  Manus,
  Mistral,
  OpenAI,
  Perplexity,
  Poe,
} from '@lobehub/icons';

export enum Tags {
  Foundation = 'foundation',
  Search = 'search',
  MultiLlm = 'multi-llm',
  Application = 'application',
  Agent = 'agent',
}

export type WebAppOption = {
  name: string;
  url: string;
  tag: Set<Tags>;
  icon: {
    hasUrl: boolean;
    url?: string;
    hasComponent: boolean;
    Component?:
      | typeof Anthropic
      | typeof Copilot
      | typeof Gemini
      | typeof Grok
      | typeof Mistral
      | typeof OpenAI
      | typeof Perplexity
      | typeof Poe
      | typeof Manus;
  };
};

export const OPTIONS = [
  {
    name: 'ChatGPT',
    url: 'https://chatgpt.com/',
    tag: new Set([Tags.Foundation]),
    icon: {
      hasUrl: true,
      url: 'https://chatgpt.com/favicon.ico',
      hasComponent: true,
      Component: OpenAI,
    },
  },
  {
    name: 'Claude',
    url: 'https://claude.ai/new',
    tag: new Set([Tags.Foundation]),
    icon: {
      hasUrl: true,
      url: 'https://claude.ai/favicon.ico',
      hasComponent: true,
      Component: Anthropic,
    },
  },
  {
    name: 'Gemini',
    url: 'https://gemini.google.com/',
    tag: new Set([Tags.Foundation]),
    icon: {
      hasUrl: false,
      hasComponent: true,
      Component: Gemini,
    },
  },
  {
    name: 'Grok',
    url: 'https://grok.com/',
    tag: new Set([Tags.Foundation]),
    icon: {
      hasUrl: true,
      url: 'https://grok.com/favicon.ico',
      hasComponent: true,
      Component: Grok,
    },
  },
  {
    name: 'Mistral Le Chat',
    url: 'https://chat.mistral.ai/chat',
    tag: new Set([Tags.Foundation]),
    icon: {
      hasUrl: true,
      url: 'https://chat.mistral.ai/favicon.ico',
      hasComponent: true,
      Component: Mistral,
    },
  },
  {
    name: 'Perplexity',
    url: 'https://www.perplexity.ai/',
    tag: new Set([Tags.Search, Tags.MultiLlm]),
    icon: {
      hasUrl: true,
      url: 'https://www.perplexity.ai/favicon.ico',
      hasComponent: true,
      Component: Perplexity,
    },
  },
  {
    name: 'Liner',
    url: 'https://getliner.com',
    tag: new Set([Tags.Search, Tags.MultiLlm]),
    icon: {
      hasUrl: true,
      url: 'https://getliner.com/favicon.ico',
      hasComponent: false,
    },
  },
  {
    name: 'Alan',
    url: 'https://alan.est.ai',
    tag: new Set([Tags.Search, Tags.MultiLlm]),
    icon: {
      hasUrl: true,
      url: 'https://alan.est.ai/favicon.ico',
      hasComponent: false,
    },
  },
  {
    name: 'MS Copilot',
    url: 'https://copilot.microsoft.com',
    tag: new Set([Tags.Application]),
    icon: {
      hasUrl: true,
      url: 'https://copilot.microsoft.com/favicon.ico',
      hasComponent: true,
      Component: Copilot,
    },
  },
  {
    name: 'Manus',
    url: 'https://manus.im/app',
    tag: new Set([Tags.Agent]),
    icon: {
      hasUrl: true,
      url: 'https://manus.im/icon.png',
      hasComponent: true,
      Component: Manus,
    },
  },
  {
    name: 'Genspark',
    url: 'https://www.genspark.ai/',
    tag: new Set([Tags.Agent, Tags.Application, Tags.Search]),
    icon: {
      hasUrl: true,
      url: 'https://www.genspark.ai/favicon.ico',
      hasComponent: false,
    },
  },
  {
    name: 'LM Arena',
    url: 'https://lmarena.ai',
    tag: new Set([Tags.MultiLlm]),
    icon: {
      hasUrl: false,
      hasComponent: false,
    },
  },
  {
    name: 'Duck.ai',
    url: 'https://duck.ai/',
    tag: new Set([Tags.MultiLlm]),
    icon: {
      hasUrl: true,
      url: 'https://duck.ai/favicon.ico',
      hasComponent: false,
    },
  },
  {
    name: '에이닷',
    url: 'https://adot.ai/search/',
    tag: new Set([Tags.MultiLlm]),
    icon: {
      hasUrl: true,
      url: 'https://adot.ai/favicon.ico',
      hasComponent: false,
    },
  },
  {
    name: 'T3.chat',
    url: 'https://t3.chat/',
    tag: new Set([Tags.MultiLlm]),
    icon: {
      hasUrl: true,
      url: 'https://t3.chat/favicon.ico',
      hasComponent: false,
    },
  },
  {
    name: 'Poe',
    url: 'https://poe.com/',
    tag: new Set([Tags.MultiLlm]),
    icon: {
      hasUrl: true,
      url: 'https://psc2.cf2.poecdn.net/assets/favicon.svg',
      hasComponent: true,
      Component: Poe,
    },
  },
  {
    name: 'Yupp',
    url: 'https://yupp.ai/',
    tag: new Set([Tags.MultiLlm]),
    icon: {
      hasUrl: true,
      url: 'https://yupp.ai/favicon.ico',
      hasComponent: false,
    },
  },
] as const satisfies WebAppOption[];
