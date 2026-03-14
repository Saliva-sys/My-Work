import { Routes, Route, Link } from 'react-router-dom';
import TipCalculator from '../apps/tip-calculator/TipCalculator'; 
import FaqAccordion from '../apps/faq-accordion/FaqAccordion';

function App() {
return (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '100vh',
      width: '100%',
      fontFamily: 'sans-serif',
      margin: 0,
    }}>
      {/* 1. NAVIGÁCIA - táto časť ostáva na obrazovke vždy */}
      <nav style={{ padding: '20px', textAlign: 'center' }}>
        <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Home</Link>
        <Link to="/tip-calculator" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Tip Calculator</Link>
        <Link to="/faq-accordion" style={{ color: 'white', textDecoration: 'none' }}>FAQ Accordion</Link>
      </nav>

      {/* 2. DYNAMICKÁ ZÓNA - sem sa bude vykresľovať obsah podľa URL */}
      <Routes>
        {/* Domovská stránka - tvoj "biely box" */}
        <Route path="/" element={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '50px' }}>
            <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '30px', textAlign: 'center', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', borderBottom: '8px solid #3b82f6', width: '90%', maxWidth: '500px' }}>
              <h1 style={{ color: '#1e293b', fontSize: '2.5rem', fontWeight: '900', marginBottom: '15px' }}>React Portfolio ⚛️</h1>
              <p style={{ color: '#64748b', fontSize: '1.2rem', lineHeight: '1.6' }}>Vstúpte do sveta mojich komponentov.</p>
              
              <Link to="/tip-calculator" style={{ marginTop: '20px', display: 'block', padding: '10px 25px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', marginBottom: '10px' }}>Pozrieť Tip Calculator</Link>
              <Link to="/faq-accordion" style={{ marginTop: '10px', display: 'block', padding: '10px 25px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>Pozrieť FAQ Accordion</Link>
            </div>
          </div>
        } />

        {/* Cesty k tvojim projektom */}
        <Route path="/tip-calculator" element={<TipCalculator />} />
        <Route path="/faq-accordion" element={<FaqAccordion />} />
      </Routes>
    </div>
  );
}

export default App;