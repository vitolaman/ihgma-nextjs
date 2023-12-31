import { ACTION_TYPES } from "../actions/countriesAction";

// Define initial states.
const initialState = {
  articleHomeList: [],
  articleAllList: [],
  articleSidebarList: [],
  article: [],
};

const getCountries = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ARTICLE_HOME_FETCHED:
      return { ...state, articleHomeList: action.payload };
    case ACTION_TYPES.ARTICLE_ALL_FETCHED:
      return { ...state, articleAllList: action.payload };
    case ACTION_TYPES.ARTICLE_SIDEBAR_FETCHED:
      return { ...state, articleSidebarList: action.payload };
    case ACTION_TYPES.ARTICLE_FETCHED:
      return { ...state, article: action.payload };

    default:
      return state;
  }
};

export default getCountries;
