
import { useState } from 'react/cjs/react.development';
import User from './components/User/User';
import styles from './stylesGlobal.module.css';
import CardUser from './components/User/CardUser/CardUser';
import ShowUsers from './components/ShowUsers/ShowUser';


function App() {

  const [listUsers, setListUsers] = useState([]);


  const addUserHandler = (name, age) => {
    setListUsers((preventUsers) => {
      return [
        ...preventUsers,
        { name: name, age: age, id: Math.random().toString }
      ]
    })
  }

  const CardList = <CardUser className={styles.list}>
    <ShowUsers users={listUsers} />
  </CardUser>;

  return (
    <div className={styles.App}>
      <User addNewUser={addUserHandler} />
      {listUsers.length === 0 ? <p className={styles.noUsers}>Not found Users</p> : CardList}
    </div>
  );
}

export default App;
