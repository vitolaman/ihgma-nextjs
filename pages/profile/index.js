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

  const profile = useSelector((state) => state?.articles?.user);

  useEffect(() => {
    if(!profile || profile.length === 0){
        router.push("/home/");
    }
    console.log(profile);
  }, [profile, router]);

  return (
    <div>
      <Head>
        <title>IHGMA</title>
        <meta name="description" content="Generated by IHGMA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="bg-white py-8 lg:px-36 px-4 item-center justify-center flex">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-center text-xl mb-2">{profile?.name}</div>
          </div>
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="px-4 py-2">Username:</td>
                <td className="px-4 py-2">{profile?.username}</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Email:</td>
                <td className="px-4 py-2">{profile?.email}</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Phone:</td>
                <td className="px-4 py-2">{profile?.phone}</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Role:</td>
                <td className="px-4 py-2">{profile?.role}</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Created:</td>
                <td className="px-4 py-2">{profile?.when_create}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </div>
  );
}