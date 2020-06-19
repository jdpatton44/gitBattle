import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle';
import { ThemProvider } from './contexts/theme';

class App extends React.Component {
  constructor() {
    super(props);

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light',
        }));
      },
    };
  }

  render() {
    return (
      <ThemProvider value={this.state}>
        <div className="container">
          <Battle />
        </div>
      </ThemProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
