import 'tw-elements';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Products/Products/Products';
import AddProducts from './Pages/Products/AddProducts/AddProducts';
import Register from './Pages/Register/Register';
import Categories from './Pages/Categories/Categories/Categories';
import AddCategories from './Pages/Categories/AddCategories/AddCategories';
import Sale from './Pages/Sale/Sale/Sale';
import AddSale from './Pages/Sale/AddSale/AddSale';
import Purchases from './Pages/Purchases/Purchases/Purchases';
import AddPurchases from './Pages/Purchases/AddPurchases/AddPurchases';
import Returns from './Pages/Returns/Returns/Returns';
import AddReturns from './Pages/Returns/AddReturns/AddReturns';
import Customers from './Pages/People/Customers/Customers/Customers';
import AddCustomers from './Pages/People/Customers/AddCustomers/AddCustomers';
import Users from './Pages/People/Users/Users/Users';
import AddUsers from './Pages/People/Users/AddUsers/AddUsers';
import Suppliers from './Pages/People/Suppliers/Suppliers/Suppliers';
import AddSuppliers from './Pages/People/Suppliers/AddSuppliers/AddSuppliers';
import Reports from './Pages/Reports/Reports';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/add-products' element={<AddProducts />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/add-categories' element={<AddCategories />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/add-sale' element={<AddSale />} />
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/add-purchases' element={<AddPurchases />} />
        <Route path='/returns' element={<Returns />} />
        <Route path='/add-returns' element={<AddReturns />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/add-customers' element={<AddCustomers />} />
        <Route path='/users' element={<Users />} />
        <Route path='/add-users' element={<AddUsers />} />
        <Route path='/suppliers' element={<Suppliers />} />
        <Route path='/add-suppliers' element={<AddSuppliers />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
