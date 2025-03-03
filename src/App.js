// import { BrowserRouter as Router } from 'react-router-dom';
// // import './App.css';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import AppRoutes from './AppRoutes';

// function App() {
//   return (
//     <>
//       <Router>
//         <div className="App">
//             <AppRoutes />
//         </div>
//       </Router>
//       <ToastContainer />
//     </>
//   );
// }

// export default App;


import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './AppRoutes';
import { PermissionsProvider } from './context/PermissionContext';

function App() {
  return (
    <>
      <Router>
        <PermissionsProvider>
          <div className="App">
            <AppRoutes />
          </div>
        </PermissionsProvider>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;

