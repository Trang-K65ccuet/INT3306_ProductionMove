import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/pages/Dashboard";
import Login from "./all/account/Login";
import Users from "./admin/pages/users/Users";
import Products from "./admin/pages/products/Products";
import AddProduct from "./admin/pages/products/AddProduct";
import EditProduct from "./admin/pages/products/EditProduct";
import AddUser from "./admin/pages/users/AddUser";
import EditUser from "./admin/pages/users/EditUser";
import DashboardCSSX from "./cssx/pages/Dashboard";
import DashboardDLPP from "./dlpp/pages/Dashboard";
import DashboardTTBH from "./ttbh/pages/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/users/add" element={<AddUser />} />
          <Route path="/admin/users/edit/:id" element={<EditUser />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/products/add" element={<AddProduct />} />
          <Route path="/admin/products/edit/:id" element={<EditProduct />} />

          <Route path="/cssx/dashboard" element={<DashboardCSSX />} />

          <Route path="/dlpp/dashboard" element={<DashboardDLPP />} />
          
          <Route path="/ttbh/dashboard" element={<DashboardTTBH />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;