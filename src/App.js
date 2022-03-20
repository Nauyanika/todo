
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import UpdateTodo from './Components/UpdateTodo';



function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}/>

        <Route path="/Login" element={<Login />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/UpdateTodo" element={<UpdateTodo />}/>

      <Route path="/Register" element={<Register />}/>
         
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
