import { Routes, Route, Link } from 'react-router-dom';
import TipCalculator from './components/TipCalculator/TipCalculator';

function App() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '100vh',
      width: '100%',
      fontFamily: 'sans-serif',
      margin: 0,
    }}>
      {/* JEDNODUCHÉ MENU NAVIGÁCIE */}
      <nav style={{ padding: '20px', textAlign: 'center' }}>
        <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Home</Link>
        <Link to="/tip-calculator" style={{ color: 'white', textDecoration: 'none' }}>Tip Calculator</Link>
      </nav>

      <Routes>
        {/* DOMOVSKÁ STRÁNKA (Tvoja biela karta) */}
        <Route path="/" element={
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
                Vstúpte do sveta mojich komponentov.
              </p>
              <Link to="/tip-calculator" style={{
                marginTop: '20px',
                display: 'inline-block',
                padding: '10px 25px',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>
                Pozrieť Tip Calculator
              </Link>
            </div>
          </div>
        } />

        {/* STRÁNKA PRE KALKULAČKU */}
        <Route path="/tip-calculator" element={
          <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
            <TipCalculator />
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;