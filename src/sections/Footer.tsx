import React from 'react';
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
              Connecting builders with high-quality, trusted tradespeople. Build your projects faster and smarter.
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

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-brand-blue transition-colors text-sm">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-500 hover:text-brand-blue transition-colors text-sm">How it Works</a></li>
              <li><a href="#benefits" className="text-gray-500 hover:text-brand-blue transition-colors text-sm">Benefits</a></li>
              <li><a href="#testimonials" className="text-gray-500 hover:text-brand-blue transition-colors text-sm">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-brand-blue transition-colors text-sm">For Builders</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-blue transition-colors text-sm">For Contractors</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-blue transition-colors text-sm">For Tradespeople</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-blue transition-colors text-sm">Enterprise</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-500 text-sm">support@build2trade.com</li>
              <li className="text-gray-500 text-sm">1-800-BUILD-IT</li>
              <li className="text-gray-500 text-sm mt-4">
                123 Construction Ave,<br/>
                Suite 400<br/>
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Build2Trade. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
