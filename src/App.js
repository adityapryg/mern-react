import './App.css';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Todo from './todo/pages/Todo';
import User from './user/pages/User';
import NewTodo from './todo/pages/NewTodo';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Todo}/>
        <Route path="/tambah" exact component={NewTodo}/>
        <Route path="/user" exact component={User}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
