/** App is a Component
 * imports (optional)
 * component definition
 * export
 */
import "./App.css";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./contexts/CartContext";
import { ErrorBoundary } from "react-error-boundary";
import FallBack from "./components/FallBack";

// Functional Component with Named Function
function App() {
  // fn definition == fn body
  // A Component must return JSX
  return (
    <BrowserRouter>
      <CartProvider>
        <Header></Header>
        <main className="container mt-5 pt-2">
          {/* Config the routes in between header and footer */}
          <AppRoutes />
        </main>
      </CartProvider>
      <ErrorBoundary fallback={<FallBack />}>
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

// export const pi = 3.14; // named export
// export const add = (x, y) => x + y ; // named export

export default App; // default export
