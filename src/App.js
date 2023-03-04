import React from 'react';
import './App.css';

// React Router
import { 
  createHashRouter,
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
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/team' element={<Team />} />
      <Route path='/career' element={<Career />} />
      <Route path='/partnership' element={<Partnership />} />
      <Route path='/partnership/:id' element={<InnerPartnership />} />
      <Route path='/contact' element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
