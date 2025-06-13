// 1️⃣ Import icons at the top
import { FaDownload, FaEdit, FaWhatsapp } from 'react-icons/fa';

const ResumePreview = ({ resumeData, onEdit }) => {

  // 2️⃣ Function for WhatsApp share
  const shareOnWhatsApp = () => {
    const message = encodeURIComponent(`Hey! Check out my resume created using 1ClickResume 👇\nhttps://1clickresume.vercel.app`);
    const url = `https://wa.me/?text=${message}`;
    window.open(url, '_blank');
  };

  // 3️⃣ Button styles
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: '0.3s'
  };

  // 4️⃣ Inside return() — add buttons
  return (
    <div>
      {/* Resume content */}

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
        <button onClick={handleDownload} style={buttonStyle}>
          <FaDownload style={{ marginRight: '8px' }} />
          Download PDF
        </button>

        <button onClick={onEdit} style={buttonStyle}>
          <FaEdit style={{ marginRight: '8px' }} />
          Edit
        </button>

        <button onClick={shareOnWhatsApp} style={buttonStyle}>
          <FaWhatsapp style={{ marginRight: '8px' }} />
          Share on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ResumePreview;

