import { takeEvery, put } from "redux-saga/effects";
import {
  fetchArticleHomeAction,
  fetchArticleAllAction,
  fetchpayloadidebarAction,
  fetchArticleAction,
  ACTION_TYPES,
} from "../actions/countriesAction";

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
  yield put(fetchpayloadidebarAction(data)); // Initiate the action on fetch success.
}
function* fetchArticle(parameter) {
  const apiData = yield fetch(`https://ihgma.org/api/article/id/${parameter}`); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  yield put(fetchArticleAction(data)); // Initiate the action on fetch success.
}

export default function* watchCountries() {
  // yield takeEvery(ACTION_TYPES.FETCH_ARTICLE_HOME, fetchArticleHome);
  // yield takeEvery(ACTION_TYPES.FETCH_ARTICLE_ALL, fetchArticleAll);
  // yield takeEvery(ACTION_TYPES.FETCH_ARTICLE_SIDEBAR, fetchArticleSidebar);
  // yield takeEvery(ACTION_TYPES.FETCH_ARTICLE, fetchArticle);
}
