import { Wifi, Droplet, ShieldCheck, Utensils, BookOpen, Shirt, Bath, GraduationCap, Moon, ShoppingCart, Hospital, Clock, CigaretteOff, VolumeX, Users, Sparkles, ClipboardCheck, Phone, MessageCircle, MapPin, Home as HomeIcon, Bed } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import StatsBar        from '../components/StatsBar';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm     from '../components/ContactForm';

const HOSTEL_STATS = [
  { num: '50+',  label: 'Rooms Available'         },
  { num: '200+', label: 'Students Hosted'         },
  { num: '6+',   label: 'Years of Trust'          },
  { num: '100%', label: 'Safe and Secure'         },
];

const FACILITIES = [
  [<Wifi size={24} color='var(--text-muted)' />, 'High-Speed WiFi',    '24×7 internet connectivity for studies, assignments & streaming.'                  ],
  [<Droplet size={24} color='var(--text-muted)' />, 'RO Drinking Water',  'Clean, purified RO water available on every floor round the clock.'                ],
  [<ShieldCheck size={24} color='var(--text-muted)' />, '24×7 Security',     'CCTV cameras, main gate security & warden on campus at all times.'                 ],
  [<Utensils size={24} color='var(--text-muted)' />, 'Mess Facility',      'Vidya Mess is available for hostel students — healthy home-cooked food daily.'     ],
  [<BookOpen size={24} color='var(--text-muted)' />, 'Study Room',         'Dedicated quiet study room open till late night for exam preparation.'             ],
  [<Shirt size={24} color='var(--text-muted)' />, 'Laundry Area',       'Dedicated laundry area with washing points for all students.'                      ],
  [<Bath size={24} color='var(--text-muted)' />, 'Clean Washrooms',    'Regularly cleaned washrooms maintained to high hygiene standards.'                 ],
  [<GraduationCap size={24} color='var(--text-muted)' />, 'Near Colleges',      'Walking distance from colleges & universities — save time & commute costs.'        ],
  [<Moon size={24} color='var(--text-muted)' />, 'Hostel Timings',     'Gate closes at 10 PM. Warden available 24×7 for any emergency.'                   ],
];

const NEARBY = [
  [<GraduationCap size={24} color='var(--text-muted)' />, 'Colleges & University', 'Walking distance — 5 to 15 mins'            ],
  [<ShoppingCart size={24} color='var(--text-muted)' />, 'Market & Grocery Shops','2 mins walk'                                  ],
  [<Hospital size={24} color='var(--text-muted)' />, 'Hospital / Medical',    'Nearby — within 10 mins'                      ],
  [<Utensils size={24} color='var(--text-muted)' />, 'Vidya Mess',            'On premises — same campus'                    ],
  [<BookOpen size={24} color='var(--text-muted)' />, 'Vidya Library',         'Nearby — exclusive access for hostel students'],
];

const RULES = [
  [<Clock size={24} color='var(--text-muted)' />, 'Gate Timing: in by 10 PM',    'For safety of all students'                       ],
  [<CigaretteOff size={24} color='var(--text-muted)' />, 'No Smoking / Alcohol',         'Strictly prohibited on premises'                  ],
  [<VolumeX size={24} color='var(--text-muted)' />, 'Quiet Hours: 11 PM – 6 AM',   "Respect fellow students' sleep & study time"      ],
  [<Users size={24} color='var(--text-muted)' />, 'No Outsiders After 8 PM',      'Visitors allowed only in common areas'            ],
  [<Sparkles size={24} color='var(--text-muted)' />, 'Keep Rooms Clean',             'Weekly room inspection by warden'                 ],
  [<ClipboardCheck size={24} color='var(--text-muted)' />, 'ID Proof Required at Admission','Aadhaar + college ID card mandatory'             ],
];

const TESTIMONIALS = [
  { av: 'RK', text: '"Stayed here for 2 years during my B.Tech. The rooms are clean, WiFi is fast, and the mess food is just like home. Highly recommend!"', name: 'Rohit Kumar',  role: 'B.Tech Student, 2023 Passout'   },
  { av: 'AS', text: '"The study room is the best part — open till midnight. Also the security is very good, my parents feel completely safe."',              name: 'Aman Singh',   role: 'Engineering Student, 3rd Year'  },
  { av: 'PG', text: '"As a parent, I was worried about my son staying away. But Vidya Hostel gave me complete peace of mind — clean, safe, and disciplined."', name: 'Pramod Gupta', role: 'Parent of Hostel Student'        },
];

