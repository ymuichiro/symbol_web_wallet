if (typeof Buffer === 'undefined') global.Buffer = require('buffer').Buffer;
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Account, EncryptedMessage, NetworkType, PublicAccount } from 'symbol-sdk';

function App() {

  useEffect(() => {
    const account = Account.generateNewAccount(NetworkType.TEST_NET);
    console.log(EncryptedMessage.create("test", account.publicAccount, account.privateKey).payload);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
