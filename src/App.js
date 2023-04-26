import './App.scss';
import {Routes, Route } from 'react-router-dom';
import {Home} from "./components/Home";
import {Questions} from "./components/Questions";

function App() {
  return (
    <div className="app">
        <div className="container">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/html" element={<Questions title="HTML" content="html"/>}/>
                <Route path="/css" element={<Questions title="CSS" content="css"/>}/>
                <Route path="/js" element={<Questions title="JavaScript" content="js"/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
