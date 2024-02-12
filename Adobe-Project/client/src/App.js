import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import MainPagePC from './pages/MainPagePC';
function App(){
    return (
        <Router>
            <Routes>
                <Route path = '/' element = {<MainPagePC/>}/>
            </Routes>
        </Router>
    )
}
export default App;