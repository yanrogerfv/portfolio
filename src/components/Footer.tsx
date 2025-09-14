const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-slate-400">
            © {currentYear} Yan Roger Fogaça Vieira. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;