/**
 * ContactForm — generic contact/enquiry form.
 *
 * Props:
 *  fields       {Array}  – array of field config objects (see below)
 *  submitLabel  {string} – button label
 *  onSubmit     {fn}     – called on button click (default shows alert)
 *  submitStyle  {object} – extra style for the submit button
 *
 * Field config shape:
 *  { label, type, placeholder, options, name }
 *   type: 'text' | 'tel' | 'number' | 'textarea' | 'select'
 *   options (for select): string[]
 */
export default function ContactForm({
  fields = [],
  submitLabel = 'Submit →',
  onSubmit,
  submitStyle = {},
}) {
  const handleSubmit = () => {
    if (onSubmit) onSubmit();
    else alert('Shukriya! Hamari team 24 ghante mein contact karegi. ');
  };

  return (
    <div className="contact-form">
      {fields.map((field) => (
        <div className="form-field" key={field.name}>
          <label>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea placeholder={field.placeholder} />
          ) : field.type === 'select' ? (
            <select>
              {field.options.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input type={field.type || 'text'} placeholder={field.placeholder} />
          )}
        </div>
      ))}

      <button
        className="btn-green"
        style={submitStyle}
        onClick={handleSubmit}
      >
        {submitLabel}
      </button>
    </div>
  );
}
