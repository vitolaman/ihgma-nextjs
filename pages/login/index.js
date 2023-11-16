/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useCallback, useState } from "react";
import { unescape } from "lodash";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { Header, Footer } from "../../components";
import { useRouter } from "next/router";

import { ACTION_TYPES } from "../../redux/actions/articleAction";

export default function Article() {
  const dispatch = useDispatch();
  const router = useRouter();

  const loginResponse = useSelector((state) => state?.articles?.loginResponse);
  const isLogin = useSelector((state) => state?.articles?.user);

  const [values, setValues] = useState({
    param: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (loginResponse?.data?.status == "success") {
      router.push("/home");
    }
  }, [loginResponse, router]);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: ACTION_TYPES.LOGIN,
      values,
    });
  }

  return (
    <div>
      <Head>
        <title>IHGMA</title>
        <meta name="description" content="Generated by IHGMA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="v-screen h-screen flex justify-center items-center">
        <section className="bg-white py-8 w-1/2 lg:px-36 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-lg shadow p-4"
          >
            <p className="mb-4 font-semibold">Login</p>
            <div className="mb-6">
              <label
                
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email / Username / Phone
              </label>
              <input
                type="text"
                id="param"
                name="param"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="email / username / phone"
                value={values.email}
                onChange={handleInputChange}
                required
              ></input>
            </div>
            <div className="mb-6">
              <label
                // for="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                value={values.password}
                onChange={handleInputChange}
              ></input>{" "}
            </div>
            {loginResponse?.data?.status == "error" && (
              <p className="text-base text-red-600 font-bold mb-4 ml-2">
                ERROR: {loginResponse?.data?.msg}
              </p>
            )}
            <button
              type="submit"
              // onClick={handleSubmit}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Login
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
