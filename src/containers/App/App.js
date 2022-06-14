import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Scrollbar from '../../components/scrollbar'
import Rout from "../__Rout";
import '../../css/style.css';
import '../../css/responsive.css';

function App() {
  return (
    <BrowserRouter>
        <div className="App" id='scrool'>
          
                <Rout />
         
            <Scrollbar/>
        </div>
    </BrowserRouter>
  );
}

export default App;
