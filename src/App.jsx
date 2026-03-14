import { Link } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '100vh',
      width: '100%',
      fontFamily: 'sans-serif',
      margin: 0,
    }}>
      {/* Menu navigácie (zobrazí sa len na domovskej stránke) */}
      <nav style={{ padding: '20px', textAlign: 'center' }}>
        <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Home</Link>
        <a href="https://saliva-sys.github.io/tip-calculator/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Tip Calculator</a>
        <a href="https://saliva-sys.github.io/faq-accordion/" style={{ color: 'white', textDecoration: 'none' }}>FAQ Accordion</a>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '50px' }}>
        <div style={{
          backgroundColor: 'white',
          padding: '50px',
          borderRadius: '30px',
          textAlign: 'center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          borderBottom: '8px solid #3b82f6',
          width: '90%',
          maxWidth: '500px',
        }}>
          <h1 style={{ color: '#1e293b', fontSize: '2.5rem', fontWeight: '900', marginBottom: '15px' }}>
            React Portfolio ⚛️
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.2rem', lineHeight: '1.6' }}>
            Prostredie úspešne nastavené. <br />
            Kliknite na aplikácie v menu na spustenie.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;