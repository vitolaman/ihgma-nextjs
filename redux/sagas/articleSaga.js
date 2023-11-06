import { takeEvery, put, call } from "redux-saga/effects";
import {
  ACTION_TYPES,
  fetchArticleHomeAction,
  fetchArticleAllAction,
  fetchSidebarAction,
  fetchArticleAction,
  fetchAdsHomeAction,
  cartAdded,
  fetchAllItemsAction,
  fetchItemAction,
  fetchVacancyAction,
  fetchCategoryAction,
  registerAction,
  loginAction,
  upgradeAction,
  fetchVacancyItemAction,
  fetchDpdAction,
} from "../actions/articleAction";
import { useSelector } from "react-redux";
import axios from "axios";

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
  const apiData = yield fetch(
    `https://ihgma.org/api/ads/aGZlNjQybnA4MTM0bjI4OA/welcome-page-01`
  ); // Fetch call.
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
  console.log("ini", parameter);
  const apiData = yield fetch(
    `https://ihgma.org/api/marketplace/id/${parameter?.id}`
  ); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  yield put(fetchItemAction(data?.market_listing[0])); // Initiate the action on fetch success.
}

function* fetchVacancy() {
  const apiData = yield fetch(`https://ihgma.org/api/vacancy/`); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  yield put(fetchVacancyAction(data)); // Initiate the action on fetch success.
}

function* fetchVacancyItem(parameter) {
  const apiData = yield fetch(
    `https://ihgma.org/api/vacancy/id/${parameter?.id}`
  ); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  yield put(fetchVacancyItemAction(data)); // Initiate the action on fetch success.
}

function* fetchCategory(parameter) {
  const apiData = yield fetch(
    `https://ihgma.org/api/article/category/${parameter?.id}`
  ); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  yield put(fetchCategoryAction(data)); // Initiate the action on fetch success.
}

function* register(parameter) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const payload = parameter.values;
  const response = yield call(
    axios.post,
    "https://ihgma.org/api/userprofile/register/aGZlNjQybnA4MTM0bjI4OA",
    {
      email: payload.email,
      password: payload.password,
      name: payload.name,
      username: payload.username,
      phone: payload.phone,
      address: payload.address,
      birthdate: payload.birthdate,
    },
    options
  );
  console.log(response);
  yield put(registerAction(response)); // Initiate the action on fetch success.
}

function* login(parameter) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const payload = parameter.values;
  const response = yield call(
    axios.post,
    "https://ihgma.org/api/userprofile/login/aGZlNjQybnA4MTM0bjI4OA",
    {
      param: payload.param,
      password: payload.password,
    },
    options
  );
  console.log(response);
  yield put(loginAction(response));
}

function* upgrade(parameter) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const payload = parameter?.params?.values;
  console.log(parameter?.params);
  const response = yield call(
    axios.post,
    "https://ihgma.org/api/userprofile/upgrademember/aGZlNjQybnA4MTM0bjI4OA",
    {
      id: parameter?.params?.values?.id,
      currentHotel: parameter?.params?.values?.hotel,
      hotelAddress: parameter?.params?.values?.hotel_add,
      uid: parameter?.params?.uid,
      dpd: parameter?.params?.values?.dpd,
    },
    options
  );
  console.log(response);
  yield put(upgradeAction(response)); // Initiate the action on fetch success.
}

function* fetchDpd(parameter) {
  const apiData = yield fetch(
    `https://ihgma.org/api/userprofile/dpd/aGZlNjQybnA4MTM0bjI4OA`
  ); // Fetch call.
  const data = yield apiData.json(); // Convert to JSON.
  yield put(fetchDpdAction(data)); // Initiate the action on fetch success.
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
  yield takeEvery(ACTION_TYPES.FETCH_CATEGORY, fetchCategory);
  yield takeEvery(ACTION_TYPES.REGISTER, register);
  yield takeEvery(ACTION_TYPES.LOGIN, login);
  yield takeEvery(ACTION_TYPES.UPGRADE, upgrade);
  yield takeEvery(ACTION_TYPES.FETCH_VACANCY_ITEM, fetchVacancyItem);
  yield takeEvery(ACTION_TYPES.FETCH_DPD, fetchDpd);
}
