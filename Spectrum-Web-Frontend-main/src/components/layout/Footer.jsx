import React from "react";

const Footer = () => {
  return (
    <div className="md:px-10">
      <footer className="flex flex-col gap-5">
        <div className="container hidden md:flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-violet-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-5 h-5 rounded-full text-gray-900"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Name
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#">
                Resource
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <hr className="hidden md:flex" />
        </div>
        <div className="container hidden md:flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="py-6 text-sm text-center dark:text-gray-600">
              © 1968 Company Co. All rights reserved.
            </div>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Email"
              className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.08132 6.01156L10.3329 13.41C11.1759 14.27 12.5608 14.27 13.4038 13.41L20.8394 5.82392C20.9421 6.02707 21 6.25678 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5C3 6.32899 3.02862 6.16467 3.08132 6.01156ZM3.99542 5.08698L11.2613 12.5C11.5946 12.84 12.1421 12.84 12.4754 12.5L19.7977 5.02953C19.7014 5.01016 19.6019 5 19.5 5H4.5C4.32297 5 4.1531 5.03067 3.99542 5.08698Z"
                  fill="#595D62"
                />
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Twitter"
              className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
            >
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <mask
                    id="mask0_20_3632"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="16"
                  >
                    <path d="M24 0.5H0V15.5H24V0.5Z" fill="white" />
                  </mask>
                  <g mask="">
                    <path
                      d="M20.317 1.83577C18.7873 1.26948 17.147 0.852265 15.4319 0.613307C15.4007 0.608695 15.3695 0.62022 15.3534 0.643271C15.1424 0.946002 14.9087 1.34094 14.7451 1.65136C12.9004 1.42854 11.0652 1.42854 9.25832 1.65136C9.09465 1.33404 8.85248 0.946002 8.64057 0.643271C8.62449 0.62099 8.59328 0.609464 8.56205 0.613307C6.84791 0.851502 5.20756 1.26872 3.67693 1.83577C3.66368 1.84038 3.65233 1.84807 3.64479 1.85806C0.533392 5.60844 -0.31895 9.26664 0.0991801 12.8795C0.101072 12.8972 0.11337 12.9141 0.130398 12.9248C2.18321 14.1411 4.17171 14.8795 6.12328 15.369C6.15451 15.3767 6.18761 15.3674 6.20748 15.3467C6.66913 14.838 7.08064 14.3017 7.43348 13.7377C7.4543 13.7047 7.43442 13.6655 7.39186 13.6524C6.73913 13.4527 6.1176 13.2091 5.51973 12.9325C5.47244 12.9102 5.46865 12.8556 5.51216 12.8295C5.63797 12.7535 5.76382 12.6743 5.88396 12.5944C5.90569 12.5798 5.93598 12.5767 5.96153 12.5859C9.88928 14.0328 14.1415 14.0328 18.023 12.5859C18.0485 12.576 18.0788 12.579 18.1015 12.5936C18.2216 12.6735 18.3475 12.7535 18.4742 12.8295C18.5177 12.8556 18.5149 12.9102 18.4676 12.9325C17.8697 13.2145 17.2482 13.4527 16.5945 13.6517C16.552 13.6647 16.533 13.7047 16.5538 13.7377C16.9143 14.3009 17.3258 14.8373 17.7789 15.3459C17.7978 15.3674 17.8319 15.3767 17.8631 15.369C19.8241 14.8795 21.8126 14.1411 23.8654 12.9248C23.8834 12.9141 23.8948 12.8979 23.8967 12.8802C24.3971 8.7034 23.0585 5.0752 20.3482 1.85882C20.3416 1.84807 20.3303 1.84038 20.317 1.83577ZM8.02002 10.6796C6.8375 10.6796 5.86313 9.80372 5.86313 8.728C5.86313 7.65228 6.8186 6.77636 8.02002 6.77636C9.23087 6.77636 10.1958 7.65997 10.1769 8.728C10.1769 9.80372 9.22141 10.6796 8.02002 10.6796ZM15.9947 10.6796C14.8123 10.6796 13.8379 9.80372 13.8379 8.728C13.8379 7.65228 14.7933 6.77636 15.9947 6.77636C17.2056 6.77636 18.1705 7.65997 18.1516 8.728C18.1516 9.80372 17.2056 10.6796 15.9947 10.6796Z"
                      fill="#595D62"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_20_3632">
                    <rect
                      width="24"
                      height="15"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div className="container md:hidden flex flex-wrap items-center mx-auto justify-between sspace-y-0">
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#">
                Resource
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Privacy policy
              </a>
            </li>
          </ul>
          <div className="flex justify-center space-x-4">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Email"
              className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.08132 6.01156L10.3329 13.41C11.1759 14.27 12.5608 14.27 13.4038 13.41L20.8394 5.82392C20.9421 6.02707 21 6.25678 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5C3 6.32899 3.02862 6.16467 3.08132 6.01156ZM3.99542 5.08698L11.2613 12.5C11.5946 12.84 12.1421 12.84 12.4754 12.5L19.7977 5.02953C19.7014 5.01016 19.6019 5 19.5 5H4.5C4.32297 5 4.1531 5.03067 3.99542 5.08698Z"
                  fill="#595D62"
                />
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Twitter"
              className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
            >
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <mask
                    id="mask0_20_3632"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="16"
                  >
                    <path d="M24 0.5H0V15.5H24V0.5Z" fill="white" />
                  </mask>
                  <g mask="">
                    <path
                      d="M20.317 1.83577C18.7873 1.26948 17.147 0.852265 15.4319 0.613307C15.4007 0.608695 15.3695 0.62022 15.3534 0.643271C15.1424 0.946002 14.9087 1.34094 14.7451 1.65136C12.9004 1.42854 11.0652 1.42854 9.25832 1.65136C9.09465 1.33404 8.85248 0.946002 8.64057 0.643271C8.62449 0.62099 8.59328 0.609464 8.56205 0.613307C6.84791 0.851502 5.20756 1.26872 3.67693 1.83577C3.66368 1.84038 3.65233 1.84807 3.64479 1.85806C0.533392 5.60844 -0.31895 9.26664 0.0991801 12.8795C0.101072 12.8972 0.11337 12.9141 0.130398 12.9248C2.18321 14.1411 4.17171 14.8795 6.12328 15.369C6.15451 15.3767 6.18761 15.3674 6.20748 15.3467C6.66913 14.838 7.08064 14.3017 7.43348 13.7377C7.4543 13.7047 7.43442 13.6655 7.39186 13.6524C6.73913 13.4527 6.1176 13.2091 5.51973 12.9325C5.47244 12.9102 5.46865 12.8556 5.51216 12.8295C5.63797 12.7535 5.76382 12.6743 5.88396 12.5944C5.90569 12.5798 5.93598 12.5767 5.96153 12.5859C9.88928 14.0328 14.1415 14.0328 18.023 12.5859C18.0485 12.576 18.0788 12.579 18.1015 12.5936C18.2216 12.6735 18.3475 12.7535 18.4742 12.8295C18.5177 12.8556 18.5149 12.9102 18.4676 12.9325C17.8697 13.2145 17.2482 13.4527 16.5945 13.6517C16.552 13.6647 16.533 13.7047 16.5538 13.7377C16.9143 14.3009 17.3258 14.8373 17.7789 15.3459C17.7978 15.3674 17.8319 15.3767 17.8631 15.369C19.8241 14.8795 21.8126 14.1411 23.8654 12.9248C23.8834 12.9141 23.8948 12.8979 23.8967 12.8802C24.3971 8.7034 23.0585 5.0752 20.3482 1.85882C20.3416 1.84807 20.3303 1.84038 20.317 1.83577ZM8.02002 10.6796C6.8375 10.6796 5.86313 9.80372 5.86313 8.728C5.86313 7.65228 6.8186 6.77636 8.02002 6.77636C9.23087 6.77636 10.1958 7.65997 10.1769 8.728C10.1769 9.80372 9.22141 10.6796 8.02002 10.6796ZM15.9947 10.6796C14.8123 10.6796 13.8379 9.80372 13.8379 8.728C13.8379 7.65228 14.7933 6.77636 15.9947 6.77636C17.2056 6.77636 18.1705 7.65997 18.1516 8.728C18.1516 9.80372 17.2056 10.6796 15.9947 10.6796Z"
                      fill="#595D62"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_20_3632">
                    <rect
                      width="24"
                      height="15"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <hr className="md:hidden block" />
        </div>
        <div className="container md:hidden flex flex-col items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-2">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-violet-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-5 h-5 rounded-full text-gray-900"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
              <li>
                <a rel="noopener noreferrer" href="#">
                  Name
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="pb-6 text-sm text-center dark:text-gray-600">
              © 1968 Company Co. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
