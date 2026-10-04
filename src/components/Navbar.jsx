import { PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import VidyaLogo from './Logo';

const NAV_ITEMS = [
  { id: '/',       label: 'Home'       },
  { id: '/solar',  label: 'Solar'  },
  { id: '/hostel', label: 'Hostel'  },
  { id: '/mess',   label: 'Mess'    },
  { id: '/library',label: 'Library' },
  { id: '/contact',label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav>
      {/* ── Logo ── */}
      <div className="nav-logo" onClick={() => go('/')}>
        {/* Circle badge: green-dark→green-main gradient + gold ring + white SVG logo */}
        <VidyaLogo size={44} variant="circle" />

        <div className="nav-logo-text">
          Vidya Groups
          <small>Ghaziabad, UP</small>
        </div>
      </div>

      {/* ── Nav Links ── */}
      <ul className={`nav-center${menuOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.id}
              onClick={handleNavClick}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* ── Right ── */}
      <div className="nav-right">
        <a href="tel:+919999993069" className="btn-call">
          <PhoneCall size={16} style={{marginRight: 6}} /> <span>Call Now</span>
        </a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
