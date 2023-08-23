import { takeEvery, put } from "redux-saga/effects";
import {
  fetchArticleHomeAction,
  fetchArticleAllAction,
  fetchSidebarAction,
  fetchArticleAction,
  fetchAdsHomeAction,
  cartAdded,
  fetchAllItemsAction,
  fetchItemAction,
  fetchVacancyAction,
  ACTION_TYPES,
} from "../actions/articleAction";
import { useSelector } from "react-redux";

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
  console.log(data);
  yield put(fetchArticleAction(data)); // Initiate the action on fetch success.
}
function* fetchAdsHome() {
  const apiData = yield fetch(`https://ihgma.org/api/ads/aGZlNjQybnA4MTM0bjI4OA/welcome-page-01`); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  console.log(data);
  yield put(fetchAdsHomeAction(data)); // Initiate the action on fetch success.
}

function* addToCart(params) {
  console.log(params.item);
  yield put(cartAdded(params.item)); // Initiate the action on fetch success.
}

function* fetchAllItems() {
  const apiData = yield fetch(`https://ihgma.org/api/marketplace/`); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  yield put(fetchAllItemsAction(data)); // Initiate the action on fetch success.
}

function* fetchItem(parameter) {
  console.log('ini', parameter);
  const apiData = yield fetch(`https://ihgma.org/api/marketplace/id/${parameter?.id}`); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  yield put(fetchItemAction(data?.market_listing[0])); // Initiate the action on fetch success.
}

function* fetchVacancy() {
  const apiData = yield fetch(`https://ihgma.org/api/vacancy/`); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  yield put(fetchVacancyAction(data)); // Initiate the action on fetch success.
}

export default function* watchArticles() {
  yield takeEvery(ACTION_TYPES.FETCH_ARTICLE_HOME, fetchArticleHome);
  yield takeEvery(ACTION_TYPES.FETCH_ARTICLE_ALL, fetchArticleAll);
  yield takeEvery(ACTION_TYPES.FETCH_ARTICLE_SIDEBAR, fetchArticleSidebar);
  yield takeEvery(ACTION_TYPES.FETCH_ARTICLE, fetchArticle);
  yield takeEvery(ACTION_TYPES.FETCH_ADS_HOME, fetchAdsHome);
  yield takeEvery(ACTION_TYPES.ADD_CART, addToCart);
  yield takeEvery(ACTION_TYPES.FETCH_ALL_ITEMS, fetchAllItems);
  yield takeEvery(ACTION_TYPES.FETCH_ITEM, fetchItem);
  yield takeEvery(ACTION_TYPES.FETCH_VACANCY, fetchVacancy);
}
