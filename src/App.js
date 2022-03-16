import "./App.css";
import UserList from "./Components/UserList";
import NewUser from "./Components/NewUser";
import { Switch, Route } from "react-router-dom";
import Aditional from "./Components/Aditional";
import Nav from "./Components/Nav";

function App() {
  let name;
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={UserList} exact />
        <Route path="/aditional" component={Aditional} />
        <Route path="/addUser" component={() => <NewUser name={name} />} />
      </Switch>
    </div>
  );
}

export default App;
