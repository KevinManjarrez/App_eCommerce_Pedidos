import './App.css';
import Barra from './components/Barra.jsx';
import VerPagos from './components/VerPagos.jsx';
import DeletePagos from './components/DeletPagos'
import UpdatePagos from './components/UpdatePagos'
import InsertarPagos from './components/InsertarPagos'
import {BrowserRouter as Router,Route} from 'react-router-dom';
//import Login from './components/Login.jsx';
//import index from './components';
// <Route path='/' exact component={Login}/>
function App() {
  return (
   <Router>
     <Barra/>
     <Route path='/verPagos' exact component={VerPagos}/>
     <Route path='/deletePago' exact component={DeletePagos}/>
     <Route path='/updatePago' exact component={UpdatePagos}/>
     <Route path='/insertarPago' exact component={InsertarPagos}/>
   </Router> 
  );
}

export default App;
  