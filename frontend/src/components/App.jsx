import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './nav/NavBar';
import ModalManager from './modals/ModalManager';
import Splash from './splash/Splash';
import LoginFormPage from './session/LoginFormPage';
import RegisterFormPage from './session/RegisterFormPage';
import Home from './home/Home';
import DayShow from "./day_show/DayShow"

const App = () => {
  return (
    <main>
      <NavBar />
      <ModalManager />
      <Switch>
        <Route exact path='/' component={Splash} />
        <AuthRoute exact path='/login' component={LoginFormPage} />
        <AuthRoute exact path='/register' component={RegisterFormPage} />
        <ProtectedRoute path='/home' component={Home} />
        <ProtectedRoute path='/day' component={DayShow} />
        <Redirect to='/' />
      </Switch>
    </main>
  );
};

export default App;
