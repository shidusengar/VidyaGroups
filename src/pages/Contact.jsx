import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const CONTACT_FIELDS = [
  { name: 'name',     label: 'Your Name *',           type: 'text',     placeholder: 'Full name'                 },
  { name: 'mobile',   label: 'Mobile Number *',       type: 'tel',      placeholder: '10-digit mobile number'   },
  { name: 'service',  label: 'Interested Service',    type: 'select',   options: ['Hostel / PG','Mess / Tiffin','Library / Study Room','Solar Installation','General Inquiry'] },
  { name: 'message',  label: 'Message',               type: 'textarea', placeholder: 'How can we help you?' },
];

export default function Contact() {
  return (
    <div>
      <Helmet bodyAttributes={{ class: 'theme-home' }}>
        <title>Contact Us | Vidya Groups Ghaziabad</title>
        <meta name="description" content="Get in touch with Vidya Groups for Hostel, Mess, Library, or Solar services in Ghaziabad. Find our office address, phone number, and Google Map location." />
        <link rel="canonical" href="https://vidyagroups.com/contact" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vidya Groups",
            "url": "https://vidyagroups.com",
            "logo": "https://vidyagroups.com/assets/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9999993069",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["en", "hi"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near ABES Engineering College, Crossing Republik",
              "addressLocality": "Ghaziabad",
              "addressRegion": "UP",
              "postalCode": "201016",
              "addressCountry": "IN"
            }
          }`}
        </script>
      </Helmet>

      {/* ── Hero ── */}
      <section className="modern-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1200&q=80')", minHeight: '50vh', paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="modern-hero-content glass-panel" style={{ maxWidth: '700px' }}>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: 'white', lineHeight: 1.12, marginBottom: 12 }}>
            Get in <em style={{ fontStyle: 'normal', color: 'var(--theme-accent)' }}>Touch</em>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
            Whether you need a safe hostel, a healthy meal, a quiet place to study, or a solar installation, Vidya Groups is here for you. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="grid-2" style={{ maxWidth: 1100, gap: '40px' }}>
          
          {/* Contact Info & Map */}
          <div>
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '32px' }}>
              <span className="section-tag">Reach Out</span>
              <h2>Contact Information</h2>
              <p>Our team is available to answer your queries and provide support.</p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--theme-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--theme-main)', flexShrink: 0 }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>Visit Our Office</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Vidya Groups HQ<br />
                    Near ABES Engineering College,<br />
                    Crossing Republik, Ghaziabad, UP 201016
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--theme-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--theme-main)', flexShrink: 0 }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>Call or WhatsApp</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    <a href="tel:+919999993069" style={{ color: 'var(--theme-main)', textDecoration: 'none', fontWeight: 500 }}>+91 99999 93069</a><br />
                    <a href="https://wa.me/919999993069" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 500 }}>WhatsApp Us (24/7)</a>
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--theme-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--theme-main)', flexShrink: 0 }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>Business Hours</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)', height: '300px', boxShadow: 'var(--shadow-sm)' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.35508846387!2d77.43798485!3d28.6277983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22c60837b7%3A0x7c35343eceb7bde0!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Vidya Groups Location"
              ></iframe>
            </div>

          </div>

          {/* Contact Form Container */}
          <div>
            <div style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--radius)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '24px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>Send us a Message</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>Fill out the form below and our team will get back to you within 24 hours.</p>
              
              <ContactForm 
                fields={CONTACT_FIELDS}
                submitLabel="Send Message →"
                onSubmit={() => alert('Thank you for contacting Vidya Groups. We will get back to you shortly!')}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── About Us (Brief) ── */}
      <section className="section">
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span className="section-tag">About Us</span>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '32px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '20px' }}>Building Trust Since 2018</h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '20px' }}>
            Vidya Groups started with a simple vision: to provide high-quality, affordable living and educational facilities for students in Ghaziabad. Over the years, we have expanded our services to include premium hostels, hygienic tiffin services, state-of-the-art study libraries, and innovative solar energy solutions.
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Our commitment to quality, transparency, and customer satisfaction has made us a trusted name in Crossing Republik, Indirapuram, Kaushambi, and beyond. Whether you are a student looking for a safe home or a business looking to switch to green energy, Vidya Groups is your reliable partner.
          </p>
        </div>
      </section>
    </div>
  );
}
