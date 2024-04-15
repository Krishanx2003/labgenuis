import React from 'react';
import Link from 'next/link';
import { footerData, FooterSection } from '../constant/footer';

const Footer: React.FC = () => {
  return (
    <>
      <header className="py-10 px-8 md:px-20">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Lab Genius</h1>
          <button className="bg-white text-black">View careers</button>
        </div>
      </header>
      <main className="py-20 px-8 md:px-20">
        <h2 className="text-6xl font-bold leading-tight mb-12">Connect with fellow enthusiasts, share ideas, and collaborate on groundbreaking projects.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerData.map((section: FooterSection, index: number) => (
            <div key={index}>
              <h3 className="font-semibold text-xl mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <Link href={link.href} className="hover:underline">{link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Footer;
