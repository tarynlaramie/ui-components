import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';

import Test1 from '@abgov/web-components2';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <h1>Welcome to demo-react-demo!</h1>
      </header>
      <main>
        <Test1 />
      </main>
    </div>
  );
}

export default App;
