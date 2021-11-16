import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Koko from './koko/koko';
import DayShow from "./day_show/DayShow";
import '../index.scss';
import App from './App';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <App />
      </HashRouter>
      <Koko />
      <DayShow />
    </Provider>
  )
}

export default Root
