import 'tw-elements';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Products/ListProducts/ListProducts';
import AddProducts from './Pages/Products/AddProducts/AddProducts';
import Register from './Pages/Register/Register';
import Categories from './Pages/Categories/ListCategories/ListCategories';
import AddCategories from './Pages/Categories/AddCategories/AddCategories';
import Sale from './Pages/Sale/ListSale/ListSale';
import AddSale from './Pages/Sale/AddSale/AddSale';
import Purchases from './Pages/Purchases/ListPurchases/ListPurchases';
import AddPurchases from './Pages/Purchases/AddPurchases/AddPurchases';
import Returns from './Pages/Returns/ListReturns/ListReturns';
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
        <Route path='/list-products' element={<Products />} />
        <Route path='/add-product' element={<AddProducts />} />
        <Route path='/list-categories' element={<Categories />} />
        <Route path='/add-category' element={<AddCategories />} />
        <Route path='/list-sale' element={<Sale />} />
        <Route path='/add-sale' element={<AddSale />} />
        <Route path='/list-purchases' element={<Purchases />} />
        <Route path='/add-purchase' element={<AddPurchases />} />
        <Route path='/list-returns' element={<Returns />} />
        <Route path='/add-return' element={<AddReturns />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/add-customer' element={<AddCustomers />} />
        <Route path='/users' element={<Users />} />
        <Route path='/add-user' element={<AddUsers />} />
        <Route path='/suppliers' element={<Suppliers />} />
        <Route path='/add-supplier' element={<AddSuppliers />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
