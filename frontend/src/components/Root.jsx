import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import '../index.scss';
import App from './App';
import StatsWidget from './stats/StatsWidget';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
        <StatsWidget />
      </HashRouter>
    </Provider>
  );
};

export default Root;
