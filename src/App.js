import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <div>
      <h1>I am Shop</h1>
    </div>
  );
};

const App = () => {
  return (
    // If you are using Routes to Navigate through the react application
    // You should keep all your <Component /> tags inside <Routes> tag.
    <Routes>
      {/* Will hold <Component/> inside and assign a `path` to it. 
      Can hold children routes which will change with path under parent.*/}
      <Route path="/" element={<Navigation />}>
        {/* `index` represents that <Home/> is rendered in parent path, which is `/`. */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
