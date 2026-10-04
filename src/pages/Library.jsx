import { VolumeX, Snowflake, Wifi, Lightbulb, Armchair, Lock, CupSoda, Camera, PersonStanding, GraduationCap, Landmark, Briefcase, Smartphone, Trash2, Clock, Phone, MessageCircle, MapPin, Mail, BookOpen, ClipboardList, Star, Shield, Sun, Moon } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import StatsBar        from '../components/StatsBar';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm     from '../components/ContactForm';

const LIB_STATS = [
  { num: '50+',  label: 'Seats Available'    },
  { num: '24×7', label: 'Open Always'        },
  { num: '6+',   label: 'Years Running'      },
  { num: '100%', label: 'Quiet Environment'  },
];

const FACILITIES = [
  [<VolumeX size={24} color='var(--text-muted)' />, 'Noise-Free Environment', 'Strict silence zone. Mobile phones on silent mode. A perfect quiet atmosphere for maximum focus.'],
  [<Snowflake size={24} color='var(--text-muted)' />, 'AC Study Hall',          'Fully air-conditioned hall to ensure comfort during both summer and winter seasons.'],
  [<Wifi size={24} color='var(--text-muted)' />, 'High-Speed WiFi',        'Fast internet access for online resources, e-books, and video lectures.'],
  [<Lightbulb size={24} color='var(--text-muted)' />, '24×7 Power Backup',      'Uninterrupted study sessions with our reliable 24x7 generator backup.'],
  [<Armchair size={24} color='var(--text-muted)' />, 'Dedicated Seat',         'Reserve a fixed seat with your membership. No need to search for a place daily.'],
  [<Lock size={24} color='var(--text-muted)' />, 'Locker Facility',        'Keep your books and personal belongings safe with our dedicated locker facility.'],
  [<CupSoda size={24} color='var(--text-muted)' />, 'RO Water & Tea',         'Clean drinking water always available, with optional tea/coffee facilities nearby.'],
  [<Camera size={24} color='var(--text-muted)' />, 'CCTV Security',          'The entire library is under 24/7 CCTV surveillance to ensure safety.'],
  [<PersonStanding size={24} color='var(--text-muted)' />, 'Clean Washrooms',        'Separate, well-maintained washrooms for men and women.'],
];

const WHO_STUDIES = [
  [<GraduationCap size={36} color='var(--library-color)' />, 'College Students',      'Ideal for daily studies, university exams, and graduation preparation.'],
  [<Landmark size={36} color='var(--library-color)' />, 'UPSC Aspirants',        'Perfect for long, uninterrupted study hours required for IAS and IPS preparation.'],
  [<BookOpen size={36} color='var(--library-color)' />, 'SSC / Banking',         'A focused environment for SSC CGL, IBPS, and SBI PO exams.'],
  [<Briefcase size={36} color='var(--library-color)' />, 'Working Professionals', 'Find peace away from home distractions to focus on important tasks.'],
];

const RULES = [
  [<VolumeX size={24} color='var(--text-muted)' />, 'Strict Silence Zone',       'Absolutely no talking or whispering inside the hall.'           ],
  [<Smartphone size={18} color='var(--text-muted)' />, 'Mobile Silent Mode',         'Phones must remain silent. Please take all calls outside.'    ],
  [<Armchair size={24} color='var(--text-muted)' />, 'Maintain Your Seat',    'Please respect assigned seating and do not occupy others\' seats.'       ],
  [<Trash2 size={18} color='var(--text-muted)' />, 'Keep it Clean',               'Eating and drinking are strictly prohibited inside the reading hall.'                    ],
  [<ClipboardList size={24} color='var(--text-muted)' />, 'ID Card Mandatory',            'Membership ID card must be presented upon every entry.'            ],
  [<Clock size={18} color='var(--text-muted)' />, '24×7 Access',                'Members can enter or leave at any hour using their ID.'        ],
];

const TESTIMONIALS = [
  { av: 'PK', text: '"Preparing for UPSC at home was impossible due to distractions. After joining Vidya Library, my daily study time increased from 4 to 10 hours. AC, silence, WiFi — everything is perfect."', name: 'Priya Kumari',  role: 'UPSC Aspirant, 2nd Attempt'    },
  { av: 'RV', text: '"Cleared SSC CGL and I am sure Vidya Library played a big role. Took a 6-month membership, came daily, and got the result. The staff is also very helpful."',                    name: 'Rahul Verma',   role: 'SSC CGL Selected, 2023'        },
  { av: 'AS', text: '"Could not study in the college hostel. After coming here, my attendance and grades improved. Took a monthly plan — totally worth the price."',                name: 'Ananya Singh',  role: 'B.Tech Student, 3rd Year'      },
];

