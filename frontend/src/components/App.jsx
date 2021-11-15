import { Route, Switch } from 'react-router-dom';
import LoginForm from './session/LoginForm';
import RegisterForm from './session/RegisterForm';

const App = () => {
  return (
    <Switch>
      <Route exact path='/login' component={LoginForm} />
      <Route exact path='/register' component={RegisterForm} />
    </Switch>
  )
}

export default App
