import { Sun, Home as HomeIcon, Utensils, BookOpen, Handshake, Banknote, PhoneCall, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero            from '../components/Hero';
import StatsBar        from '../components/StatsBar';
import BusinessCard    from '../components/BusinessCard';
import TestimonialCard from '../components/TestimonialCard';

const HOME_STATS = [
  { num: '500+', label: 'Happy Students'        },
  { num: '200+', label: 'Solar Installations'   },
  { num: '6+',   label: 'Years of Trust'        },
  { num: '4',    label: 'Services, One Brand'   },
];

const BIZ_CARDS = [
  {
    id: '/solar', icon: <Sun size={24} />, logoClass: 'logo-solar',
    name: 'Vidya Solar', sub: 'Services',
    accent: 'var(--solar-color)', linkColor: 'var(--solar-dark)',
    desc:  'Zero your electricity bill. Rooftop solar installation, AMC & PM Surya Ghar subsidy assistance across Ghaziabad.',
    linkLabel: 'Learn More',
  },
  {
    id: '/hostel', icon: <HomeIcon size={24} />, logoClass: 'logo-hostel',
    name: 'Vidya Hostel', sub: 'Boys and Girls',
    accent: 'var(--hostel-color)', linkColor: 'var(--hostel-color)',
    desc:  'Clean, safe & affordable hostel for students near colleges in Ghaziabad. Single & double rooms available.',
    linkLabel: 'View Hostel',
  },
  {
    id: '/mess', icon: <Utensils size={24} />, logoClass: 'logo-mess',
    name: 'Vidya Mess', sub: 'Homely Food',
    accent: 'var(--mess-color)', linkColor: 'var(--mess-color)',
    desc:  'Home-cooked meals at honest prices. Breakfast, Lunch & Dinner — open to all. Hostel students get it included in their fees.',
    linkLabel: 'View Menu',
  },
  {
    id: '/library', icon: <BookOpen size={24} />, logoClass: 'logo-library',
    name: 'Vidya Library', sub: 'Study Room',
    accent: 'var(--library-color)', linkColor: 'var(--library-color)',
    desc:  'Perfect study environment for everyone — students, UPSC/SSC aspirants, and professionals. Bring your books, we provide the atmosphere.',
    linkLabel: 'View Memberships',
  },
];

const WHY_ITEMS = [
  { icon: <Handshake size={32} />, title: 'Trusted by 500+ Families',     text: 'Students and families across Ghaziabad trust us, and we take that responsibility seriously.' },
  { icon: <Banknote size={32} />, title: 'Best Value, Zero Hidden Fees', text: 'What we quote is what you pay. Absolutely no hidden charges—ever.' },
  { icon: <PhoneCall size={32} />, title: '24×7 Support',                 text: 'Call or WhatsApp us anytime. Our team is always available to help you.' },
];

const TESTIMONIALS = [
  { av: 'RS', text: '"My electricity bill dropped from ₹2,200 to just ₹350 after Vidya Solar installed our system. Excellent work!"', name: 'Ramesh Sharma', role: 'Solar Customer, Indirapuram'   },
  { av: 'AK', text: '"Stayed at the hostel for 2 years. Clean rooms, great mess food, and the library made exam prep easy."',          name: 'Arjun Kumar',   role: 'Student, B.Tech 3rd Year'     },
  { av: 'MG', text: '"15kW system at my factory — they handled everything including subsidy paperwork. Very professional."',           name: 'Manoj Gupta',  role: 'Business Owner, Kaushambi'   },
];

export default function Home() {
  const navigate = useNavigate();
  const go = (page) => {
    navigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToServices = () =>
    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      <Helmet bodyAttributes={{ class: 'theme-home' }}>
        <title>Vidya Groups | Hostel, Mess, Library & Solar in Ghaziabad</title>
        <meta name="description" content="Vidya Groups offers top-rated boys PGs near colleges, homely tiffin services, peaceful study libraries, and expert solar panel installation in Ghaziabad/NCR." />
        <link rel="canonical" href="https://vidyagroups.com/" />
        <meta property="og:title" content="Vidya Groups | Hostel, Mess, Library & Solar in Ghaziabad" />
        <meta property="og:description" content="Top-rated boys PGs, homely tiffin services, peaceful libraries, and expert solar panel installation in Ghaziabad." />
      </Helmet>
      {/* ── Hero ── */}
      <section className="modern-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')" }}>
        <div className="modern-hero-content glass-panel" style={{ maxWidth: '600px' }}>
          <div className="hero-badge" style={{ marginBottom: 16 }}>Welcome to Vidya Groups</div>
          
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2.2rem,5vw,3.6rem)', fontWeight: 900, color: 'white', lineHeight: 1.12, marginBottom: 12 }}>
            Growth, Service <em style={{ fontStyle: 'normal', color: 'var(--theme-accent)' }}>& Light</em>
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 28 }}>
            A trusted name for students, professionals, and homeowners in Ghaziabad. We provide premium lodging, dining, education spaces, and renewable energy solutions.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={scrollToServices}>Explore Our Businesses ↓</button>
            <a href="tel:+919999993069" className="btn-outline">
              <PhoneCall size={18} style={{marginRight: 6}} /> Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <StatsBar stats={HOME_STATS} />

      {/* ── Business Cards ── */}
      <section className="section" id="services-section">
        <div className="section-header">
          <span className="section-tag">Our Businesses</span>
          <h2>Your Needs, Our Responsibility</h2>
          <p>From students to families — Vidya Groups supports you at every step.</p>
        </div>
        <div className="biz-grid">
          {BIZ_CARDS.map((card) => (
            <BusinessCard key={card.id} {...card} onClick={() => go(card.id)} />
          ))}
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Why Vidya Groups?</span>
          <h2>Trust, Quality, and Care</h2>
        </div>
        <div className="why-grid">
          {WHY_ITEMS.map((w) => (
            <div key={w.title} className="why-item">
              <span className="why-icon">{w.icon}</span>
              <h4>{w.title}</h4>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2>What People Say</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <h2>Free Consultation — Zero Obligations</h2>
        <p>Whether it's Solar or Student Services — Call or WhatsApp us today, absolutely free.</p>
        <a href="https://wa.me/919999993069" className="btn-primary">
          <MessageCircle size={18} style={{marginRight: 6}} /> Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}
