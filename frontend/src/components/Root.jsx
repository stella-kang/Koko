import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import '../index.scss';
import App from './App';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <App />
      </HashRouter>
      <div className="koko-container">
        <div className="koko-cat">
          <div className="ear"></div>
          <div className="eye"></div>
          <div className="mouth"></div>
          <div className="nose"></div>
          <div className="tail"></div>
          <div className="body"></div>
        </div>
      </div>
    </Provider>
  )
}

export default Root
