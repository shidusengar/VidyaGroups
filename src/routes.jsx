import LandingPage from './pages/LandingPage';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar        from './components/Navbar';
import Footer        from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

import Home    from './pages/Home';
import Solar   from './pages/Solar';
import Hostel  from './pages/Hostel';
import Mess    from './pages/Mess';
import Library from './pages/Library';
import Contact from './pages/Contact';

export function Layout() {
  return (
    <HelmetProvider>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
    </HelmetProvider>
  );
}

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'solar', element: <Solar /> },
      { path: 'hostel', element: <Hostel /> },
      { path: 'mess', element: <Mess /> },
      { path: 'library', element: <Library /> },
      { path: 'contact', element: <Contact /> },

      // SEO Landing Pages
      { path: 'hostel-near-abes-college', element: <LandingPage service="hostel" location="ABES College" /> },
      { path: 'hostel-in-crossing-republik', element: <LandingPage service="hostel" location="Crossing Republik" /> },
      
      { path: 'tiffin-service-in-indirapuram', element: <LandingPage service="mess" location="Indirapuram" /> },
      { path: 'tiffin-service-in-kaushambi', element: <LandingPage service="mess" location="Kaushambi" /> },
      
      { path: 'library-in-indirapuram', element: <LandingPage service="library" location="Indirapuram" /> },
      { path: 'library-in-kaushambi', element: <LandingPage service="library" location="Kaushambi" /> },
      
      { path: 'solar-company-in-ghaziabad', element: <LandingPage service="solar" location="Ghaziabad" /> },
      { path: 'solar-company-in-noida', element: <LandingPage service="solar" location="Noida" /> },
      { path: 'solar-company-in-greater-noida', element: <LandingPage service="solar" location="Greater Noida" /> },
      { path: 'solar-company-in-hapur', element: <LandingPage service="solar" location="Hapur" /> },
      { path: 'solar-company-in-meerut', element: <LandingPage service="solar" location="Meerut" /> },

    ],
  },
];
