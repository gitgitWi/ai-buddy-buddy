import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Counter, Header } from '@buddy/ui';
import typescriptLogo from '/typescript.svg';

const App = () => (
  <div>
    <a href="https://vitejs.dev" rel="noopener" target="_blank">
      <img alt="Vite logo" className="logo" src="/vite.svg" />
    </a>
    <a href="https://www.typescriptlang.org/" rel="noopener" target="_blank">
      <img
        alt="TypeScript logo"
        className="logo vanilla"
        src={typescriptLogo}
      />
    </a>
    <Header title="Web" />
    <div className="card">
      <Counter />
    </div>
  </div>
);

createRoot(document.getElementById('app')!).render(<App />);
