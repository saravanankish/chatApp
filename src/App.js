import './App.css';
import Login from './components/Login/Login';
import "tailwindcss/tailwind.css";
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import ChatScreen from './components/ChatScreen/ChatScreen';

function App() {
  return (
    <div className="App h-screen">
      <p className="md:hidden text-center font-semibold text-2xl mt-28">See in desktop for full view</p>
      <div className="App hidden md:block">
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/chats">
              <ChatScreen />
            </Route>
            <Redirect to="/login"></Redirect>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
