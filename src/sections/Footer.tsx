import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';


export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Logo className="mb-6 opacity-90 scale-90 origin-left" />
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Our Mission: To make construction teamwork easy, clear, and fair for everyone.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-50 text-gray-400 hover:text-brand-blue hover:bg-brand-blue/10 rounded-full transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="p-2 bg-gray-50 text-gray-400 hover:text-brand-blue hover:bg-brand-blue/10 rounded-full transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="p-2 bg-gray-50 text-gray-400 hover:text-brand-blue hover:bg-brand-blue/10 rounded-full transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="p-2 bg-gray-50 text-gray-400 hover:text-brand-blue hover:bg-brand-blue/10 rounded-full transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Company Pages */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-500 hover:text-brand-blue transition-colors text-sm flex items-center gap-2"><span className="text-brand-blue">›</span> Home</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-brand-blue transition-colors text-sm flex items-center gap-2"><span className="text-brand-blue">›</span> About Us</Link></li>
              <li><Link to="/giveaway" className="text-gray-500 hover:text-brand-blue transition-colors text-sm flex items-center gap-2"><span className="text-brand-blue">›</span> Giveaway</Link></li>
              <li><Link to="/blogs" className="text-gray-500 hover:text-brand-blue transition-colors text-sm flex items-center gap-2"><span className="text-brand-blue">›</span> Blogs</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-brand-blue transition-colors text-sm flex items-center gap-2"><span className="text-brand-blue">›</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/terms-of-use" className="text-gray-500 hover:text-brand-blue transition-colors text-sm flex items-center gap-2"><span className="text-brand-blue">›</span> Terms Of Use</Link></li>
              <li><Link to="/terms-and-conditions" className="text-gray-500 hover:text-brand-blue transition-colors text-sm flex items-center gap-2"><span className="text-brand-blue">›</span> Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-500 hover:text-brand-blue transition-colors text-sm flex items-center gap-2"><span className="text-brand-blue">›</span> Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Help & Support</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              If you get stuck or have a question, our friendly team is ready to help. Open "Help & Support" in the app, write a short message, and tap Submit!
            </p>
            <Link to="/contact" className="text-brand-blue font-semibold text-sm hover:underline">Send Us a Message</Link>
          </div>
        </div>

        {/* Privacy & Terms Text */}
        <div className="pt-8 mb-0  flex flex-col md:flex-row gap-8">
          {/* <div className="flex-1">
            <h5 className="font-bold text-gray-800 text-xs uppercase mb-2">Privacy Policy</h5>
            <p className="text-gray-400 text-xs leading-relaxed">
              We collect basic things like your name and email so you can talk to builders safely. We keep details locked safely and never sell them.
            </p>
          </div> */}
          {/* <div className="flex-1">
            <h5 className="font-bold text-gray-800 text-xs uppercase mb-2">Terms & Conditions</h5>
            <p className="text-gray-400 text-xs leading-relaxed">
              Rules: Be polite and honest. Agree on price before work. Make sure to pay on time. Builders must give clear instructions. Tradies must do good work.
            </p>
          </div> */}
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()}© All Rights Reserved 2026 Designed And Developed by Graphica Pro Artistry
          </p>
        </div>
      </div>
    </footer>
  );
};