const DOCS = ['Aadhaar Card (student)', 'College ID / Admission letter', "Parent's ID proof", '2 passport size photos'];

const CONTACT_ITEMS = [
  [<Phone size={24} color='var(--text-muted)' />, '+91 99999 93069',                         'Mon–Sat, 9am–7pm'                   ],
  [<MessageCircle size={24} color='var(--text-muted)' />, 'WhatsApp: +91 99999 93069',               '24/7 Available'                     ],
  [<MapPin size={24} color='var(--text-muted)' />, '[Your hostel address], Ghaziabad, UP',    'Walk-in visits welcome — Mon to Sat'],
];

const CONTACT_FIELDS = [
  { name: 'name',    label: "Student's Name *",     type: 'text',    placeholder: 'Full name'                    },
  { name: 'mobile',  label: 'Mobile Number *',       type: 'tel',     placeholder: "Student or parent's number"  },
  { name: 'room',    label: 'Room Type Needed',      type: 'select',  options: ['Single Room','Double Room','Not decided yet'] },
  { name: 'college', label: 'College / Course',      type: 'text',    placeholder: 'e.g. AKTU, B.Tech CSE'       },
  { name: 'date',    label: 'Joining Date (approx.)',type: 'text',    placeholder: 'e.g. July 2025'              },
  { name: 'query',   label: 'Any Questions? (optional)', type: 'textarea', placeholder: 'Ask anything about the hostel...' },
];

const SINGLE_FEATURES = ['Furnished room (bed, table, chair, almirah)',
  'High-speed WiFi', 'RO drinking water', 'Attached / common washroom',
  'Laundry area access', 'Library Access'];
const DOUBLE_FEATURES = ['Furnished room (2 beds, 2 tables, almirah)',  'High-speed WiFi',
  'RO drinking water', 'Common washroom', 'Laundry area access', 'Library Access'];

