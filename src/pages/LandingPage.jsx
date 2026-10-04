import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, MessageCircle, CheckCircle, Star } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const DATA = {
  hostel: {
    theme: 'theme-hostel',
    img: "url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80')",
    badge: "Premium Boys PG & Hostel",
    getTitle: (loc) => `Best Boys Hostel near ${loc}`,
    desc: (loc) => `Looking for a safe, clean, and affordable boys hostel near ${loc}? Vidya Groups provides fully furnished single and double rooms with all essential amenities, ensuring a comfortable stay for students and professionals.`,
    features: ['High-Speed WiFi', 'RO Drinking Water', '24/7 Security Camera', 'In-house Mess'],
    schemaType: 'LodgingBusiness',
  },
  mess: {
    theme: 'theme-mess',
    img: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80')",
    badge: "100% Pure Vegetarian",
    getTitle: (loc) => `Top Tiffin & Mess Service in ${loc}`,
    desc: (loc) => `Get healthy, hygienic, and home-style cooked meals in ${loc}. We offer daily fresh sabzi, special weekend items, and affordable monthly tiffin packages for students and working professionals.`,
    features: ['100% Pure Veg', 'Daily Fresh Ingredients', 'Hygienic Kitchen', 'Dine-in & Tiffin Delivery'],
    schemaType: 'FoodEstablishment',
  },
  library: {
    theme: 'theme-library',
    img: "url('https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=80')",
    badge: "Peaceful Study Environment",
    getTitle: (loc) => `Best Study Library in ${loc}`,
    desc: (loc) => `Prepare for UPSC, SSC, or university exams with full focus. Our premium reading room in ${loc} offers pin-drop silence, high-speed WiFi, and 24x7 access.`,
    features: ['Pin-Drop Silence', 'Fully Air-Conditioned', 'High-Speed WiFi', '24x7 Access'],
    schemaType: 'Library',
  },
  solar: {
    theme: 'theme-solar',
    img: "url('/assets/solar-company-hero.jpg')",
    badge: "Expert Solar Installers",
    getTitle: (loc) => `Top Solar Panel Installation in ${loc}`,
    desc: (loc) => `Switch to green energy and make your electricity bill zero. Vidya Solar provides premium on-grid, off-grid, and hybrid solar installations in ${loc} with complete PM Surya Ghar subsidy assistance.`,
    features: ['PM Surya Ghar Subsidy', 'Net Metering Support', 'Top Tier Panels', '25-Year Warranty'],
    schemaType: 'HomeAndConstructionBusiness',
  }
};

export default function LandingPage({ service, location }) {
  const data = DATA[service];
  if (!data) return null;

  const title = data.getTitle(location);
  const desc = data.desc(location);
  
  return (
    <div>
      <Helmet bodyAttributes={{ class: data.theme }}>
        <title>{`${title} | Vidya Groups`}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`https://vidyagroups.com/\${service}-in-\${location.toLowerCase().replace(/\\s+/g, '-')}`} />
        
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "\${data.schemaType}",
            "name": "Vidya Groups - \${title}",
            "description": "\${desc}",
            "areaServed": "\${location}",
            "telephone": "+91-9999993069"
          }`}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="modern-hero" style={{ backgroundImage: data.img, minHeight: '65vh', paddingTop: '160px' }}>
        <div className="modern-hero-content glass-panel" style={{ maxWidth: 650 }}>
          <div className="hero-badge" style={{ marginBottom: 16 }}>{data.badge}</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4.5vw,3rem)', fontWeight: 900, color: 'white', lineHeight: 1.15, marginBottom: 16 }}>
            {title}
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 24 }}>
            {desc}
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Get Pricing Details ↓</a>
            <a href="https://wa.me/919999993069" className="btn-outline">
              <MessageCircle size={18} style={{marginRight: 6}} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Why Choose Vidya Groups?</span>
          <h2>Our Premium Features in {location}</h2>
        </div>
        <div className="grid-4" style={{ maxWidth: 1000, margin: '0 auto' }}>
          {data.features.map(f => (
            <div key={f} style={{ background: 'var(--white)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
              <CheckCircle size={32} color="var(--theme-main)" style={{ marginBottom: 12 }} />
              <h4 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-dark)' }}>{f}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form for the specific location */}
      <section className="section" id="contact">
        <div className="section-header">
          <span className="section-tag">Book Now</span>
          <h2>Contact Us in {location}</h2>
          <p>Leave your details below and our {location} team will call you back.</p>
        </div>
        <div style={{ maxWidth: 600, margin: '0 auto', background: 'var(--white)', padding: '32px', borderRadius: 'var(--radius)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}>
          <ContactForm 
            fields={[
              { name: 'name', label: 'Name *', type: 'text' },
              { name: 'mobile', label: 'Mobile Number *', type: 'tel' },
              { name: 'query', label: 'Your Requirement', type: 'textarea' }
            ]}
            submitLabel="Submit Request →"
            onSubmit={() => alert('Thank you! Our team will contact you shortly.')}
          />
        </div>
      </section>
    </div>
  );
}
