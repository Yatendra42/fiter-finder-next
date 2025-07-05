import Image from "next/image";
import Logo from '../../public/images/logo2.svg';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="intro-section">
          <a href="/">
            <Image src={Logo} alt="Site Logo" width={150} />
          </a>

          <p className="brand-description">Fetishfinder is the most convenient website for verified users to buy or sell custom foot content in a safe and secure environment.</p>
        </div>
        <div className="product-list">
          <ul>
            <li>
              <a href="/">Sellers</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/">Celebrities</a>
            </li>
            <li>
              <a href="/">Affiliate Program</a>
            </li>
          </ul>
        </div>

        <div className="useful-link">
          <h2>Useful Links</h2>

          <ul>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms of Service</a>
            </li>
            <li>
              <a href="/">DMCA Policy</a>
            </li>
            <li>
              <a href="/">2257 Statement</a>
            </li>
            <li>
              <a href="/">Refund Policy</a>
            </li>
             <li>
              <a href="/">Appeals Policy</a>
            </li>
             <li>
              <a href="/">Complaint Policy</a>
            </li>
             <li>
              <a href="/">Referral Program Terms</a>
            </li>
               <li>
              <a href="/">Acceptable Use Policy</a>
            </li>
               <li>
              <a href="/">Repeat Infringer Policy</a>
            </li>
            
          </ul>
        </div>

        <div className="contact">
            <h2>Help and Contact Us</h2>

          <ul>
            <li>
              <a href="/">FAQs</a>
            </li>
            <li>
              <a href="/">Blogs</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Contact Info</a>
            </li>
            <li>
              <a href="/">hello@fetishfinder.com</a>
            </li>
             <li>
              <a href="/">Carson City, NV</a>
            </li>       
          </ul>
        </div>
      </div>

   <p className="footer-copyright">&copy; fetishfinder All rights reserved 2025 - Transactions will appear on your credit card statement as SiEGPAY.COM*FetishFinder</p>

    </footer>
  );
}