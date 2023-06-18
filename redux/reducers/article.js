import { ACTION_TYPES } from "../actions/articleAction";

// Define initial states.
const initialState = {
  articleHomeList: [],
  articleAllList: [],
  articleSidebarList: [],
  article: [],
  ads: []
};

const getArticles = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ARTICLE_HOME_FETCHED:
      // console.log(action);
      return { ...state, articleHomeList: action.payload };
    case ACTION_TYPES.ARTICLE_ALL_FETCHED:
      // console.log(action);
      return { ...state, articleAllList: action.payload };
    case ACTION_TYPES.ARTICLE_SIDEBAR_FETCHED:
      console.log(action);
      return { ...state, articleSidebarList: action.payload };
    case ACTION_TYPES.ARTICLE_FETCHED:
      // console.log(action);
      return { ...state, article: action.payload };
    case ACTION_TYPES.HOME_ADS_FETCHED:
      // console.log(action);
      return { ...state, ads: action.payload };

    default:
      // console.log(action);
      return state;
  }
};

export default getArticles;