const CONTACT_ITEMS = [
  [<Phone size={24} color='var(--text-muted)' />, '+91 99998 93075',                     'Available 24×7'                          ],
  [<MessageCircle size={24} color='var(--text-muted)' />, 'WhatsApp: +91 99998 93075',           'Fastest way to get membership'           ],
  [<MapPin size={24} color='var(--text-muted)' />, 'Behind Vidya Boys Hostel, Ghaziabad, UP', 'Near Vidya Groups campus'             ],
  [<Mail size={24} color='var(--text-muted)' />, 'vidyalibrary2026@gmail.com',          'Reply within 24 hours'      ],
];

const CONTACT_FIELDS = [
  { name: 'name',   label: 'Your Name *',          type: 'text',     placeholder: 'Enter full name'         },
  { name: 'mobile', label: 'Mobile Number *',         type: 'tel',      placeholder: '10-digit mobile number'   },
  { name: 'plan',   label: 'Select Plan',            type: 'select',   options: ['Monthly (1 Month)','3 Months — Most Popular','6 Months — Best Value','Just want to visit first'] },
  { name: 'study',  label: 'What do you study?',   type: 'select',   options: ['College Student (B.Tech / B.Sc / B.Com etc.)','UPSC Aspirant','SSC / Banking Exam','School Student','Working Professional','Other'] },
  { name: 'query',  label: 'Any Questions? (Optional)',  type: 'textarea', placeholder: 'Ask any question here...' },
];

