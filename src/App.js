import clsx from 'clsx';
import styles from './App.module.scss';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className={clsx(styles.app)}>
      <div className={clsx(styles.container)}>
        <ListContainer />
      </div>
    </div>
  );
}

export default App;
