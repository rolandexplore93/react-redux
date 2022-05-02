import { Provider } from 'react-redux'
import store from './redux/store';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import HooksIceCreamContainer from './Components/HooksIceCreamContainer';
import AppleContainer from './Components/AppleContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    // provide the redux store as a props
    <Provider store={store}>
        <div className="App">
          {/* <HooksCakeContainer />
          <CakeContainer />
          <IceCreamContainer />
          <HooksIceCreamContainer />
          <AppleContainer />
          <ItemContainer cake />
          <ItemContainer /> */}
          <UserContainer />
        </div>
    </Provider>
    
  );
}


export default App;
