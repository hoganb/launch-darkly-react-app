import './App.css';
import { useFlags } from 'launchdarkly-react-client-sdk';

function App() {
  const { test1 } = useFlags();

  return (
      <div className="App">
        <header className="App-header" style={{backgroundColor: test1 ? '#00844B' : '#373841'}}>
            <p>The test1 feature flag evaluates to <b>{test1 ? 'True' : 'False'}</b></p>
        </header>
      </div>
  );
}

export default App;
