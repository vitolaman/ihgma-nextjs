/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { ACTION_TYPES } from "../../redux/actions/articleAction";
import userRole from "../../libs/constant";

function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isShowProfile, setShowProfile] = useState(false);
  const [isShowMembership, setShowMembership] = useState(false);
  const [isShowNews, setShowNews] = useState(false);
  const [isShowStore, setShowStore] = useState(false);
  const [isShowLive, setShowLive] = useState(false);
  const [isShowMenu, setShowMenu] = useState(false);

  const isLogin = useSelector((state) => state?.articles?.isLogin);
  const user = useSelector((state) => state?.articles?.user);

  useEffect(() => {
    console.log(isShowMenu);
  }, [isShowMenu]);

  function handleLogout() {
    setShowMenu(false);
    dispatch({
      type: ACTION_TYPES.LOGOUT,
    });
  }

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a onClick={() => router.push("/home")} className="flex items-center">
          <img
            src="https://ihgma.org/assets/logo_ihgma_t.png"
            alt="ihgma"
            className="h-12 md:h-20"
          />
        </a>
        <div className="flex items-center md:order-2">
          <a
            className="hidden md:inline-block  pl-3 inline-block no-underline hover:text-blue-700 mr-5"
            onClick={() => router.push("/cart")}
          >
            <svg
              className="fill-current hover:text-blue-700"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
              <circle cx="10.5" cy="18.5" r="1.5" />
              <circle cx="17.5" cy="18.5" r="1.5" />
            </svg>
          </a>
          {isLogin ? (
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={() => setShowMenu(!isShowMenu)}
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>
          ) : (
            <div>
              <button
                onClick={() => {
                  router.push("/login");
                }}
                className="px-2 py-1 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-800 mr-2 lg:px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </button>
              <button
                onClick={() => {
                  router.push("/register");
                }}
                className="px-2 py-1 text-base font-medium text-center text-blue-800 transition duration-500 ease-in-out transform border-2 border-blue-800 lg:px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
          )}
          <div
            className={
              isShowMenu
                ? "absolute top-14 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 shadow"
                : "z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 shadow"
            }
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm font-medium text-gray-500 truncate">
                {user?.name}
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  onClick={() => router.push("/profile")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100  bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:border-gray-700">
            <li onClick={() => router.push("/home")}>
              <a
                // href="index.html"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="relative ">
              <button
                onClick={() => setShowProfile(!isShowProfile)}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0 md:w-auto"
              >
                Profile{" "}
                <svg
                  className="w-4 h-4 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className={
                  isShowProfile
                    ? "absolute z-10 font-normal bg-white divide-y divide-gray-100  shadow w-44"
                    : "z-10 hidden font-normal bg-white divide-y divide-gray-100  shadow w-44"
                }
              >
                <ul
                  className="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="history.html"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      History
                    </a>
                  </li>
                  <li>
                    <a
                      href="vision.html"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Vision & Mission
                    </a>
                  </li>
                  <li>
                    <a
                      href="logo.html"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Logo Meaning
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        router.push("/adart");
                      }}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      AD/ART
                    </a>
                  </li>
                  <li>
                    <a
                      href="structure.html"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Organizational Structure
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                DPD
              </a>
            </li>
            {user?.role == userRole.User && (
              <li className="relative ">
                <button
                  onClick={() => setShowMembership(!isShowMembership)}
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                >
                  Membership{" "}
                  <svg
                    className="w-4 h-4 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>

                <div
                  className={
                    isShowMembership
                      ? "absolute z-10 font-normal bg-white divide-y divide-gray-100  shadow w-44"
                      : "z-10 hidden font-normal bg-white divide-y divide-gray-100  shadow w-44"
                  }
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        onClick={() => {
                          router.push("/upgrade");
                        }}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        New Member
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            <li className="relative">
              <button
                onClick={() => setShowNews(!isShowNews)}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
              >
                News{" "}
                <svg
                  className="w-4 h-4 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                className={
                  isShowNews
                    ? "absolute z-10 font-normal bg-white divide-y divide-gray-100 shadow w-44"
                    : "z-10 hidden font-normal bg-white divide-y divide-gray-100 shadow w-44"
                }
              >
                <ul
                  className="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      onClick={() =>
                        router.push(`/category/International
                      `)
                      }
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      International
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        router.push(`/category/IHGMA
                      `)
                      }
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      IHGMA
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        router.push(`/category/Tourism
                      `)
                      }
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Tourism
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        router.push(`/category/Hospitality
                      `)
                      }
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Hospitality
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        router.push(`/category/Trend
                      `)
                      }
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Trend
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        router.push(`/category/Pariwisata
                      `)
                      }
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Pariwisata
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => router.push(`/vacancy/`)}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Job Vacancy
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                onClick={() => setShowStore(!isShowStore)}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
              >
                Store{" "}
                <svg
                  className="w-4 h-4 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className={
                  isShowStore
                    ? "z-10 absolute font-normal bg-white divide-y divide-gray-100  shadow w-44"
                    : "z-10 hidden font-normal bg-white divide-y divide-gray-100  shadow w-44"
                }
              >
                <ul
                  className="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="store.html"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Buy Product
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Sell Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="class.html"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Training Registration
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Hold Training
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative">
              <button
                onClick={() => setShowLive(!isShowLive)}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
              >
                Live{" "}
                <svg
                  className="w-4 h-4 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                className={
                  isShowLive
                    ? "z-10 absolute font-normal bg-white divide-y divide-gray-100  shadow w-44"
                    : "z-10 hidden font-normal bg-white divide-y divide-gray-100  shadow w-44"
                }
              >
                <ul
                  className="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Instagram Live
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Youtube Live
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// const Header = () => {

// };

export default Header;
