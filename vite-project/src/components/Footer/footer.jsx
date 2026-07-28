import './footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>
        &copy;{year} Adishesh Arbatti. Built with React
      </p>
    </footer>
  );
}

export default Footer; // We must
