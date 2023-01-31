import React from 'react'
import {BrowserRouter,Routes,Link,Route} from 'react-router-dom';

import {logo} from './assets/index.js';
import {Home, CreatePost} from './pages/index.js';


const App = () => {
  return (
    <BrowserRouter>
        <header className='w-full flex justify-between items-center bg-white sm:px-8 px-2 py-4 border-b border-b-[#e6ebf4]'>
            <Link to="/">
              <img src={logo} alt="logo" className="w-25  object-contain" />
            </Link>

            <Link to="/create-post" className="font-inter  font-medium bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              Criar Imagem
            </Link>
        </header>

        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafa] min-h-[calc(100vh-73px)]"> 
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/create-post' element={<CreatePost />} />

            </Routes>
        </main>
    </BrowserRouter>
  )
}
  
export default App 