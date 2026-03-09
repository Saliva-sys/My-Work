import './TipCalculator.css';

export default function TipCalculator() {
  
  return (
    <div className="main__space">
      <h2 className="space__title">SPLI<br/>TTER</h2>
      <div className="items__space">
        <section className="count__total">               
            <label htmlFor="bill" className="count__total-name">Bill</label>
            <input id="bill" type="number" placeholder="0" />
            
            <p className="tip__select">Select Tip %</p>

            <div className="tip__selector"> 
              <button type='button' className="tip__selector-btn">5%</button>
              <button type='button' className="tip__selector-btn">10%</button>
              <button type='button' className="tip__selector-btn">15%</button>
              <button type='button' className="tip__selector-btn">25%</button>
              <button type='button' className="tip__selector-btn">50%</button>
              <button type='button' className="tip__selector-btn-custom">Custom</button>
            </div>

            <div className="count__people">
              <label htmlFor="people" className="count__total-name">Number of People</label>
              <input id="people" type="number" placeholder="5" />
            </div>
        </section>

        <section className="result__space">
          <div className="result__space-tip">            
            <p className="result__space-title">Tip Amount <br/>
            <span className="result__space-subtitle">/ person</span></p>            
            <h2 className="result__space-price-total">$0.00</h2>
          </div>

          <div  className="result__space-result">
            <p className="result__space-title">Total <br/>
            <span className="result__space-subtitle">/ person</span></p>
            <h2 className="result__space-price-total">$0.00</h2>
          </div>

          <button type='button' className="result__space-btn">RESET</button>
        </section>
      </div>

    <footer className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className="attribution-link" target="_blank" rel="noopener">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/Saliva-sys" className="attribution-link" target="_blank" rel="noopener">Adriana Weidlichova</a>.
    </footer>
  </div>

  
  )
}