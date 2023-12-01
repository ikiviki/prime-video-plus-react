import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PrimeVideoPage from "../pages/PrimeVideoPage/PrimeVideoPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import TodosPage from "../pages/TodosPage/TodosPage";
import UnitTestingDemoPage from "../pages/UnitTestingDemoPage/UnitTestingDemoPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
import AddUser from "../pages/UsersPage/components/AddUser";
import UserDetails from "../pages/UsersPage/components/UserDetails";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Config  the routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/prime-video" element={<PrimeVideoPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/add" element={<AddUser />} />
      <Route path="/users/1" element={<UserDetails />} />
      {/* TODO: Nested routing - move into routes folder
          <Route path="/users" element={<UsersPage />}>
            <Route path="/users/add" element={<AddUser />} />
            <Route path="/users/1" element={<UserDetails />} />
          </Route> */}
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/unit-testing-demo" element={<UnitTestingDemoPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
    </Routes>
  );
};

export default AppRoutes;