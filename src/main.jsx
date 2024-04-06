import { wallets } from '@cosmos-kit/keplr-extension';
import { ChainProvider } from '@cosmos-kit/react';
import "@interchain-ui/react/styles";
import { assets, chains } from "chain-registry";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import mantra from './chainconfig';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChainProvider
      chains={[...chains, mantra]}
      assetLists={assets}
      wallets={wallets}
    >
      <App />
    </ChainProvider>
  </React.StrictMode>,
)
