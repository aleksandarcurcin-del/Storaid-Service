import './Footer.css'


function Footer() {
  return (
    <footer>
      
      <div className="footer-green">
        <div className="container--narrow">
          <div className="footer-flex">
            <div className="footer-left">&copy; 2025 StorAid, All rights reserved.</div>
            <div className="footer-right">
              <a className="footer-notfound" href="/notfound">
                <img src="/images/footericon.svg" alt="checkmark icon"  /> Terms & Conditions
              </a>
              <a className="footer-notfound" href="/notfound">
                <img src="/images/footericon.svg" alt="checkmark icon" /> Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer