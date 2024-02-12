// import logo from './logo.svg';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import MainPagePC from './pages/MainPagePC.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
            <Route path = '/' element = {<MainPagePC/>}/>
        </Routes>
    </Router>
)
}

export default App;
