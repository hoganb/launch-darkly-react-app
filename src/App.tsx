import './App.css';
import { useFlags } from 'launchdarkly-react-client-sdk';

function App() {
  const { test2 } = useFlags();

  return (
      <div className="App">
        <header className="App-header" style={{backgroundColor: test2 ? '#00844B' : '#373841'}}>
            <p>The test1 feature flag evaluates to <b>{test2 ? 'True' : 'False'}</b></p>
        </header>
      </div>
  );
}

export default App;
