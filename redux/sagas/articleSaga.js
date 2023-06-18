import { takeEvery, put } from "redux-saga/effects";
import {
  fetchArticleHomeAction,
  fetchArticleAllAction,
  fetchSidebarAction,
  fetchArticleAction,
  fetchAdsHomeAction,
  ACTION_TYPES,
} from "../actions/articleAction";

function* fetchArticleHome() {
  const apiData = yield fetch(`https://ihgma.org/api/article/forhome/`); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  yield put(fetchArticleHomeAction(data)); // Initiate the action on fetch success.
}
function* fetchArticleAll() {
  const apiData = yield fetch(`https://ihgma.org/api/article/`); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  yield put(fetchArticleAllAction(data)); // Initiate the action on fetch success.
}
function* fetchArticleSidebar() {
  const apiData = yield fetch(`https://ihgma.org/api/article/random/`); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  console.log(data);
  yield put(fetchSidebarAction(data)); // Initiate the action on fetch success.
}
function* fetchArticle(parameter) {
  const apiData = yield fetch(
    `https://ihgma.org/api/article/id/${parameter?.id}`
  ); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  // console.log(data);
  yield put(fetchArticleAction(data)); // Initiate the action on fetch success.
}
function* fetchAdsHome() {
  // const apiData = yield fetch(`https://ihgma.org/api/ads/aGZlNjQybnA4MTM0bjI4OA/welcome-page-01`); // Fetch call.
  const apiData = {
    status: "success",
    msg: "found records",
    ads: [
      {
        segment: "welcome-page-01",
        url: "./img/ads_image/20230615_2Mc4v6.jpg",
        resolution: "1440x250",
      },
      {
        segment: "welcome-page-01",
        url: "./img/ads_image/20230615_f72cJ5.jpg",
        resolution: "1440x250",
      },
    ],
  };
  // const data = yield apiData.json(); // Convert to JSON.
  console.log(apiData);
  yield put(fetchAdsHomeAction(apiData)); // Initiate the action on fetch success.
}

export default function* watchArticles() {
  yield takeEvery(ACTION_TYPES.FETCH_ARTICLE_HOME, fetchArticleHome);
  yield takeEvery(ACTION_TYPES.FETCH_ARTICLE_ALL, fetchArticleAll);
  yield takeEvery(ACTION_TYPES.FETCH_ARTICLE_SIDEBAR, fetchArticleSidebar);
  yield takeEvery(ACTION_TYPES.FETCH_ARTICLE, fetchArticle);
  yield takeEvery(ACTION_TYPES.FETCH_ADS_HOME, fetchAdsHome);
}
