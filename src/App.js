import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Portfolio from './Components/Portfolio/Portfolio';
import NotFound from './Components/NotFound/NotFound';
 
let routers= createBrowserRouter([{
  path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},

    {path:"portfolio",element:<Portfolio/>},
    {path:"about", element:<About/>},
    {path:"contact",element:<Contact/>},
    {path:"*",element:<NotFound/> }
  ]
}])
function App() {
  return (
  <RouterProvider router={routers}></RouterProvider>
  );
}

export default App;
