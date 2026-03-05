export default function TipCalculator() {
  return (
    <div style={{
      backgroundColor: '#c5e4e7', // Svetlomodrá z výzvy
      padding: '40px',
      borderRadius: '25px',
      color: '#00474b',
      maxWidth: '800px',
      margin: '20px auto'
    }}>
      <h2 style={{ textAlign: 'center', letterSpacing: '5px' }}>SPLI<br/>TTER</h2>
      
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '20px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', // Rozdelí to na dva stĺpce
        gap: '30px'
      }}>
        {/* ĽAVÁ STRANA: ZADÁVANIE */}
        <div>
          <label>Bill (Účet)</label>
          <input type="number" placeholder="0" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
        </div>

        {/* PRAVÁ STRANA: VÝSLEDOK */}
        <div style={{ backgroundColor: '#00474b', borderRadius: '15px', padding: '20px', color: 'white' }}>
          <p>Tip Amount / person</p>
          <h1 style={{ color: '#26c2ad' }}>$0.00</h1>
          <button style={{ width: '100%', backgroundColor: '#26c2ad', border: 'none', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>
            RESET
          </button>
        </div>
      </div>
    </div>
  )
}