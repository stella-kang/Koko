import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './nav/NavBar';
import ModalManager from './modals/ModalManager';
import Splash from './splash/Splash';
import LoginForm from './session/LoginForm';
import RegisterForm from './session/RegisterForm';
import Home from './home/Home';
import Footer from './footer/Footer';
import DayShow from "./day_show/DayShow"

const App = () => {
  return (
    <>
      <NavBar />
      <ModalManager />
      <Switch>
        <Route exact path='/' component={Splash} />
        <AuthRoute exact path='/login' component={LoginForm} />
        <AuthRoute exact path='/register' component={RegisterForm} />
        <ProtectedRoute path='/home' component={Home} />
        <ProtectedRoute path='/day' component={DayShow} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </>
  )
}

export default App
