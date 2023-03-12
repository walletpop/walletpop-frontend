import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Register from "./components/Register";
import Signin from './components/Signin';
import Signout from './components/Signout';
import Personal from './components/Personal';
import NoPage from './components/NoPage';
import DetailsItem from './components/DetailsItem';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/items/:id" element={<DetailsItem/>}/>
          <Route path="signout" element={<Signout />} />
          <Route path="personal" element={<Personal />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
