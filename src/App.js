import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Content from "./components/Content";
import Bonsai from "./components/Bonsai";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import CircularBar from "./components/CircularBar";

const routes = [
  { name: "welcome", url: "/", component: Welcome },
  { name: "counter", url: "/counter", component: Counter },
  { name: "about page", url: "/about", component: About },
  { name: "content page", url: "/content", component: Content },
  { name: "bonsai", url: "/bonsai", component: Bonsai },
  { name: "Todos", url: "/todos", component: Todos },
  { name: "CircularBar", url: "/circularbar", component: CircularBar },
];

function App() {
  return (
    <div className="App">
      <h2>React SAP</h2>
      <ol style={{ columns: 4 }}>
        {routes.map((el, idx) => (
          <li key={el.name + "-" + idx}>
            <Link to={el.url}>{el.name}</Link>
          </li>
        ))}
      </ol>
      <hr />
      <Routes>
        {routes.map((el, idx) => (
          <Route
            key={el.name + "." + idx}
            path={el.url}
            element={<el.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
