import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Gallery from "./components/Gallery/Gallery";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Details from "./components/Details/Details";


function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Gallery/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
