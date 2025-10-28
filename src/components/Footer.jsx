import './Footer.css'


function Footer() {
  return (
    <footer>
      
      <div className="footer-green">
        <div className="container--narrow">
          <div className="footer-flex">
            <div className="footer-left">&copy; 2025 StorAid, All rights reserved.</div>
            <div className="footer-right">
              <img src="/images/footericon.svg" alt=""  /> Terms & Conditions
              <img src="/images/footericon.svg" alt="" /> Privacy Policy

            </div>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer