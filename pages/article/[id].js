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
  const { id } = router.query;
  // Using the useSelector Hook to fetch the state from store.
  const fetchedCountries = useSelector((state) => state);

  const fetchedArticles = useSelector((state) => state?.articles?.article);
  const fetchedSidebarArticles = useSelector(
    (state) => state?.articles?.articleSidebarList
  );

  const [articleData, setArticleData] = useState([]);
  const [articleSidebarData, setArticleSidebarData] = useState([]);

  useEffect(() => {
    if (id) {
      dispatch({
        type: ACTION_TYPES.FETCH_ARTICLE,
        id,
      });
      dispatch({
        type: ACTION_TYPES.FETCH_ARTICLE_SIDEBAR,
      });
    }
  }, [id]);

  useEffect(() => {
    if (fetchedArticles?.artikel) {
      setArticleData(fetchedArticles?.artikel);
    }
    if (fetchedSidebarArticles?.artikel) {
      setArticleSidebarData(fetchedSidebarArticles?.artikel);
    }
  }, [fetchedArticles, fetchedSidebarArticles?.artikel]);

  useEffect(() => {
    console.log(fetchedSidebarArticles);
  }, [fetchedSidebarArticles]);

  const renderTitle = useCallback(() => {
    if (articleData.length === 0) {
      return "";
    }

    return (
      <h1 className="mb-4 text-3xl font-extrabold text-black">
        {articleData[0]?.title}
      </h1>
    );
  }, [articleData]);

  const renderMainImage = useCallback(() => {
    if (articleData.length === 0) {
      return "";
    }
    const imageUrl =
      "https://ihgma.org" + articleData[0]?.main_picture;
    return (
      <div
        className="w-full rounded-xl h-[32rem] bg-cover bg-bottom"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    );
  }, [articleData]);

  const renderSidebarCard = useCallback(
    (item) => {
      if (articleSidebarData.length === 0) {
        return null;
      }
      const imageUrl = "https://ihgma.org" + item?.main_picture;
      return (
        <div
          // onClick={() => router.push(`/article/${item.id}`)}
          className="relative overflow-hidden rounded-xl sm:rounded-2xl border my-4"
        >
          <div
            className="h-[109px] md:h-[144px] overflow-hidden bg-cover"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="absolute top-0 left-0 p-2">
            <div className="rounded-2xl bg-blue-100 text-blue-800 p-1 sm:p-2 text-[9px] sm:text-xs">
              <p>{item?.category}</p>
            </div>
          </div>
          <div className="p-2 md:p-3 bg-white">
            <div className="relative">
              <div className="text-start">
                <h1 className="font-bold text-[10px] md:text-sm mb-1 multiline-ellipsis">
                  {item?.title}
                </h1>
                {/* <p className="text-[9px] mb-4 md:text-xs multiline-ellipsis">
                  5 Manfaat Detox yang Dapat Menunjang Kesehatan Tubuh Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy
                  text ever since{" "}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      );
    },
    [articleSidebarData.length]
  );

  const renderArticle = useCallback(() => {
    if (articleData.length === 0) {
      return "";
    }
    const content = articleData[0]?.content;
    const unescapedHtml = unescape(content);
    const sanitizedHtml = unescapedHtml.replace(/\r?\n|\r/g, "");
    console.log(sanitizedHtml);
    console.log('kontennya ', sanitizedHtml);
    return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
  }, [articleData]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <section className="bg-white pb-8 lg:px-36">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 px-8 md:px-0">
            {renderTitle()}
            {renderMainImage()}
            <div className="flex flex-col md:flex-row w-full">
              <div className="md:basis-3/4 mr-10">{renderArticle()}</div>
              <div className="w-full md:basis-1/4 mt-8">
                <h1 className="text-2xl font-semibold text-black mb-4">
                  Recent Post
                </h1>
                {articleSidebarData &&
                  articleSidebarData.map((items) => {
                    return renderSidebarCard(items);
                  })}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
