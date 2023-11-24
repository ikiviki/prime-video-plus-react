/** App is a Component
 * imports (optional)
 * component definition
 * export
 */

import Header from "./components/Header";

// Functional Component with Named Function
function App() {
  // fn definition == fn body
  // A Component must return JSX
  return (
    <div>
      <Header></Header>
        <h1>Hello App-Comp !!</h1>
    </div>
  );
}

// export const pi = 3.14; // named export
// export const add = (x, y) => x + y ; // named export

export default App; // default export
