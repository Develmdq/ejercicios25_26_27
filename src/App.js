import TodoList from "./components/TodoList";
import { StoreProvider } from "./store/StoreProvider";
import styles from "./style/styledGlobal.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo-List</h1>
      <StoreProvider>
        <TodoList />
      </StoreProvider>
    </div>
  );
};

export default App;
