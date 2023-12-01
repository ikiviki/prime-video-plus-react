import React from "react"; // Import official react library.
import ReactDOM from "react-dom/client"; // Importing react-dom to work with the DOM.
import 'bootstrap/dist/css/bootstrap.min.css'; // Tightly Integrating Bootstrap (RECOMMENDED)
/**
 * Put any other imports below so that CSS from your
 * components takes precedence over default styles.
 */
import "./index.css"; // Importing css.
import App from "./App"; // Importing App Component.
// Below: pi, add is named export and its name cannot be changed, also this Object should be DESTRUCTURED hence inside { XX }.
// import App123, { pi, add } from './App'; // App1 is a default export - hence the import name can be changed.
import reportWebVitals from "./reportWebVitals"; // Importing webvitals setup.
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
// App component is rendered in a div that has an id 'root'.
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
    {/* Below: calling default export with different name = App123 */}
    {/* <App123 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
