import './Main.css';
import Login from './components/Login';
import ListCrew from './components/ListCrew';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AddPirate from './components/AddPirate';
import EditPirate from './components/EditPirate';


function Main() {
  return (
    <div className="App">
        
    <BrowserRouter>
      <Routes>
          <Route path='/pirate/new' element={<AddPirate/>}>    </Route>
          <Route path='/pirates' element={<ListCrew/>}>    </Route>
          <Route path='/pirate/:id' element={<EditPirate/>}>    </Route>
          <Route path='*' element={<Login/>}>    </Route>
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default Main;
