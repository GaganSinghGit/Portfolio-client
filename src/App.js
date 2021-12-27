import './App.css';
import Body from './Components/Body/Body';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact >
        <Body />
        </Route>
        <Route path="/test" exact>
          <div>
            this is for testing
          </div>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
