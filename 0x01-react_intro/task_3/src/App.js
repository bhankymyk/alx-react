import logo from './holbertonLogo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
    <p>Login to access the full dashboard fg</p>
      <label>Email</label>
      <input name="email" type="email" id="email"></input>
      <label>Email</label>
      <input name="password" type="password" id="password"></input>
      </body>
      <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
