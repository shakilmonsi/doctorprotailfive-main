import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer/Footer';
import router from './Routs/Rout/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto' >
 <RouterProvider router={router}></RouterProvider>
 <Toaster/>

    </div>
  );
}

export default App;
