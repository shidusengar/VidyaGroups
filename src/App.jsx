import { Routes, Route } from 'react-router-dom';

import Navbar        from './components/Navbar';
import Footer        from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

import Home    from './pages/Home';
import Solar   from './pages/Solar';
import Hostel  from './pages/Hostel';
import Mess    from './pages/Mess';
import Library from './pages/Library';

import './styles/global.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/mess" element={<Mess />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
