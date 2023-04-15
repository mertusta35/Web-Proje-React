import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes ,Route} from "react-router-dom";
import Home from './routes/Home';
import Menu from './routes/Menu';
import Kids from './routes/Kids';


function App() {
  return (  
    <div className="App">

  

    <Routes>
      <Route path='/' element={<Menu/>}>
      <Route  index element={<Home/>}></Route>
      <Route path='/Kids' element={<Kids/>} ></Route>
      </Route>
    </Routes>



    </div>
  );
}

export default App;
