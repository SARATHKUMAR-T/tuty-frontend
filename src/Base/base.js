import React from "react";
import { useNavigate } from "react-router-dom";

function Base(props) {

  const navigate=useNavigate()
  return (
    <div className="base">
      <header>
        <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button>
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                TuTy CRM
              </span>
            </button>
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
              <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li>
                  <button
                
                    onClick={()=>navigate('/')}
                    class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                   
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                     onClick={()=>navigate('/signup')}
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    SignUp
                  </button>
                </li>
                <li>
                  <button
                     onClick={()=>navigate('/dashboard')}
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    DashBoard
                  </button>
                </li>
                <li>
                  <button
                    
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Main section */}
      <main>{props.children}</main>
    </div>
  );
}

export default Base;