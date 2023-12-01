/** App is a Component
 * imports (optional)
 * component definition
 * export
 */
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

// Functional Component with Named Function
function App() {
  // fn definition == fn body
  // A Component must return JSX
  return (
    <BrowserRouter>
      <Header></Header>
      <main className="container mt-5 pt-2">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

// export const pi = 3.14; // named export
// export const add = (x, y) => x + y ; // named export

export default App; // default export
