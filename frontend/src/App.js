import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./all/account/Login";

import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/users/Users";
import Products from "./admin/pages/products/Products";
import AddProduct from "./admin/pages/products/AddProduct";
import EditProduct from "./admin/pages/products/EditProduct";
import AddUser from "./admin/pages/users/AddUser";
import EditUser from "./admin/pages/users/EditUser";

import DashboardCSSX from "./cssx/pages/Dashboard";
import StatisticCSSX from "./cssx/pages/Statistic";
import ImportProductsCSSX from "./cssx/pages/Products/ImportProducts";
import ExportProductsCSSX from "./cssx/pages/Products/ExportProducts";
import ProductsCSSX from "./cssx/pages/Products/Products";
import InsuranceCSSX from "./cssx/pages/Products/Insurance";
import AddProductInCSSX from "./cssx/components/products/AddProductInCSSX";
import ExportProductInCSSX from "./cssx/components/products/ExportProductInCSSX";
import InsuranceInCSSX from "./cssx/components/products/InsuranceInCSSX";

import DashboardDLPP from "./dlpp/pages/Dashboard";
import StatisticDLPP from "./dlpp/pages/Statistic";
import ProductsDLPP from "./dlpp/pages/Products/Products";
import ImportProductsDLPP from "./dlpp/pages/Products/ImportProducts";
import ExportProductsDLPP from "./dlpp/pages/Products/ExportProducts";
import InsuranceDLPP from "./dlpp/pages/Products/Insurance";
import AddProductInDLPP from "./dlpp/components/products/AddProductInDLPP";
import ImportProductInDLPP from "./dlpp/components/products/ImportProductInDLPP";
import ExportProductInDLPP from "./dlpp/components/products/ExportProductInDLPP";
import InsuranceInDLPP from "./dlpp/components/products/InsuranceInDLPP";
import FinishedInDLPP from "./dlpp/components/products/FinishedInDLPP";


import DashboardTTBH from "./ttbh/pages/Dashboard";
import StatisticTTBH from "./ttbh/pages/Statistic";
import ProductsTTBH from "./ttbh/pages/Insurance/Products";
import SuccessfulTTBH from "./ttbh/pages/Insurance/Successful";
import ErrorsTTBH from "./ttbh/pages/Insurance/Errors";
import ImportInTTBH from "./ttbh/components/insurance/ImportInTTBH";
import StatusInTTBH from "./ttbh/components/insurance/StatusINTTBH";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          // All
          <Route path="/" element={<Login />} />

          //Admin
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/users/add" element={<AddUser />} />
          <Route path="/admin/users/edit/:id" element={<EditUser />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/products/add" element={<AddProduct />} />
          <Route path="/admin/products/edit/:id" element={<EditProduct />} />

          //CSSX
          <Route path="/cssx/dashboard" element={<DashboardCSSX />} />
          <Route path="/cssx/statistic" element={<StatisticCSSX />} />
          <Route path="/cssx/products" element={<ProductsCSSX />} />
          <Route path="/cssx/import" element={<ImportProductsCSSX />} />
          <Route path="/cssx/export" element={<ExportProductsCSSX />} />
          <Route path="/cssx/insurance" element={<InsuranceCSSX />} />
          <Route path="/cssx/import/add" element={<AddProductInCSSX />} />
          <Route path="/cssx/export/exportnew" element={<ExportProductInCSSX />} />
          <Route path="/cssx/insurance/required" element={<InsuranceInCSSX />} />

          //DLPP
          <Route path="/dlpp/dashboard" element={<DashboardDLPP />} />
          <Route path="/dlpp/statistic" element={<StatisticDLPP />} />
          <Route path="/dlpp/products" element={<ProductsDLPP />} />
          <Route path="/dlpp/import" element={<ImportProductsDLPP />} />
          <Route path="/dlpp/export" element={<ExportProductsDLPP />} />
          <Route path="/dlpp/insurance" element={<InsuranceDLPP />} />
          <Route path="/dlpp/import/add" element={<AddProductInDLPP />} />
          <Route path="/dlpp/import/import" element={<ImportProductInDLPP />} />
          <Route path="/dlpp/export/new" element={<ExportProductInDLPP />} />
          <Route path="/dlpp/insurance/new" element={<InsuranceInDLPP />} />
          <Route path="/dlpp/insurance/finished" element={<FinishedInDLPP />} />

          //TTBH
          <Route path="/ttbh/dashboard" element={<DashboardTTBH />} />
          <Route path="/ttbh/statistic" element={<StatisticTTBH />} />
          <Route path="/ttbh/products" element={<ProductsTTBH />} />
          <Route path="/ttbh/successful" element={<SuccessfulTTBH />} />
          <Route path="/ttbh/errors" element={<ErrorsTTBH />} />
          <Route path="/ttbh/products/import" element={<ImportInTTBH />} />
          <Route path="/ttbh/products/status" element={<StatusInTTBH />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;