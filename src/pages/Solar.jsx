import { Sun, Zap, Banknote, Wrench, Home as HomeIcon, Factory, Hospital, Phone, MessageCircle, MapPin, Building2, BatteryCharging, FileText, GraduationCap, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SolarCalculator from '../components/SolarCalculator';
import ContactForm     from '../components/ContactForm';

const SOLAR_STATS = [
  { num: '200+', label: 'Installations'      },
  { num: '1MW+', label: 'Total Capacity'     },
  { num: '₹2Cr+',label: 'Customer Savings'  },
  { num: '6 Yr', label: 'Experience'         },
];

const SERVICES = [
  { icon: <HomeIcon size={48} color='var(--solar-color)' />, h: 'Residential Solar',       p: 'Rooftop solar for your home. 1kW to 10kW systems with PM Surya Ghar subsidy.'                 },
  { icon: <Building2 size={48} color='var(--solar-color)' />, h: 'Commercial Solar',         p: '10kW to 100kW systems for offices, factories & shops. Cut your electricity bill by up to 80%.'           },
  { icon: <Wrench size={36} color='var(--solar-color)' />, h: 'Annual Maintenance (AMC)', p: 'Complete care — cleaning, checkups & performance monitoring. Annual plans available.'          },
  { icon: <BatteryCharging size={36} color='var(--solar-color)' />, h: 'Battery Backup',           p: 'No more power cuts. 24/7 electricity with advanced Li-ion battery backup systems.'                     },
  { icon: <FileText size={36} color='var(--solar-color)' />, h: 'Subsidy Assistance',       p: 'From PM Surya Ghar Yojana application to receiving the funds — we handle it all.'             },
  { icon: <Zap size={36} color='var(--solar-color)' />, h: 'Net Metering',             p: 'Sell surplus electricity to the DISCOM and earn credits. We handle all registration.'                },
];

const PROCESS = [
  { n: '1', h: 'Free Consultation',    p: 'Contact us for a free site survey.'       },
  { n: '2', h: 'Custom Quotation',     p: 'Get the best-price plan within 24 hours.'               },
  { n: '3', h: 'Installation',         p: 'Professional execution completed in 2–3 days.'      },
  { n: '4', h: 'Enjoy Savings!',       p: 'Experience zero bills and lifetime savings.'                },
];

const PRODUCTS = [
  { icon: <Sun size={36} color='var(--solar-color)' />, h: 'Solar Panels',         p: 'Mono PERC & Bifacial. UTL Fujiyama, Loom Solar, Tata Solar.' },
  { icon: <Zap size={36} color='var(--solar-color)' />, h: 'Inverters',             p: 'On-grid, off-grid & hybrid. UTL Fujiyama, Loom Solar, Eastman.' },
  { icon: <BatteryCharging size={36} color='var(--solar-color)' />, h: 'Batteries',             p: 'Li-ion & Lead Acid. Sukam, UTL, Eastman.'},
  { icon: <Wrench size={36} color='var(--solar-color)' />, h: 'Mounting Structures',   p: 'GI & Aluminium. Wind & weather resistant.'             },
];

const PROJECTS = [
  { icon: <HomeIcon size={48} color='white' />, badge: 'Residential', h: '3kW Rooftop System',       loc: 'Indirapuram, Ghaziabad', kw: '3kW',  save: 'Saves ₹1,800/mo' },
  { icon: <Building2 size={48} color='white' />, badge: 'Commercial',  h: '15kW Commercial System',   loc: 'Kaushambi, Ghaziabad',   kw: '15kW', save: 'Saves ₹9,000/mo' },
  { icon: <GraduationCap size={48} color='white' />, badge: 'Institution', h: '10kW School System',       loc: 'Vasundhara, Ghaziabad',  kw: '10kW', save: 'Saves ₹6,500/mo' },
];

const CONTACT_ITEMS = [
  [<Phone size={24} color='var(--text-muted)' />, '+91 81784 53197',              'Mon–Sat, 9am–7pm'          ],
  [<MessageCircle size={24} color='var(--text-muted)' />, 'WhatsApp: +91 81784 53197',    '24/7 Available'            ],
  [<MapPin size={24} color='var(--text-muted)' />, 'Vidya Groups Office, Ghaziabad, UP', 'Walk-in Welcome'     ],
  [<Mail size={24} color='var(--text-muted)' />, 'vidyasolarservice@gmail.com',          'Reply within 24 Hours'      ],
];

const CONTACT_FIELDS = [
  { name: 'name',     label: 'Your Name *',           type: 'text',     placeholder: 'Full name'                 },
  { name: 'mobile',   label: 'Mobile Number *',        type: 'tel',      placeholder: '10-digit mobile number'   },
  { name: 'proptype', label: 'Property Type',          type: 'select',   options: ['Home (Residential)','Shop / Office','Factory / Warehouse','School / Institution'] },
  { name: 'bill',     label: 'Approx. Monthly Bill',   type: 'text',     placeholder: 'e.g. ₹2,000 per month'    },
  { name: 'query',    label: 'Any Questions? (optional)', type: 'textarea', placeholder: 'Write any specific questions...' },
];

export default function Solar() {
  const scrollToCalc = () =>
    document.getElementById('solar-calc')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      <Helmet bodyAttributes={{ class: 'theme-solar' }}>
        <title>Vidya Solar | Top Solar Rooftop Installation & Dealer in Ghaziabad NCR</title>
        <meta name="description" content="Expert solar panel installation in Ghaziabad. We handle Residential & Commercial solar rooftops, Net Metering, and PM Surya Ghar Subsidy Assistance." />
        <link rel="canonical" href="https://vidyagroups.com/solar" />
        <meta property="og:title" content="Vidya Solar | Top Solar Rooftop Installation in Ghaziabad" />
        <meta property="og:description" content="Expert solar panel installation in Ghaziabad. Residential, Commercial, Net Metering, and PM Surya Ghar Subsidy." />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "Vidya Solar",
            "description": "Expert solar panel installation in Ghaziabad. PM Surya Ghar Subsidy Assistance.",
            "telephone": "+918178453197",
            "areaServed": "Ghaziabad, NCR",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ghaziabad",
              "addressRegion": "UP",
              "addressCountry": "IN"
            }
          }`}
        </script>
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does it cost to install solar panels?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost depends on your requirement (2kW, 3kW, etc.). However, with PM Surya Ghar Yojana, you can get a subsidy of up to ₹78,000."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to get the PM Surya Ghar subsidy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "After installation, the subsidy is credited directly to your bank account in 1 to 3 months. Vidya Solar helps you completely with this."
                }
              },
              {
                "@type": "Question",
                "name": "Do you install outside Ghaziabad as well?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, besides Ghaziabad, we also provide installation in NCR areas like Noida, Greater Noida, Hapur, and Meerut."
                }
              }
            ]
          }`}
        </script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="modern-hero" style={{ backgroundImage: "url('/assets/solar-company-hero.jpg')" }}>
        <div className="modern-hero-content">
          <div className="hero-badge" style={{ marginBottom: 16 }}>
            <Sun size={16} /> Empowering Homes & Businesses
          </div>
          
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4.5vw,3.2rem)', fontWeight: 900, color: 'white', lineHeight: 1.12, marginBottom: 12 }}>
            Switch to <em style={{ fontStyle: 'normal', color: 'var(--theme-accent)' }}>Solar Energy</em>
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 28 }}>
            Premium On-Grid, Off-Grid, and Hybrid solar solutions in Ghaziabad. Maximize your savings with net metering and PM Surya Ghar subsidies.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {['✓ Govt Subsidy Support','✓ Professional Install','✓ Top Tier Panels','✓ ROI in 3 Years'].map((b) => (
              <span key={b} className="solar-badge" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>{b}</span>
            ))}
          </div>
          <div className="hero-btns">
            <button className="btn-primary" onClick={scrollToCalc}>Calculate Savings ↓</button>
            <a href="https://wa.me/918178453197?text=I%20want%20a%20free%20Solar%20quote" className="btn-outline">
              <MessageCircle size={18} style={{marginRight: 6}} /> Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2>Complete Solar Solutions</h2>
          <p>From seamless installation to lifetime maintenance — all under one roof.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div key={s.h} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Our Process</span>
          <h2>Going Solar is Easy</h2>
          <p>Your home becomes solar-powered in just 4 simple steps.</p>
        </div>
        <div className="process-steps">
          {PROCESS.map((s) => (
            <div key={s.n} className="process-step">
              <div className="step-num">{s.n}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="section section-alt" id="solar-calc">
        <div className="section-header">
          <span className="section-tag">Savings Calculator</span>
          <h2>How Much Will You Save?</h2>
          <p>Enter your monthly bill to view estimated solar savings.</p>
        </div>
        <SolarCalculator />
      </section>

      {/* ── Products ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Products We Trust</span>
          <h2>Top Brands, Premium Quality</h2>
        </div>
        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <div key={p.h} className="product-card">
              <span className="product-icon">{p.icon}</span>
              <h4>{p.h}</h4>
              <p>{p.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Recent Projects ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Our Work</span>
          <h2>Recent Installations</h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.h} className="project-card">
              <div className="project-img">
                {p.icon}
                <span className="project-badge">{p.badge}</span>
              </div>
              <div className="project-info">
                <h4>{p.h}</h4>
                <p>{p.loc}</p>
                <div className="project-meta">
                  <span>{p.kw}</span>
                  <span>{p.save}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Frequently Asked Questions</span>
          <h2>Solar FAQs</h2>
        </div>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>How much does it cost to install solar panels?</h3>
            <p style={{ color: 'var(--text-muted)' }}>The upfront solar cost depends on your requirements (2kW, 3kW, etc.). But under the PM Surya Ghar Yojana, you can get a direct subsidy of up to ₹78,000, which reduces the cost significantly.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>How long does it take to get the PM Surya Ghar subsidy?</h3>
            <p style={{ color: 'var(--text-muted)' }}>After installation and net metering, the subsidy amount is credited directly to your bank account within 1 to 3 months. Our team helps completely with the paperwork.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>Do you install outside Ghaziabad as well?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Yes! Besides Ghaziabad, we provide our services in Noida, Greater Noida, Hapur, Meerut, and the entire Delhi NCR region.</p>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section" id="solar-contact">
        <div className="section-header">
          <span className="section-tag">Free Consultation</span>
          <h2>Contact Us Today</h2>
          <p>Request a free site survey and quotation — no obligations.</p>
        </div>
        <div className="contact-wrap">
          <div className="contact-info">
            <h3>We Come To You</h3>
            <p>
              Provide your details — our expert will contact you within 24 hours
              and schedule a free site visit.
            </p>
            {CONTACT_ITEMS.map(([icon, main, sub]) => (
              <div key={main} className="contact-item">
                <div className="contact-item-icon">{icon}</div>
                <div className="contact-item-text">{main}<span>{sub}</span></div>
              </div>
            ))}
          </div>
          <ContactForm
            fields={CONTACT_FIELDS}
            submitLabel="Book Free Consultation →"
            onSubmit={() => alert('Thank you! Our team will contact you within 24 hours. \nWhatsApp: +91 81784 53197')}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <h2>PM Surya Ghar — Up to ₹78,000 Subsidy!</h2>
        <p style={{ color: 'var(--theme-light)' }}>
          Take advantage of this massive government scheme — apply now for a limited time.
        </p>
        <a
          href="https://wa.me/918178453197?text=I%20want%20to%20know%20about%20PM%20Surya%20Ghar%20subsidy"
          className="btn-primary"
        >
          <MessageCircle size={18} style={{marginRight: 6}} /> Ask About Subsidy
        </a>
      </section>
    </div>
  );
}
