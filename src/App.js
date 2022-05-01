import 'tw-elements';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/User/Login/Login';
import Register from './Pages/User/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import AddItem from './Pages/Items/AddItem/AddItem';
import MyItems from './Pages/Items/MyItems/MyItems';
import Blog from './Pages/Blog/Blog';
import Profile from './Pages/User/Profile/Profile';
import Settings from './Pages/User/Settings/Settings';
import Footer from './Components/Footer/Footer';
import ForgotPassword from './Pages/User/ForgotPassword/ForgotPassword';
import Inventory from './Pages/Inventory/Inventory/Inventory';
import ManageInventory from './Pages/Inventory/ManageInventory/ManageInventory/ManageInventory';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/inventory/:id' element={<Inventory />} />
        <Route path='/inventory' element={<ManageInventory />} />
        <Route path='/add-item' element={<AddItem />} />
        <Route path='/my-items' element={<MyItems />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
