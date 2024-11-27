import React, { useState } from 'react';
import { HomeIcon, UserIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'; // Updated import for settings icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`flex h-screen`}>
      {/* Sidebar */}
      <div className={`fixed ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300 bg-gray-800 h-full`}>
        <div className="flex flex-col w-full">
          <button
            onClick={toggleSidebar}
            className="p-4 text-gray-400 hover:text-white focus:outline-none focus:ring"
          >
            {isOpen ? '<' : '>'}
          </button>

          <nav className="flex-grow">
            <ul className="space-y-2 mt-4">
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <HomeIcon className="w-6 h-6" />
                  {isOpen && <span className="ml-3">Home</span>}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <UserIcon className="w-6 h-6" />
                  {isOpen && <span className="ml-3">Profile</span>}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <Cog6ToothIcon className="w-6 h-6" />
                  {isOpen && <span className="ml-3">Settings</span>}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="ml-64 p-4 w-full overflow-auto">
        {/* You can add your content here */}
      </div>
    </div>
  );
};

export default Sidebar;
