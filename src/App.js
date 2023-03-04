import React from 'react';
import './App.css';

// React Router
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';


// Components
import Navbar from './components/navbar/Navbar';

// Pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Team from './pages/team/Team';
import Career from './pages/career/Career';
import Partnership from './pages/partnership/Partnership';
import Contact from './pages/contact/Contact';
import InnerPartnership from './pages/innerpartnership/InnerPartnership';
import NotFound from './pages/notfound/NotFound';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/rizer-digital" element={<Navbar />}>
      <Route path="/rizer-digital" element={<Home />} />
      <Route path="/rizer-digital/about" element={<About />} />
      <Route path='/rizer-digital/team' element={<Team />} />
      <Route path='/rizer-digital/career' element={<Career />} />
      <Route path='/rizer-digital/partnership' element={<Partnership />} />
      <Route path='/rizer-digital/partnership/:id' element={<InnerPartnership />} />
      <Route path='/rizer-digital/contact' element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
