import TipCalculator from './components/TipCalculator/TipCalculator';

function App() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      minHeight: '100vh',     // Zmenené na minHeight
      width: '100vw',         // Pridaná plná šírka
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      margin: 0 ,             // Odstráni okraje
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '50px',
        borderRadius: '30px',
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        borderBottom: '8px solid #3b82f6',
        width: '90%',          // Prispôsobí sa oknu
        maxWidth: '500px',      // Ale nebude príliš široká
      }}>
        <h1 style={{color: '#1e293b', fontSize: '2.5rem', fontWeight: '900', marginBottom: '15px'}}>
          <TipCalculator /> ⚛️
        </h1>
        
        <p style={{color: '#64748b', fontSize: '1.2rem', lineHeight: '1.6'}}>
          Prostredie úspešne nastavené. <br/>
          Prvá fáza portfólia je tu!
        </p>
        <div style={{
          marginTop: '30px', 
          padding: '10px 20px', 
          backgroundColor: '#eff6ff', 
          color: '#2563eb', 
          borderRadius: '99px', 
          fontSize: '1rem', 
          fontWeight: 'bold',
          display: 'inline-block'
        }}>
          #freelance #webdev #amcm_cars
        </div>
      </div>
    </div>
  );
}

export default App;
