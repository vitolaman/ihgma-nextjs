export const ACTION_TYPES = {
  // Define Action types
  FETCH_ARTICLE_HOME: "FETCH_ARTICLE_HOME",
  ARTICLE_HOME_FETCHED: "ARTICLE_HOME_FETCHED",
  FETCH_ARTICLE_ALL: "FETCH_ARTICLE_ALL",
  ARTICLE_ALL_FETCHED: "ARTICLE_ALL_FETCHED",
  FETCH_ARTICLE_SIDEBAR: "FETCH_ARTICLE_SIDEBAR",
  ARTICLE_SIDEBAR_FETCHED: "ARTICLE_SIDEBAR_FETCHED",
  FETCH_ARTICLE: "FETCH_ARTICLE",
  ARTICLE_FETCHED: "ARTICLE_FETCHED",
  FETCH_ADS_HOME: "FETCH_ADS_HOME",
  HOME_ADS_FETCHED: "HOME_ADS_FETCHED",
  // cart section
  ADD_CART: "ADD_CART",
  CART_ADDED: "CART_ADDED",
  UPDATE_COUNT: "UPDATE_COUNT",
  DELETE_ITEM: "DELETE_ITEM",
  // marketplace section
  FETCH_ALL_ITEMS: "FETCH_ALL_ITEMS",
  ALL_ITEMS_FETCHED: "ALL_ITEMS_FETCHED",
  FETCH_ITEM: "FETCH_ITEM",
  ITEM_FETCHED: "ITEM_FETCHED",
  // vacancy section
  FETCH_VACANCY: "FETCH_VACANCY",
  VACANCY_FETCHED: "VACANCY_FETCHED",
  FETCH_VACANCY_ITEM: "FETCH_VACANCY_ITEM",
  VACANCY_ITEM_FETCHED: "VACANCY_ITEM_FETCHED",
  // category section
  FETCH_CATEGORY: "FETCH_CATEGORY",
  CATEGORY_FETCHED: "CATEGORY_FETCHED",
  // auth section
  REGISTER: "REGISTER",
  REGISTER_CLEAR: "REGISTER_CLEAR",
  REGISTER_RESPONSE: "REGISTER_RESPONSE",
  LOGIN: "LOGIN",
  LOGIN_RESPONSE: "LOGIN_RESPONSE",
  LOGOUT: "LOGOUT",
  // profile section
  FETCH_PROFILE: "FETCH_PROFILE",
  PROFILE_FETCHED: "PROFILE_FETCHED",
  EDIT_PROFILE: "EDIT_PROFILE",
  EDIT_PROFILE_RESPONSE: "EDIT_PROFILE_RESPONSE",
  // upgrade section
  FETCH_DPD: "FETCH_DPD",
  DPD_FETCHED: "DPD_FETCHED",
  UPGRADE: "UPGRADE",
  UPGRADE_CLEAR: "UPGRADE_CLEAR",
  UPGRADE_RESPONSE: "UPGRADE_RESPONSE",
};

// Create functions to handle your actions.
export const fetchArticleHomeAction = (payload) => ({
  type: ACTION_TYPES.ARTICLE_HOME_FETCHED,
  payload: payload,
});
export const fetchArticleAllAction = (payload) => ({
  type: ACTION_TYPES.ARTICLE_ALL_FETCHED,
  payload: payload,
});
export const fetchSidebarAction = (payload) => ({
  type: ACTION_TYPES.ARTICLE_SIDEBAR_FETCHED,
  payload: payload,
});
export const fetchArticleAction = (payload) => ({
  type: ACTION_TYPES.ARTICLE_FETCHED,
  payload: payload,
});
export const fetchAdsHomeAction = (payload) => ({
  type: ACTION_TYPES.HOME_ADS_FETCHED,
  payload: payload,
});
export const cartAdded = (payload) => ({
  type: ACTION_TYPES.CART_ADDED,
  payload: payload,
});
export const updateCount = (payload) => ({
  type: ACTION_TYPES.UPDATE_COUNT,
  payload: payload,
});
export const deleteItem = (payload) => ({
  type: ACTION_TYPES.DELETE_ITEM,
  payload: payload,
});
export const fetchAllItemsAction = (payload) => ({
  type: ACTION_TYPES.ALL_ITEMS_FETCHED,
  payload: payload,
});
export const fetchItemAction = (payload) => ({
  type: ACTION_TYPES.ITEM_FETCHED,
  payload: payload,
});
export const fetchVacancyAction = (payload) => ({
  type: ACTION_TYPES.VACANCY_FETCHED,
  payload: payload,
});
export const fetchVacancyItemAction = (payload) => ({
  type: ACTION_TYPES.VACANCY_ITEM_FETCHED,
  payload: payload,
});
export const fetchCategoryAction = (payload) => ({
  type: ACTION_TYPES.CATEGORY_FETCHED,
  payload: payload,
});
export const registerAction = (payload) => ({
  type: ACTION_TYPES.REGISTER_RESPONSE,
  payload: payload,
});
export const loginAction = (payload) => ({
  type: ACTION_TYPES.LOGIN_RESPONSE,
  payload: payload,
});
export const editProfileAction = (payload) => ({
  type: ACTION_TYPES.EDIT_PROFILE_RESPONSE,
  payload: payload,
});
export const fetchProfileAction = (payload) => ({
  type: ACTION_TYPES.PROFILE_FETCHED,
  payload: payload,
});
export const logoutAction = (payload) => ({
  type: ACTION_TYPES.LOGOUT,
  payload: payload,
});
export const upgradeAction = (payload) => ({
  type: ACTION_TYPES.UPGRADE_RESPONSE,
  payload: payload,
});
export const fetchDpdAction = (payload) => ({
  type: ACTION_TYPES.DPD_FETCHED,
  payload: payload,
});

export default {
  fetchArticleHomeAction,
  fetchArticleAllAction,
  fetchSidebarAction,
  fetchArticleAction,
  fetchAdsHomeAction,
  cartAdded,
  updateCount,
  deleteItem,
  fetchAllItemsAction,
  fetchItemAction,
  fetchVacancyAction,
  fetchCategoryAction,
  registerAction,
  loginAction,
  logoutAction,
  upgradeAction,
  fetchVacancyItemAction,
};