export default function Hostel() {
  const scrollToRooms = () =>
    document.getElementById('hostel-rooms')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      <Helmet bodyAttributes={{ class: 'theme-hostel' }}>
        <title>Best Boys PG & Hostel near ABES College, Om Vihar | Vidya Hostel Ghaziabad</title>
        <meta name="description" content="Looking for a boys PG near ABES College, Om Vihar, or Crossings Republik? Vidya Hostel offers safe rooms with home-cooked food in Indirapuram & Kaushambi NCR." />
        <link rel="canonical" href="https://vidyagroups.com/hostel" />
        <meta property="og:title" content="Best Boys Hostel near ABES College | Vidya Hostel" />
        <meta property="og:description" content="Clean, safe boys PG near ABES College, Om Vihar & Crossings Republik with home-cooked food." />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "Vidya Boys Hostel",
            "description": "Safe boys PG near ABES College with food.",
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
                "name": "What are the hostel fees in Ghaziabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vidya Boys Hostel offers very affordable fees, which includes healthy home-style food and AC/Non-AC rooms."
                }
              },
              {
                "@type": "Question",
                "name": "Is this hostel near ABES College?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our hostel is at a walking distance from ABES College (Crossings Republik) and Om Vihar."
                }
              }
            ]
          }`}
        </script>
      </Helmet>
      {/* ── Hero ── */}
      <section className="modern-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}>
        <div className="modern-hero-bg" />
        <div className="modern-hero-content">
          <div className="hero-badge" style={{ marginBottom: 16 }}><HomeIcon size={16} /> Near College · Boys Only</div>
          
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4.5vw,3.2rem)', fontWeight: 900, color: 'white', lineHeight: 1.12, marginBottom: 12 }}>
            Your Home <em style={{ fontStyle: 'normal', color: 'var(--theme-accent)' }}>Away From Home</em>
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 28 }}>
            A safe, clean, and affordable hostel for boys, located right next to the college. Furnished single and double rooms with all essential amenities.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {['✓ WiFi Included','✓ RO Drinking Water','✓ 24×7 Security','✓ Mess Available'].map((b) => (
              <span key={b} className="solar-badge" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>{b}</span>
            ))}
          </div>
          <div className="hero-btns">
            <button className="btn-primary" onClick={scrollToRooms}>View Rooms & Pricing ↓</button>
            <a href="https://wa.me/919999993069?text=I%20want%20to%20enquire%20about%20Vidya%20Boys%20Hostel" className="btn-outline">
              <MessageCircle size={18} style={{marginRight: 6}} /> Book a Visit
            </a>
          </div>
        </div>
        
      </section>
      {/* ── Stats ── */}
      <StatsBar stats={HOSTEL_STATS} color="var(--hostel-color)" />

      {/* ── Room Types ── */}
      <section className="section" id="hostel-rooms">
        <div className="section-header">
          <span className="section-tag">Room Types &amp; Pricing</span>
          <h2>Choose Your Room</h2>
          <p>Both room types are fully furnished with all basic amenities.</p>
        </div>
        <div className="grid-2" style={{ maxWidth: 820 }}>
          {/* Single */}
          <div style={{ background: 'var(--white)', border: '2px solid var(--hostel-color)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <div style={{ background: 'var(--hostel-color)', padding: '20px 24px', color: 'white' }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}><Bed size={28} /></div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700 }}>Single Room</h3>
              <p style={{ fontSize: 13, opacity: .85, marginTop: 4 }}>Full privacy · 1 student</p>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 700, color: 'var(--hostel-color)' }}>₹8,499</span>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/month</span>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>* Mess included * Electricity Bill excluded</p>
              </div>
              <ul style={{ listStyle: 'none', marginBottom: 20 }}>
                {SINGLE_FEATURES.map((f) => (
                  <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '6px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: 8 }}>✅ {f}</li>
                ))}
              </ul>
              <a href="https://wa.me/919999993069?text=I%20want%20to%20enquire%20about%20Single%20Room%20in%20Vidya%20Hostel" style={{ display: 'block', background: 'var(--hostel-color)', color: 'white', textAlign: 'center', padding: 12, borderRadius: 40, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>
                Enquire for Single Room
              </a>
            </div>
          </div>

          {/* Double */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
            <div style={{ background: 'var(--hostel-bg)', padding: '20px 24px', color: 'var(--hostel-dark)' }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}><Bed size={28} /><Bed size={28} /></div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700 }}>Double Room</h3>
              <p style={{ fontSize: 13, opacity: .75, marginTop: 4 }}>Shared · 2 students · Budget-friendly</p>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ marginBottom: 20 }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 700, color: 'var(--hostel-color)' }}>₹7,999</span>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/month per person</span>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>* Mess included * Electricity Bill excluded</p>
              </div>
              <ul style={{ listStyle: 'none', marginBottom: 20 }}>
                {DOUBLE_FEATURES.map((f) => (
                  <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '6px 0', borderBottom: '1px solid var(--border)', display: 'flex', gap: 8 }}>✅ {f}</li>
                ))}
              </ul>
              <a href="https://wa.me/919999993069?text=I%20want%20to%20enquire%20about%20Double%20Room%20in%20Vidya%20Hostel" style={{ display: 'block', background: 'var(--hostel-bg)', color: 'var(--hostel-dark)', textAlign: 'center', padding: 12, borderRadius: 40, textDecoration: 'none', fontWeight: 600, fontSize: 14, border: '2px solid var(--hostel-color)' }}>
                Enquire for Double Room
              </a>
            </div>
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', marginTop: 20 }}>
          Security deposit required at admission. Fees may vary — contact us for current rates.
        </p>
      </section>

      {/* ── Facilities ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Facilities</span>
          <h2>Jo Bhi Chahiye</h2>
          <p>We have ensured students have everything they need to focus on their studies.</p>
        </div>
        <div className="services-grid">
          {FACILITIES.map(([icon, h, p]) => (
            <div key={h} className="service-card">
              <span className="service-icon">{icon}</span>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Location ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Location &amp; Nearby</span>
          <h2>Perfect Location pe</h2>
          <p>Ek student ko jo chahiye — sab kuch doorstep pe.</p>
        </div>
        <div className="grid-2" style={{ maxWidth: 860, alignItems: 'start' }}>

          {/* ── Map card ── */}
          <div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>

              {/* Google Maps iframe */}
              <div style={{ position: 'relative', width: '100%', height: 260 }}>
                <iframe
                  title="Vidya Boys Hostel Location"
                  src="https://maps.google.com/maps?q=28.6305498,77.4430479&z=18&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Branded pin overlay */}
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  background: 'var(--hostel-color)', color: 'white',
                  fontSize: 12, fontWeight: 600, padding: '5px 12px',
                  borderRadius: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                  display: 'flex', alignItems: 'center', gap: 6,
                  pointerEvents: 'none',
                }}>
                  <HomeIcon size={24} /> Vidya Boys Hostel
                </div>
              </div>

              {/* Address strip */}
              <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 10, borderTop: '1px solid var(--border)' }}>
                <span style={{ fontSize: 18, marginTop: 2 }}>📍</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-dark)' }}>Vidya Boys Hostel</p>
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                    [Your full address here], Ghaziabad, UP
                  </p>
                  <a
                    href="https://maps.app.goo.gl/o5keUKoczUnceEoG7"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 4,
                      marginTop: 8, fontSize: 12, fontWeight: 600,
                      color: 'var(--hostel-color)', textDecoration: 'none',
                    }}
                  >
                    Get Directions ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, color: 'var(--text-dark)', marginBottom: 16 }}>What is Nearby</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NEARBY.map(([icon, h, p]) => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>
                  <span style={{ fontSize: 20 }}>{icon}</span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-dark)' }}>{h}</p>
                    <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Rules ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Hostel Rules</span>
          <h2>Safe and Disciplined Environment</h2>
          <p>Simple rules that make the hostel safe and comfortable for everyone.</p>
        </div>
        <div className="grid-2" style={{ maxWidth: 800, gap: 14 }}>
          {RULES.map(([icon, h, p]) => (
            <div key={h} style={{ display: 'flex', gap: 12, padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', alignItems: 'flex-start' }}>
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
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Student Reviews</span>
          <h2>What Students Say</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Frequently Asked Questions</span>
          <h2>FAQs</h2>
        </div>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>What are the hostel fees in Ghaziabad?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Vidya Boys Hostel offers highly affordable fees, which includes daily 3-time healthy home-style food, WiFi, and room cleaning.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>Is this hostel near ABES College?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Yes, our hostel is at a walking distance from ABES College (Crossings Republik) and Om Vihar. Students yahan se easily auto/paidal aaja sakte hain.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>How is the mess food?</h3>
            <p style={{ color: 'var(--text-muted)' }}>100% Pure Veg home-style food. Daily fresh vegetables, roti, rice, and special items on weekends.</p>
          </div>
        </div>
      </section>

      {/* ── Admission Enquiry ── */}
      <section className="section section-alt" id="hostel-contact">
        <div className="section-header">
          <span className="section-tag">Admission Enquiry</span>
          <h2>Book Your Room Today</h2>
          <p>Limited rooms available. Provide your details and we will contact you within hours.</p>
        </div>
        <div className="contact-wrap">
          <div className="contact-info">
            <h3>Visit or Call</h3>
            <p>Come visit the hostel in person — we'd love to show you around. Or simply WhatsApp us and we'll answer all your questions.</p>
            {CONTACT_ITEMS.map(([icon, main, sub]) => (
              <div key={main} className="contact-item">
                <div className="contact-item-icon">{icon}</div>
                <div className="contact-item-text">{main}<span>{sub}</span></div>
              </div>
            ))}
            <div style={{ background: 'var(--hostel-bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '14px 16px', marginTop: 10 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--hostel-dark)' }}>📋 Documents Needed at Admission</p>
              <ul style={{ listStyle: 'none', marginTop: 8 }}>
                {DOCS.map((d) => <li key={d} style={{ fontSize: 12, color: 'var(--text-muted)', padding: '3px 0' }}>• {d}</li>)}
              </ul>
            </div>
          </div>
          <ContactForm
            fields={CONTACT_FIELDS}
            submitLabel="Send Admission Enquiry →"
            onSubmit={() => alert('Shukriya! Hum jald contact karenge. <HomeIcon size={24} />\nWhatsApp: +91 99999 93069')}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <h2>Limited Rooms — Book Before They Fill Up!</h2>
        <p style={{ color: 'var(--green-light)' }}>
          Rooms fill up quickly every admission season. WhatsApp us now.
        </p>
        <a href="https://wa.me/919999993069?text=I%20want%20to%20book%20a%20room%20at%20Vidya%20Boys%20Hostel" className="btn-primary">
          💬 Check Room Availability
        </a>
      </section>
    </div>
  );
}
