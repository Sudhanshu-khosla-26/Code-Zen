import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    // Set the initial active link
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


  return (
    <>
      <nav className={`flex left-[14px] top-[25px] fixed z-[2] w-[98vw] rounded-full border-[4px]  ${scrolled ? "bg-[#110202] border-white border-[4px]" : "border-transparent"} justify-between items-center  py-[10px] pl-10 pr-14`}>
        <div>
          <a href='#'>
            <img src="/images/title.svg" alt="Logo" className="h-[44px] w-[198px]" />
          </a>
        </div>
        <ul className="flex gap-x-6 text-[#F44878] font-medium leading-[31px] ">
          {['home', 'about', 'tracks', 'sponsors', 'prizes', 'frontmen', 'FAQs'].map((link) => (
            <li key={link} className={`min-w-[60px] relative `}>
              <a
                href={`#${link}`}
                className={`text-[21.5px] hover:text-white relative z-10 ${activeLink === `#${link}` ? 'text-white font-bold' : ''}`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
              {activeLink === `#${link}` && (
                <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-lg"></div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
