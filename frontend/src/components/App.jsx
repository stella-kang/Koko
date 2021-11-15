import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/Splash';
import LoginForm from './session/LoginForm';
import RegisterForm from './session/RegisterForm';
import Home from './home/Home';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Splash} />
      <AuthRoute exact path='/login' component={LoginForm} />
      <AuthRoute exact path='/register' component={RegisterForm} />
      <ProtectedRoute exact path='/home' component={Home} />
      <Redirect to='/' />
    </Switch>
  )
}

export default App
