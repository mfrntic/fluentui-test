import './App.css';
import Footer from './components/Footer';

import MainMenu from './components/MainMenu';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> }
])

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (

    <div className="App">
      <MainMenu />
      <div className="body">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="content">
          <RouterProvider router={router}>

          </RouterProvider>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
