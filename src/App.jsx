
import './App.css';
import './index.css';
import { RouterProvider ,Outlet, createBrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';


 

function App() {
  
  const Layout = ()=>{
    return(
      <div className='components'>
        <Header />
        <Navbar />
        <Footer />  
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        
          <Layout />
       
      ,
      children:[
        {
          path: "/",
        }
      ]
    }
  ])



  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