export default function Library() {
  const scrollToPlans = () =>
    document.getElementById('library-plans')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      <Helmet bodyAttributes={{ class: 'theme-library' }}>
        <title>UPSC/SSC Study Library near ABES & Crossings Republik | Vidya Library</title>
        <meta name="description" content="Peaceful 24x7 study library near ABES College, Om Vihar and Crossings Republik. Best reading room for UPSC, SSC, and college students with free WiFi & AC." />
        <link rel="canonical" href="https://vidyagroups.com/library" />
        <meta property="og:title" content="Vidya Library | Peaceful Study Room in Ghaziabad" />
        <meta property="og:description" content="Peaceful 24x7 study library near ABES College, Om Vihar and Crossings Republik." />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Library",
            "name": "Vidya Library",
            "description": "Peaceful 24x7 study library near ABES College, Om Vihar and Crossings Republik.",
            "telephone": "+918178453197",
            "priceRange": "₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Om Vihar Colony, Near ABES College",
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
                "name": "What are the library timings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vidya Library is open 24x7. You can study in any shift, day or night."
                }
              },
              {
                "@type": "Question",
                "name": "Are AC and WiFi free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, fully air-conditioned rooms and high-speed fiber WiFi facility are free with membership."
                }
              },
              {
                "@type": "Question",
                "name": "Is locker facility available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, safe locker facility is available for regular members to keep their books (at an extra nominal charge)."
                }
              }
            ]
          }`}
        </script>
      </Helmet>
      
      {/* ── Hero ── */}
      <section className="modern-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}>
        <div className="modern-hero-content glass-panel" style={{ maxWidth: '650px' }}>
          <div className="hero-badge" style={{ marginBottom: 16 }}><BookOpen size={16} /> A Peaceful & Perfect Study Environment</div>
          
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4.5vw,3.2rem)', fontWeight: 900, color: 'white', lineHeight: 1.12, marginBottom: 12 }}>
            Focus on Your <em style={{ fontStyle: 'normal', color: 'var(--theme-accent)' }}>Success</em>
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 28 }}>
            Best reading room for UPSC, SSC, and college students. Fully air-conditioned, free WiFi, and open 24x7.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {['✓ Pin Drop Silence','✓ Comfortable Seating','✓ High-Speed WiFi','✓ 24x7 Access'].map((b) => (
              <span key={b} className="solar-badge" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>{b}</span>
            ))}
          </div>
          <div className="hero-btns">
            <button className="btn-primary" onClick={scrollToPlans}>View Memberships ↓</button>
            <a href="https://wa.me/919999993069?text=I%20want%20to%20join%20Vidya%20Library" className="btn-outline">
              <MessageCircle size={18} style={{marginRight: 6}} /> Join Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <StatsBar stats={LIB_STATS} color="var(--library-color)" />

      {/* ── Membership Plans ── */}
      <section className="section" id="library-plans">
        <div className="section-header">
          <span className="section-tag">Membership Plans</span>
          <h2>Choose Your Plan</h2>
          <p>Flexible options available — choose from 1, 3, or 6 months. Longer durations offer better savings.</p>
        </div>
        <div className="lib-plans-grid">

          {/* Monthly */}
          <div className="lib-plan-card">
            <div style={{ marginBottom: 12 }}><Clock size={36} color='var(--library-color)' /></div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 6 }}>Monthly</h3>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>1 Month · Flexible</p>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 700, color: 'var(--library-color)' }}>₹1,199</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/month</span>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 20 }}>
              {['24×7 access','Dedicated seat','WiFi included','Locker facility'].map((f) => (
                <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '5px 0', borderBottom: '1px solid var(--border)' }}>✅ {f}</li>
              ))}
            </ul>
            <a href="https://wa.me/919999893075?text=I%20want%20the%20Monthly%20library%20membership" className="lib-plan-btn lib-plan-btn--outline">
              Get Monthly Plan
            </a>
          </div>

          {/* 3 Months — popular */}
          <div className="lib-plan-card lib-plan-card--popular">
            <div className="lib-plan-badge">⭐ MOST POPULAR</div>
            <div style={{ marginBottom: 12, marginTop: 8 }}><Star size={36} color='var(--library-color)' /></div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 6 }}>3 Months</h3>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>Best Choice for Exams</p>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 700, color: 'var(--library-color)' }}>₹2,699</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/3 months</span>
              <div style={{ background: 'var(--green-pale)', borderRadius: 20, padding: '3px 10px', display: 'inline-block', marginTop: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--green-mid)' }}>Save ₹300 vs monthly</span>
              </div>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 20 }}>
              {['24×7 access','Dedicated seat','WiFi included','Locker facility','Better savings'].map((f) => (
                <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '5px 0', borderBottom: '1px solid var(--border)' }}>✅ {f}</li>
              ))}
            </ul>
            <a href="https://wa.me/919999893075?text=I%20want%20the%203%20month%20library%20membership" className="lib-plan-btn lib-plan-btn--solid">
              Get 3-Month Plan
            </a>
          </div>

          {/* 6 Months */}
          <div className="lib-plan-card">
            <div style={{ marginBottom: 12 }}><Shield size={36} color='var(--library-color)' /></div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 6 }}>6 Months</h3>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>Long-term · Maximum Savings</p>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 700, color: 'var(--library-color)' }}>₹4,999</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/6 months</span>
              <div style={{ background: 'var(--green-pale)', borderRadius: 20, padding: '3px 10px', display: 'inline-block', marginTop: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--green-mid)' }}>Best deal — save maximum</span>
              </div>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 20 }}>
              {['24×7 access','Dedicated seat','WiFi included','Locker facility','Maximum savings'].map((f) => (
                <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '5px 0', borderBottom: '1px solid var(--border)' }}>✅ {f}</li>
              ))}
            </ul>
            <a href="https://wa.me/919999893075?text=I%20want%20the%206%20month%20library%20membership" className="lib-plan-btn lib-plan-btn--outline">
              Get 6-Month Plan
            </a>
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', marginTop: 20 }}>
          *Please WhatsApp or visit us directly for exact fees. Prices are subject to change.
        </p>
      </section>

      {/* ── Facilities ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Facilities</span>
          <h2>Everything You Need to Study</h2>
          <p>We maintain the perfect environment so you can focus entirely on your studies.</p>
        </div>
        <div className="services-grid">
          {FACILITIES.map(([icon, h, p]) => (
            <div key={h} className="service-card"><span className="service-icon">{icon}</span><h3>{h}</h3><p>{p}</p></div>
          ))}
        </div>
      </section>

      {/* ── Timings — 24×7 ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Library Timings</span>
          <h2>We are Open 24×7</h2>
          <p>Visit anytime — morning, afternoon, night, or midnight. The library is always open.</p>
        </div>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div className="lib-timing-card">
            <div style={{ marginBottom: 12 }}><Sun size={44} color='var(--library-color)' style={{marginRight: 8}}/><Moon size={44} color='var(--library-dark)' /></div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: 'var(--library-dark)', marginBottom: 10 }}>
              Open All Days · All Hours
            </h3>
            <p style={{ fontSize: 30, fontWeight: 700, color: 'var(--library-color)', marginBottom: 8 }}>
              24 Hours × 7 Days
            </p>
            <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
              Monday to Sunday — arrive and leave at your convenience. Entry via membership ID with no fixed timings.
            </p>
          </div>
        </div>
        <div className="lib-tip-banner">
          <Lightbulb size={24} color='var(--library-dark)' style={{ flexShrink: 0 }} />
          <p style={{ fontSize: 13, color: 'var(--library-dark)' }}>
            Do you prefer studying at night or starting early in the morning? Vidya Library is open 24x7 — design a schedule that works best for you!
          </p>
        </div>
      </section>

      {/* ── Who Studies Here ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Who Studies Here</span>
          <h2>Suitable for Everyone</h2>
          <p>Everyone is welcome at Vidya Library, regardless of their goals.</p>
        </div>
        <div className="lib-who-grid">
          {WHO_STUDIES.map(([icon, h, p]) => (
            <div key={h} className="lib-who-card">
              <div style={{ fontSize: 36, marginBottom: 10 }}>{icon}</div>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-dark)', marginBottom: 6 }}>{h}</h4>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Rules ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Library Rules</span>
          <h2>Discipline is the Key to Success</h2>
          <p>Simple rules to keep the library environment pleasant for everyone.</p>
        </div>
        <div className="lib-rules-grid">
          {RULES.map(([icon, h, p]) => (
            <div key={h} className="lib-rule-card">
              <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-dark)' }}>{h}</p>
                <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Member Stories</span>
          <h2>What They Say</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">FAQs</span>
          <h2>Frequently Asked Questions (FAQs)</h2>
        </div>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>What are the library timings?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Vidya Library is open 24x7. You can study in any shift, day or night, without any disturbance.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>Are AC and WiFi free?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Yes, our reading room is fully air-conditioned and high-speed fiber internet WiFi is free for all members.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>Is locker facility available?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Yes, safe locker facility is available for regular members to keep their books safely.</p>
          </div>
        </div>
      </section>

      {/* ── Membership Form ── */}
      <section className="section" id="library-contact">
        <div className="section-header">
          <span className="section-tag">Get Membership</span>
          <h2>Join Us Today</h2>
          <p>Fill out the form or WhatsApp us — start your membership today.</p>
        </div>
        <div className="contact-wrap">
          <div className="contact-info">
            <h3>Visit Us or Call</h3>
            <p>
              Visit the library once for a free tour. Experience the environment and decide for yourself.
              We are confident you will get a membership after your first visit!
            </p>
            {CONTACT_ITEMS.map(([icon, main, sub]) => (
              <div key={main} className="contact-item">
                <div className="contact-item-icon">{icon}</div>
                <div className="contact-item-text">{main}<span>{sub}</span></div>
              </div>
            ))}
            <div style={{ background: 'var(--library-bg)', border: '1px solid #c4b5fd', borderRadius: 'var(--radius-sm)', padding: '14px 16px', marginTop: 10 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--library-dark)' }}><ClipboardList size={16} style={{marginRight:4}} /> Documents Required for Admission</p>
              <ul style={{ listStyle: 'none', marginTop: 8 }}>
                {['Aadhaar Card copy','1 passport size photo','Membership fees (cash/UPI)'].map((d) => (
                  <li key={d} style={{ fontSize: 12, color: 'var(--text-muted)', padding: '3px 0' }}>• {d}</li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm
            fields={CONTACT_FIELDS}
            submitLabel="Send Membership Enquiry →"
            submitStyle={{ background: 'var(--library-color)' }}
            onSubmit={() => alert('Thank you! We will contact you shortly. \\nOr WhatsApp us directly: +91 99998 93075')}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <h2>24×7 Open — Come Anytime!</h2>
        <p style={{ color: 'var(--theme-light)' }}>
          Take a free tour, experience the library, and decide. No pressure!
        </p>
        <a
          href="https://wa.me/919999893075?text=I%20want%20to%20visit%20Vidya%20Library"
          className="btn-primary"
        >
          <MessageCircle size={18} style={{marginRight: 6}} /> Book a Free Visit
        </a>
      </section>
    </div>
  );
}
