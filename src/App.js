import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import router from './Routs/Rout/Routes';

function App() {
  return (
    <div >
 <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
