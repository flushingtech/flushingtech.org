const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex bg-gray-900 text-white py-4">
      <a href="#" className="bg-green-400">
        <img src="" alt="Flushing Tech Home" />
      </a>
      <div className="flex flex-1 justify-center bg-orange-400 mr-8 ">
        <ul className="flex space-x-4">
          <li>
            <a href="#events" className="hover:text-gray-400">
              Events
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/xGgFcZknDR"
              className="hover:text-gray-400"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://www.meetup.com/flushing-tech/"
              className="hover:text-gray-400"
            >
              Meetup
            </a>
          </li>
          <li>
            <a
              href="https://github.com/flushingtech"
              className="flex items-center hover:text-gray-400"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
// check if "sticky"
// make responsive for mobile
// input the logo
// need to get the events piece to jump to events section
