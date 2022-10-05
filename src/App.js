import { Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home/Home"

function App() {
  return (
    <div >
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
   </Routes>

    </div>
  );
}

export default App;
