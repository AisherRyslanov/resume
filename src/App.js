import './App.scss';
import Header from "./components/Header";
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>} />

            <Route path={"/about"} element={<About/>} />
            <Route path={"/contacts"} element={<Contacts/>} />
            <Route path={"/projects"} element={<Projects/>} />
            <Route path={"/skills"} element={<Skills/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
