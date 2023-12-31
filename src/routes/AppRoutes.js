import { Route, Routes } from "react-router-dom";
// Not-Lazy Loading.
// import HomePage from "../pages/HomePage/HomePage";
// import PrimeVideoPage from "../pages/PrimeVideoPage/PrimeVideoPage";
// import UsersPage from "../pages/UsersPage/UsersPage";
// import ProductsPage from "../pages/ProductsPage/ProductsPage";
// import TodosPage from "../pages/TodosPage/TodosPage";
// import UnitTestingDemoPage from "../pages/UnitTestingDemoPage/UnitTestingDemoPage";
// import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
// import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
// import AddUser from "../pages/UsersPage/components/AddUser";
// import UserDetails from "../pages/UsersPage/components/UserDetails";
import { ErrorBoundary } from "react-error-boundary";
// import FallBack from "../components/FallBack";
import { Suspense, lazy } from "react";
import OurHistory from "../pages/AboutUsPage/components/OurHistory";
import OurTeam from "../pages/AboutUsPage/components/OurTeam";
import OurCareers from "../pages/AboutUsPage/components/OurCareers";

// Lazy Loading.
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const PrimeVideoPage = lazy(() =>
  import("../pages/PrimeVideoPage/PrimeVideoPage")
);
const UsersPage = lazy(() => import("../pages/UsersPage/UsersPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage/ProductsPage"));
const TodosPage = lazy(() => import("../pages/TodosPage/TodosPage"));
const UnitTestingDemoPage = lazy(() =>
  import("../pages/UnitTestingDemoPage/UnitTestingDemoPage")
);
const AboutUsPage = lazy(() => import("../pages/AboutUsPage/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../pages/ContactUsPage/ContactUsPage")
);
const AddUser = lazy(() => import("../pages/UsersPage/components/AddUser"));
const UserDetails = lazy(() =>
  import("../pages/UsersPage/components/UserDetails")
);
const FallBack = lazy(() => import("../components/FallBack"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="spinner spinner-border"></div>}>
      <ErrorBoundary fallback={<FallBack />}>
        <Routes>
          {/* Config  the routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/prime-video" element={<PrimeVideoPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:userId" element={<AddUser />} />
          {/* Dynamic Routing */}
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/unit-testing-demo" element={<UnitTestingDemoPage />} />
          <Route path="/about-us" element={<AboutUsPage />}>
            {/* Nested routing */}
            <Route path="history" element={<OurHistory />} />
            <Route path="team" element={<OurTeam />} />
            <Route path="careers" element={<OurCareers />} />
          </Route>
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export default AppRoutes;
