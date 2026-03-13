// src/components/Layout/Layout.jsx
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <nav style={{ padding: '20px', background: '#1e293b', textAlign: 'center' }}>
        <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
        <Link to="/tip-calculator" style={{ color: 'white', marginRight: '15px' }}>Tip Calculator</Link>
        <Link to="/faq-accordion" style={{ color: 'white' }}>FAQ Accordion</Link>
      </nav>

      {/* Tu sa zobrazí obsah stránky (children) */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;