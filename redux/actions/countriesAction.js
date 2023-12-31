export const ACTION_TYPES = {
  // Define Action types
  FETCH_ARTICLE_HOME: "FETCH_ARTICLE_HOMEV2",
  ARTICLE_HOME_FETCHED: "ARTICLE_HOME_FETCHEDV2",
  FETCH_ARTICLE_ALL: "FETCH_ARTICLE_ALL",
  ARTICLE_ALL_FETCHED: "ARTICLE_ALL_FETCHED",
  FETCH_ARTICLE_SIDEBAR: "FETCH_ARTICLE_SIDEBAR",
  ARTICLE_SIDEBAR_FETCHED: "ARTICLE_SIDEBAR_FETCHED",
  FETCH_ARTICLE: "FETCH_ARTICLE",
  ARTICLE_FETCHED: "ARTICLE_FETCHED",
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
export const fetchpayloadidebarAction = (payload) => ({
  type: ACTION_TYPES.FETCH_ARTICLE_SIDEBAR,
  payload: payload,
});
export const fetchArticleAction = (payload) => ({
  type: ACTION_TYPES.ARTICLE_FETCHED,
  payload: payload,
});

export default {
  fetchArticleHomeAction,
  fetchArticleAllAction,
  fetchpayloadidebarAction,
  fetchArticleAction,
};
