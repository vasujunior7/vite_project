import { useChain, useWallet } from '@cosmos-kit/react';
import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  const { username, connect, disconnect, wallet, openView } = useChain("mantrachaintestnet");
  const { status, mainWallet } = useWallet("keplr-extension");

  return (
    <button
      onClick={async () => {
        if (status !== "Connected") {
          openView();
        } else {
          disconnect();
        }
      }}
    >
      {status !== "Connected" ? "Connect Wallet" : "Disconnect"}
    </button>
  )
}

export default App
