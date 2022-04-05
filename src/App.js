import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import DashBoard from './Components/DashBoard/DashBoard';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="">
     
     <Header/>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/dashboard' element={<DashBoard />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        

      </Routes>

    </div>
  );
}

export default App;
