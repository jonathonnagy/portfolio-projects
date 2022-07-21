import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Browse from "./pages/Browse";
import MyCoins from "./pages/MyCoins";
import Registrate from "./pages/Registrate";
import Login from "./pages/Login";
import Callback from "./pages/Callback";
import Protected from "./components/Protected";
import AddUsername from "./pages/AddUsername";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Browse />
            </Protected>
          }
        />
        <Route
          path="/mycoins"
          element={
            <Protected>
              <MyCoins />
            </Protected>
          }
        />
        <Route path="/addusername" element={<AddUsername />} />
        {/* <Route path="/registrate" element={<Registrate />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
