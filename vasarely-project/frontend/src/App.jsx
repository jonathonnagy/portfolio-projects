import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import MyCollection from './components/MyCollection';
import Registration from './components/pages/Registration';
import ErrorPage from './components/pages/ErrorPage';
import { useState,useEffect } from "react";

function App() {

  const [page, setPage] = useState("reg");
  const [update, setUpdate] = useState('')

  useEffect(() => {
    if (localStorage.getItem("sessionID")) {
      setPage("log");
    }
  }, [update])

  return (
    <div className="App">

      <Router>
        <Navbar page={page} setPage={page => setPage(page)} childToParentUpdate={update => setUpdate(update)} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/mycollection" element={<MyCollection />} />
          <Route path="/registration" element={<Registration childToParentUpdate={update => setUpdate(update)}/>} />
          <Route path="/*" element={<ErrorPage />} />

        </Routes>
      </Router>      
    </div>
  );
}

export default App;
