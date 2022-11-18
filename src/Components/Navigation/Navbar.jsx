export const Navbar = () => {
  return (
    <div className="bg-[#24a3b5] shadow-lg">
      <div className="container mx-auto">
        <div className="sm:flex justify-center">
          {/* Logo */}
          <a href="" className="text-[#AECFC1] text-3xl font-bold p-3">
            LOGO
          </a>

          {/* Menu Items */}

          <ul className="flex-1 text-white sm:self-center text-xl font-medium border-t sm:border-none">
            <li className="sm:inline-block">
              <a href="" className="p-5 hover:bg-white hover:text-blue-600/100">
                Home
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="" className="p-5 hover:bg-white hover:text-blue-600/100">
                Man
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="" className="p-5 hover:bg-white hover:text-blue-600/100">
                Women
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="" className="p-5 hover:bg-white hover:text-blue-600/100">
                New Arrivals
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="" className="p-5 hover:bg-white hover:text-blue-600/100">
                About
              </a>
            </li>
          </ul>

          <ul className="flex flex-row-reverse flex-1 text-white sm:self-center text-xl font-medium border-t sm:border-none">
            <li className="sm:inline-block">
              <a href="" className="p-5 hover:bg-white hover:text-blue-600/100">
                SIGN UP
              </a>
            </li>
            <li className="sm:inline-block">
              <a href="" className="p-5 hover:bg-white hover:text-blue-600/100">
                LOG IN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
