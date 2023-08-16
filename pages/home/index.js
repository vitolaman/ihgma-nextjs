/* eslint-disable @next/next/no-img-element */
import styles from "./styles/Home.module.css";
import React, { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { Header, Footer } from "../../components";
import { useRouter } from "next/router";

import { ACTION_TYPES } from "../../redux/actions/articleAction";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  // Using the useSelector Hook to fetch the state from store.
  const fetchedCountries = useSelector((state) => state);

  const fetchedArticles = useSelector(
    (state) => state?.articles?.articleHomeList
  );
  const fetchedAds = useSelector((state) => state?.articles?.ads);
  const fetchedItems = useSelector(
    (state) => state?.articles?.itemList?.market_listing
  );

  const [articleData, setArticleData] = useState([]);
  const [adsData, setAdsData] = useState([]);

  function getRandomIndex(array) {
    const length = array.length;
    const randomIndex = Math.floor(Math.random() * length);
    return randomIndex;
  }

  useEffect(() => {
    dispatch({
      type: ACTION_TYPES.FETCH_ARTICLE_HOME,
    });
    dispatch({
      type: ACTION_TYPES.FETCH_ADS_HOME,
    });
    dispatch({
      type: ACTION_TYPES.FETCH_ALL_ITEMS,
    });
  }, [dispatch]);

  useEffect(() => {
    console.log("ini ", fetchedItems);
  }, [fetchedItems]);

  useEffect(() => {
    if (fetchedArticles?.artikel) {
      setArticleData(fetchedArticles?.artikel);
    }
    if (fetchedAds?.ads) {
      setAdsData(fetchedAds?.ads);
    }
  }, [fetchedAds?.ads, fetchedArticles]);

  const renderAds = useCallback(() => {
    if (adsData.length === 0) {
      return null;
    }
    const index = getRandomIndex(adsData);
    const result = adsData[index]?.url.substring(1);
    const adsUrl = "https://dashboard.ihgma.org" + result;
    return (
      <div>
        <img src={adsUrl} alt="Frame-1" />
      </div>
    );
  }, [adsData]);

  return (
    <div>
      <Head>
        <title>IHGMA</title>
        <meta name="description" content="Generated by IHGMA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div
          className="w-full mx-auto bg-nordic-gray-light flex md:pt-0 md:items-center bg-cover bg-right"
          style={{
            // maxWidth: "1600px",
            height: "32rem",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1598598795009-f80c5072e665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')",
          }}
        >
          <div className="bg-gradient-to-t from-slate-800 h-full w-full flex flex-col justify-between">
            <div className="flex flex-grow w-full justify-between items-center px-8 pt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 bg-white rounded-full p-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 bg-white rounded-full p-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <div className="flex flex-col w-full justify-end items-center px-6 pb-8 tracking-wide">
              <div className="mt-3 text-xs bg-blue-100 text-blue-800 rounded-full py-1 px-3 w-min">
                travel
              </div>
              <h1 className="text-white text-3xl font-bold mt-4">
                Rekomendasi Tempat Wisata 2023
              </h1>
            </div>
          </div>
        </div>
        <section className="bg-white py-8 lg:px-36">
          <div className="w-full px-6 py-1 mb-2 ">{renderAds()}</div>
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <nav id="store" className="w-full top-0 px-6 py-1 mb-6">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 pt-3">
                <div className="flex items-center gap-12">
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                    Recent Post
                  </h2>
                </div>
              </div>
            </nav>

            <div className="grid grid-cols-1 gap-4 px-6 xl:grid-cols-3">
              {articleData &&
                articleData.map((c, index) => {
                  // const content = c.content;
                  // const unescapedHtml = unescape(content);
                  // const sanitizedHtml = unescapedHtml.replace(/\r?\n|\r/g, '');
                  // console.log(sanitizedHtml);
                  return (
                    <div
                      key={index}
                      className="w-full h-full p-2 flex flex-col"
                      onClick={() => router.push(`/article/${c.id}`)}
                    >
                      <a className="h-full bg-white drop-shadow-lg hover:shadow-lg group">
                        <picture className="block overflow-hidden">
                          <img
                            className="object-cover w-full h-60"
                            src={"https://ihgma.org/" + c?.main_picture}
                          />
                        </picture>
                        <div className="px-5 pb-5">
                          <div className="mt-3 text-xs bg-blue-100 text-blue-800  py-1 px-3 w-min">
                            {c.category}
                          </div>
                          <div className="pt-2 flex items-center justify-between">
                            <p className="text-2xl text-slate-900 font-semibold">
                              {c.title}
                            </p>
                          </div>
                          <p className="text-lg pt-2 text-blue-800 font-medium">
                            Read More
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6 inline"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                              />
                            </svg>
                          </p>
                        </div>
                        <div className="absolute bottom-0 h-[5px] w-1/6 bg-gradient-to-r from-[#7b3a94] via-[#332f5b] to-[#1b8393] ease-out duration-300 group-hover:w-full group-hover:transition-all"></div>
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* HARDCODED SECTION */}

        <section
          style={{
            backgroundImage: "url('https://i.ibb.co/mRf1yz2/bg.png')",
          }}
          className="bg-center bg-cover py-8 flex"
        >
          <div className="py-28 pl-6 lg:px-28 text-white basis-full md:basis-3/4">
            <p className="uppercase tracking-wide no-underline hover:no-underline font-semibold text-4xl mb-8">
              Our Vision
            </p>

            <p className="mt-8 mb-8 text-2xl">
              we’re passionate about our members and the future of the
              hospitality industry. We look forward to helping each and every
              one of you reach your business and career goals.
            </p>
          </div>
          <div className="basis-1/4 text-white py-20 flex justify-center items-center invisible md:visible">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </section>

        <section className="bg-white py-8 lg:px-36">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <nav id="store" className="w-full top-0 px-6 py-1 mb-6">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 pt-3">
                <div className="flex items-center gap-12">
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                    Store
                  </h2>
                </div>
              </div>
            </nav>

            <div className="w-full grid grid-cols-1 gap-4 px-6 xl:grid-cols-3">
              {fetchedItems?.map((item) => {
                return (
                  <div
                    key={item?.id}
                    onClick={() => router.push(`/item/${item.id}`)}
                    className="w-full p-2 flex flex-col"
                  >
                    <a
                      // href="items.html"
                      className="bg-white drop-shadow-lg hover:shadow-lg"
                    >
                      <picture className="block overflow-hidden">
                        <img
                          className="object-cover w-full h-60"
                          src={"https://ihgma.org" + item.main_picture}
                        />
                      </picture>
                      <div className="px-5 pb-5">
                        <div className="mt-3 text-xs bg-blue-100 text-blue-800  py-1 px-3 w-min">
                          {item?.category === "1" ? "Baju" : "Alat"}
                        </div>
                        <div className="pt-2 flex items-center justify-between">
                          <p className="text-2xl text-slate-900 font-semibold">
                            {item?.name}
                          </p>
                        </div>
                        <p className="pt-3 text-gray-900 text-sm">IDR 50.000</p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#7b3a94] via-[#332f5b] to-[#1b8393] py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Subscribe to our newsletter.
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-200">
                  Nostrud amet eu ullamco nisi aute in ad minim nostrud
                  adipisicing velit quis. Duis tempor incididunt dolore.
                </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto  border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button className="px-5 py-4 text-base font-medium text-center text-blue-800 transition duration-500 ease-in-out transform bg-white lg:px-10  hover:bg-gradient-to-r from-[#7b3a94] via-[#332f5b] to-[#1b8393] hover:outline hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Subscribe
                  </button>
                </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className=" bg-white/5 p-2 ring-1 ring-white/10">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                  </div>
                  <dt className="mt-4 font-semibold text-white">
                    Get Our Lastest News
                  </dt>
                  <dd className="mt-2 leading-7 text-gray-200">
                    Non laboris consequat cupidatat laborum magna. Eiusmod non
                    irure cupidatat duis commodo amet.
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className=" bg-white/5 p-2 ring-1 ring-white/10">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                      />
                    </svg>
                  </div>
                  <dt className="mt-4 font-semibold text-white">No spam</dt>
                  <dd className="mt-2 leading-7 text-gray-200">
                    Officia excepteur ullamco ut sint duis proident non
                    adipisicing. Voluptate incididunt anim.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="bg-white py-6 sm:py-8 lg:py-12 lg:px-36">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  Our Activities
                </h2>
                <p className="hidden max-w-screen-sm text-gray-500 md:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor{" "}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden  bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Lorem Ipsum
                </span>
              </a>
              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden  bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Lorem Ipsum
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden  bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Lorem Ipsum
                </span>
              </a>

              <a
                href="#"
                className="group relative flex h-48 items-end overflow-hidden  bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Lorem Ipsum
                </span>
              </a>
            </div>
          </div>
        </section>

        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col items-center justify-between gap-4  bg-gray-100 p-4 sm:flex-row md:p-8">
              <div>
                <h2 className="text-xl font-bold text-blue-800 md:text-2xl">
                  Become A Member
                </h2>
                <p className="text-gray-600">Start Your Journey Now!</p>
              </div>

              <a
                href="#"
                className="inline-block bg-blue-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base"
              >
                Register
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
