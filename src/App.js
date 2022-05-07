import 'tw-elements';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header/Header';
import Offer from './Pages/Home/Offer/Offer';
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
import RequireAuth from './Hooks/RequireAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ManageItems from './Pages/Items/ManageItems/ManageItems';
import About from './Pages/About/About/About';
AOS.init();

function App() {
  return (
    <div data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
      <Offer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>} />
        <Route path='/inventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        } />
        <Route path='/inventory' element={<ManageItems />} />
        <Route path='/add-item' element={<AddItem />} />
        <Route path='/my-items' element={<MyItems />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
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
