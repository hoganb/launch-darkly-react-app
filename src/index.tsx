import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: '6672f9a6a8de891032531ba6',
    context: {
      kind: 'user',
      key: 'example-user-key',
      name: 'Sandy',
    },
  });

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <React.StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </React.StrictMode>,
  );
})();
