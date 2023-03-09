import './assets/css/index.css'
import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import LandingPage from './landingPage'
import Login from './Login';
import Navbar from './Navbar'
import Posts from './Posts'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact  path="/" element={<LandingPage/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/Posts" element={<Posts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
