export enum Tags {
  Default = 'default',
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
};

export const OPTIONS = [
  {
    name: 'ChatGPT',
    url: 'https://chatgpt.com/',
    tag: new Set([Tags.Default, Tags.Foundation]),
  },
  {
    name: 'Claude',
    url: 'https://claude.ai/new',
    tag: new Set([Tags.Default, Tags.Foundation]),
  },
  {
    name: 'Gemini',
    url: 'https://gemini.google.com/',
    tag: new Set([Tags.Foundation]),
  },
  {
    name: 'Grok',
    url: 'https://grok.com/',
    tag: new Set([Tags.Foundation]),
  },
  {
    name: 'Mistral Le Chat',
    url: 'https://chat.mistral.ai/chat',
    tag: new Set([Tags.Foundation]),
  },
  {
    name: 'Perplexity',
    url: 'https://www.perplexity.ai/',
    tag: new Set([Tags.Default, Tags.Search, Tags.MultiLlm]),
  },
  {
    name: 'Liner',
    url: 'https://getliner.com',
    tag: new Set([Tags.Search, Tags.MultiLlm]),
  },
  {
    name: 'Alan',
    url: 'https://alan.est.ai',
    tag: new Set([Tags.Search, Tags.MultiLlm]),
  },
  {
    name: 'MS Copilot',
    url: 'https://copilot.microsoft.com',
    tag: new Set([Tags.Application]),
  },
  {
    name: 'Manus',
    url: 'https://manus.im/app',
    tag: new Set([Tags.Agent]),
  },
  {
    name: 'Genspark',
    url: 'https://www.genspark.ai/',
    tag: new Set([Tags.Agent, Tags.Application, Tags.Search]),
  },
  {
    name: 'LM Arena',
    url: 'https://lmarena.ai',
    tag: new Set([Tags.MultiLlm]),
  },
  {
    name: 'Duck.ai',
    url: 'https://duck.ai/',
    tag: new Set([Tags.Default, Tags.MultiLlm]),
  },
  {
    name: '에이닷',
    url: 'https://adot.ai/search/',
    tag: new Set([Tags.MultiLlm]),
  },
  {
    name: 'T3.chat',
    url: 'https://t3.chat/',
    tag: new Set([Tags.MultiLlm]),
  },
  {
    name: 'Yupp',
    url: 'https://yupp.ai/',
    tag: new Set([Tags.MultiLlm]),
  },
] as const satisfies WebAppOption[];
