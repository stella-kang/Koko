import { Route, Switch } from 'react-router-dom';
import LoginForm from './session/LoginForm';

const App = () => {
  return (
    <Switch>
      <Route exact path='/login' component={LoginForm} />
    </Switch>
  )
}

export default App
