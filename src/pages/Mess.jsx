import { Sunrise, Sun, Moon, CheckCircle, Phone, MessageCircle, MapPin, Utensils, ChefHat, Sparkles, Salad, Wallet, CalendarDays, Home, GraduationCap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import StatsBar        from '../components/StatsBar';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm     from '../components/ContactForm';

const MESS_STATS = [
  { num: '3',    label: 'Meals per Day'                  },
  { num: '100+', label: 'Daily Students'    },
  { num: '6+',   label: 'Years in Service'      },
  { num: '100%', label: 'Fresh & Hygienic'           },
];

const MENU = [
  { day: 'Monday',      bf: 'Poha + Tea',                  lunch: 'Dal + Rice + Roti + Sabzi',        dinner: 'Sabzi + Roti + Dal + Rice',    alt: false },
  { day: 'Tuesday',     bf: 'Paratha + Curd + Tea',         lunch: 'Rajma + Rice + Roti + Salad',      dinner: 'Paneer Sabzi + Roti + Dal',    alt: true  },
  { day: 'Wednesday',   bf: 'Idli / Upma + Tea',            lunch: 'Chhole + Rice + Roti + Raita',     dinner: 'Mix Veg + Roti + Dal + Rice',  alt: false },
  { day: 'Thursday',    bf: 'Puri + Sabzi + Tea',           lunch: 'Dal Makhani + Rice + Roti',        dinner: 'Aloo Sabzi + Roti + Dal',      alt: true  },
  { day: 'Friday',      bf: 'Bread + Butter + Tea',         lunch: 'Kadhi + Rice + Roti + Sabzi',      dinner: 'Sabzi + Roti + Dal + Kheer',   alt: false },
  { day: 'Saturday',    bf: 'Aloo Paratha + Curd + Tea',    lunch: 'Biryani / Pulao + Raita',          dinner: 'Paneer + Roti + Dal + Rice',   alt: true  },
  { day: 'Sunday Special',   bf: 'Chole Bhature + Tea',          lunch: 'Special Thali + Sweet',            dinner: 'Pav Bhaji / Pasta + Roti',     special: true },
];

const WHY_MESS = [
  [<ChefHat size={36} color='var(--mess-color)' />, 'Fresh Daily Cooking',   'Every meal cooked fresh that day — no leftover food, ever. Quality you can taste.'                    ],
  [<Sparkles size={36} color='var(--mess-color)' />, 'Hygienic Kitchen',      'Our kitchen follows strict hygiene standards — cleaned daily, proper food storage & handling.'         ],
  [<Salad size={36} color='var(--mess-color)' />, 'Balanced & Nutritious', 'Dal, sabzi, roti, rice — a complete balanced meal every time. Students stay healthy & energetic.'     ],
  [<Wallet size={36} color='var(--mess-color)' />, 'Affordable Rates',      'Prices designed for students — best quality at the most reasonable rates in Ghaziabad.'               ],
  [<CalendarDays size={36} color='var(--mess-color)' />, 'Flexible Plans',        'Monthly subscription or daily pass — eat on your schedule, not ours.'                                 ],
  [<Home size={36} color='var(--mess-color)' />, 'Connected to Hostel',   'Right next to Vidya Hostel — no travel needed. Hostel students get it included in fees.'             ],
];

const MEAL_TIMES = [
  { icon: <Sunrise size={24} color='var(--mess-color)' />, label: 'Breakfast', time: '8:00 – 9:30 AM',   sub: 'Start your day right',          highlight: false },
  { icon: <Sun size={24} color='var(--mess-color)' />, label: 'Lunch',     time: '12:00 – 2:00 PM', sub: 'Full thali — most popular time', highlight: true  },
  { icon: <Moon size={24} color='var(--mess-color)' />, label: 'Dinner',    time: '7:30 – 9:30 PM',   sub: 'Wind down with a warm meal',    highlight: false },
];

const TESTIMONIALS = [
  { av: 'NK', text: '"Sunday special thali is the highlight of my week! The paneer & kheer are absolutely homely."',                                         name: 'Nikhil Kar',    role: 'B.Sc Student, 2nd Year'     },
  { av: 'VS', text: '"I take monthly subscription even though I am not a hostel student. Better and cheaper than any tiffin nearby."',                        name: 'Vikram Sharma', role: 'Day Scholar, Nearby College' },
  { av: 'SG', text: '"My son has been eating here for 3 years — stays healthy, never falls sick. Fresh and clean always."',                                    name: 'Sunita Gupta',  role: 'Parent of Student'           },
];

const CONTACT_ITEMS = [
  [<Phone size={24} color='var(--text-muted)' />, '+91 99999 93069',                    'Call to enquire any time'        ],
  [<MessageCircle size={24} color='var(--text-muted)' />, 'WhatsApp: +91 99999 93069',          'Fastest way to subscribe'        ],
  [<MapPin size={24} color='var(--text-muted)' />, '[Your mess address], Ghaziabad, UP', 'Same campus as Vidya Hostel'    ],
];

const CONTACT_FIELDS = [
  { name: 'name',   label: 'Your Name *',         type: 'text',    placeholder: 'Full name'              },
  { name: 'mobile', label: 'Mobile Number *',      type: 'tel',     placeholder: '10-digit mobile number' },
  { name: 'plan',   label: 'Plan Interested In',   type: 'select',  options: ['Monthly Subscription','Daily / Per Meal','I am a Hostel Student','Not sure yet'] },
  { name: 'meals',  label: 'Which Meals?',          type: 'select',  options: ['All 3 — Breakfast + Lunch + Dinner','Lunch + Dinner only','Lunch only','Dinner only'] },
  { name: 'query',  label: 'Any Questions? (optional)', type: 'textarea', placeholder: 'Ask anything about the mess...' },
];

export default function Mess() {
  const scrollToPlans = () =>
    document.getElementById('mess-plans')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div>
      <Helmet bodyAttributes={{ class: 'theme-mess' }}>
        <title>Homely Food Tiffin & Mess Service near ABES, Crossings Republik</title>
        <meta name="description" content="Missing home food? Vidya Mess offers pure veg, hygienic tiffin and mess service near ABES College, Om Vihar and Crossings Republik, Ghaziabad." />
        <link rel="canonical" href="https://vidyagroups.com/mess" />
        <meta property="og:title" content="Homely Food Tiffin Service | Vidya Mess Ghaziabad" />
        <meta property="og:description" content="Pure veg, hygienic tiffin and mess service near ABES College, Om Vihar and Crossings Republik, Ghaziabad." />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FoodEstablishment",
            "name": "Vidya Mess",
            "description": "Pure veg tiffin & mess service near ABES College, Ghaziabad.",
            "servesCuisine": "Indian",
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
                "name": "What are the monthly mess charges?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Monthly charges are very student-friendly. We provide meal plans including breakfast, lunch, and dinner. Contact us for current pricing."
                }
              },
              {
                "@type": "Question",
                "name": "Is tiffin service available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide room delivery for tiffins (in Crossings Republik and ABES area)."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide pure veg food?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Vidya Mess is 100% pure veg and food is prepared in a hygienic environment."
                }
              }
            ]
          }`}
        </script>
      </Helmet>
      {/* ── Hero ── */}
      <section className="modern-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80')" }}>
        <div className="modern-hero-bg" />
        <div className="modern-hero-content">
          <div className="hero-badge" style={{ marginBottom: 16 }}><Utensils size={16} /> 100% Pure Vegetarian</div>
          
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4.5vw,3.2rem)', fontWeight: 900, color: 'white', lineHeight: 1.12, marginBottom: 12 }}>
            Delicious & <em style={{ fontStyle: 'normal', color: 'var(--theme-main)' }}>Healthy Meals</em>
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 28 }}>
            Home-style taste away from home. Healthy, hygienic, and hot meals for students and working professionals.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {['✓ Daily Fresh Sabzi','✓ Special Weekend Items','✓ Clean Environment','✓ Dine-in & Tiffin'].map((b) => (
              <span key={b} className="solar-badge" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}>{b}</span>
            ))}
          </div>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => window.scrollTo({top: 800, behavior: 'smooth'})}>See Menu & Pricing ↓</button>
            <a href="https://wa.me/919999993069?text=I%20want%20to%20know%20about%20Vidya%20Mess" className="btn-outline">
              <MessageCircle size={18} style={{marginRight: 6}} /> Contact Us
            </a>
          </div>
        </div>
        
      </section>
      {/* ── Stats ── */}
      <StatsBar stats={MESS_STATS} color="var(--green-main)" />

      {/* ── Weekly Menu ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Weekly Menu</span>
          <h2>What's on the Menu?</h2>
          <p>A wholesome rotating menu so students get daily variety.</p>
        </div>
        <div style={{ maxWidth: 900, margin: '0 auto', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--white)', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <thead>
              <tr style={{ background: 'var(--mess-color)', color: 'white' }}>
                {['Day',' Breakfast',' Lunch',' Dinner'].map((h) => (
                  <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontSize: 13, fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MENU.map((row) => (
                <tr key={row.day} style={{ borderBottom: '1px solid var(--border)', background: row.special ? '#fff8f4' : row.alt ? 'var(--off-white)' : 'white' }}>
                  <td style={{ padding: '12px 16px', fontSize: 13, fontWeight: 600, color: 'var(--mess-dark)' }}>{row.day}</td>
                  <td style={{ padding: '12px 16px', fontSize: 13, color: 'var(--text-mid)' }}>{row.bf}</td>
                  <td style={{ padding: '12px 16px', fontSize: 13, color: 'var(--text-mid)' }}>{row.lunch}</td>
                  <td style={{ padding: '12px 16px', fontSize: 13, color: 'var(--text-mid)' }}>{row.dinner}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', marginTop: 12 }}>
            * Menu may vary slightly based on seasonal availability. Sunday special is always a treat!
          </p>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="section" id="mess-plans">
        <div className="section-header">
          <span className="section-tag">Subscription Plans</span>
          <h2>Simple, Honest Pricing</h2>
          <p>Koi hidden charges nahi. Jo khao uska pay karo.</p>
        </div>
        <div className="grid-3" style={{ maxWidth: 900 }}>

          {/* Hostel included */}
          <div style={{ background: 'var(--hostel-bg)', border: '2px solid var(--hostel-color)', borderRadius: 'var(--radius)', padding: 28, position: 'relative', textAlign: 'center' }}>
            <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--hostel-color)', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, whiteSpace: 'nowrap' }}>🏠 HOSTEL STUDENTS</div>
            <div style={{ marginBottom: 12, marginTop: 8 }}><GraduationCap size={36} color='var(--hostel-dark)' /></div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: 'var(--hostel-dark)', marginBottom: 8 }}>Hostel Included</h3>
            <div style={{ margin: '16px 0' }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: 'var(--hostel-color)' }}>Free</span>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Included in hostel fees</p>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 20 }}>
              {['Breakfast + Lunch + Dinner','All 7 days','Sunday special included','Priority seating'].map((f) => (
                <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '5px 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>✅ {f}</li>
              ))}
            </ul>
            <a href="https://wa.me/919999993069" style={{ display: 'block', background: 'var(--hostel-color)', color: 'white', textAlign: 'center', padding: 11, borderRadius: 40, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Already Included ✓</a>
          </div>

          {/* Monthly — popular */}
          <div style={{ background: 'var(--white)', border: '2px solid var(--mess-color)', borderRadius: 'var(--radius)', padding: 28, position: 'relative', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--mess-color)', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, whiteSpace: 'nowrap' }}>⭐ MOST POPULAR</div>
            <div style={{ marginBottom: 12, marginTop: 8 }}><CalendarDays size={36} color='var(--mess-dark)' /></div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: 'var(--mess-dark)', marginBottom: 8 }}>Monthly Plan</h3>
            <div style={{ margin: '16px 0' }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: 'var(--mess-color)' }}>₹3,999</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/month</span>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 20 }}>
              {['Breakfast + Lunch + Dinner','All 7 days of the week','Sunday special meal','Best value for regulars'].map((f) => (
                <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '5px 0', borderBottom: '1px solid var(--border)' }}>✅ {f}</li>
              ))}
            </ul>
            <a href="https://wa.me/919999993069?text=I%20want%20to%20subscribe%20to%20monthly%20mess%20plan" style={{ display: 'block', background: 'var(--mess-color)', color: 'white', textAlign: 'center', padding: 11, borderRadius: 40, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Subscribe Monthly</a>
          </div>

          {/* Daily */}
          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 28, textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}><Utensils size={16} style={{marginRight:4}} /></div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: 'var(--mess-dark)', marginBottom: 8 }}>Daily / Per Meal</h3>
            <div style={{ margin: '16px 0' }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 700, color: 'var(--mess-color)' }}>₹79</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>/meal</span>
            </div>
            <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: 20 }}>
              {['Pay per meal — no commitment','Choose any meal of the day','Walk-in welcome','Great for occasional visitors'].map((f) => (
                <li key={f} style={{ fontSize: 13, color: 'var(--text-mid)', padding: '5px 0', borderBottom: '1px solid var(--border)' }}>✅ {f}</li>
              ))}
            </ul>
            <a href="https://wa.me/919999993069?text=I%20want%20to%20know%20daily%20meal%20rates%20at%20Vidya%20Mess" style={{ display: 'block', background: 'var(--mess-bg)', color: 'var(--mess-dark)', textAlign: 'center', padding: 11, borderRadius: 40, textDecoration: 'none', fontWeight: 600, fontSize: 13, border: '2px solid var(--mess-color)' }}>Ask Daily Rates</a>
          </div>
        </div>
      </section>

      {/* ── Why Mess ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Why Vidya Mess?</span>
          <h2>Food That Feels Like Home</h2>
        </div>
        <div className="services-grid">
          {WHY_MESS.map(([icon, h, p]) => (
            <div key={h} className="service-card"><span className="service-icon">{icon}</span><h3>{h}</h3><p>{p}</p></div>
          ))}
        </div>
      </section>

      {/* ── Meal Timings ── */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">Meal Timings</span>
          <h2>When Do We Serve?</h2>
        </div>
        <div className="grid-3" style={{ maxWidth: 800 }}>
          {MEAL_TIMES.map((m) => (
            <div key={m.label} style={{ background: 'var(--white)', border: m.highlight ? '2px solid var(--mess-color)' : '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 28, textAlign: 'center' }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{m.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: 'var(--mess-dark)', marginBottom: 8 }}>{m.label}</h3>
              <p style={{ fontSize: 22, fontWeight: 700, color: 'var(--mess-color)', marginBottom: 6 }}>{m.time}</p>
              <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>{m.sub}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)', marginTop: 20 }}>
          Open all 7 days including Sundays &amp; holidays. Timings may vary slightly on special days.
        </p>
      </section>

      {/* ── Testimonials ── */}
      <section className="section section-alt">
        <div className="section-header">
          <span className="section-tag">Student Reviews</span>
          <h2>What Students Say About the Food</h2>
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
            <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>What are the monthly mess charges?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Vidya Mess charges are highly affordable and student-friendly, which includes Breakfast, Lunch, and Dinner. Please visit or WhatsApp for exact pricing.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>Is tiffin service/home delivery available?</h3>
            <p style={{ color: 'var(--text-muted)' }}>Yes, we provide tiffin delivery around Crossings Republik and Om Vihar.</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>Can only hostel students eat here?</h3>
            <p style={{ color: 'var(--text-muted)' }}>No, our mess is open to everyone! Students living outside ABES, in PGs, and working professionals can also eat here.</p>
          </div>
        </div>
      </section>

      {/* ── Subscribe Form ── */}
      <section className="section" id="mess-contact">
        <div className="section-header">
          <span className="section-tag">Contact Us</span>
          <h2>Start Your Subscription Today</h2>
          <p>Provide your details and we will get back to you with the latest rates and availability.</p>
        </div>
        <div className="contact-wrap">
          <div className="contact-info">
            <h3>Visit or Call Us</h3>
            <p>Visit during meal times and taste the food first — humein yakeen hai aapko pasand aayega!</p>
            {CONTACT_ITEMS.map(([icon, main, sub]) => (
              <div key={main} className="contact-item">
                <div className="contact-item-icon">{icon}</div>
                <div className="contact-item-text">{main}<span>{sub}</span></div>
              </div>
            ))}
            <div style={{ background: 'var(--mess-bg)', border: '1px solid #f0c09a', borderRadius: 'var(--radius-sm)', padding: '14px 16px', marginTop: 10 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--mess-dark)' }}><Utensils size={16} style={{marginRight:4}} /> Meal Timings (Quick Ref)</p>
              <ul style={{ listStyle: 'none', marginTop: 8 }}>
                {[[<Sunrise size={24} color='var(--mess-color)' />,'Breakfast: 8:00 – 9:30 AM'],[<Sun size={24} color='var(--mess-color)' />,'Lunch: 12:00 – 2:00 PM'],[<Moon size={24} color='var(--mess-color)' />,'Dinner: 7:30 – 9:30 PM']].map(([em, t]) => (
                  <li key={t} style={{ fontSize: 12, color: 'var(--text-muted)', padding: '3px 0' }}>{em} {t}</li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm
            fields={CONTACT_FIELDS}
            submitLabel="Send Subscription Enquiry →"
            onSubmit={() => alert('Thank you! We will contact you soon. \nWhatsApp: +91 99999 99999')}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-banner">
        <h2>Come Taste the Food — No Commitment!</h2>
        <p style={{ color: 'var(--green-light)' }}>
          Drop by at any meal time and taste for yourself. We're confident you'll subscribe!
        </p>
        <a href="https://wa.me/919999993069?text=I%20want%20to%20subscribe%20to%20Vidya%20Mess" className="btn-primary">
          <MessageCircle size={18} style={{marginRight: 6}} /> Subscribe via WhatsApp
        </a>
      </section>
    </div>
  );
}
