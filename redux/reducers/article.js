import { ACTION_TYPES } from "../actions/articleAction";

// Define initial states.
const initialState = {
  // article section
  articleHomeList: [],
  articleAllList: [],
  articleSidebarList: [],
  article: [],
  // ads section
  ads: [],
  // cart section
  cart: [],
  // item section
  itemList: [],
  item: [],
  //account section
  isLogin: false,
  token: "",
  profile: [],
  //vacancy section
  vacancyList: [],
  //category section
  categoryList: [],
  // auth section
  registerResponse: [],
  loginResponse: [],
  user: [],
};

const getArticles = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ARTICLE_HOME_FETCHED:
      return { ...state, articleHomeList: action.payload };

    case ACTION_TYPES.ARTICLE_ALL_FETCHED:
      return { ...state, articleAllList: action.payload };

    case ACTION_TYPES.ARTICLE_SIDEBAR_FETCHED:
      return { ...state, articleSidebarList: action.payload };

    case ACTION_TYPES.ARTICLE_FETCHED:
      return { ...state, article: action.payload };

    case ACTION_TYPES.HOME_ADS_FETCHED:
      return { ...state, ads: action.payload };

    case ACTION_TYPES.CART_ADDED:
      const existingIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex !== -1) {
        // If the item with the same id exists, update the count property
        const updatedArray = [...state.cart];
        updatedArray[existingIndex] = {
          ...updatedArray[existingIndex],
          count: updatedArray[existingIndex].count + action.payload.count,
        };
        return {
          ...state,
          cart: updatedArray,
        };
      } else {
        // If the item with the same id doesn't exist, add it to the array
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case ACTION_TYPES.UPDATE_COUNT:
      const { index, count } = action.payload;
      const updatedItem = {
        ...state.cart[index],
        count: count,
      };
      const updatedArray = [...state.cart];
      updatedArray[index] = updatedItem;

      return {
        ...state,
        cart: updatedArray,
      };

    case ACTION_TYPES.DELETE_ITEM:
      console.log(state.cart);
      const deletedArray = state.cart.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        cart: deletedArray,
      };

    case ACTION_TYPES.ALL_ITEMS_FETCHED:
      // console.log(action);
      return { ...state, itemList: action.payload };

    case ACTION_TYPES.ITEM_FETCHED:
      // console.log(action);
      return { ...state, item: action.payload };

    case ACTION_TYPES.VACANCY_FETCHED:
      // console.log(action);
      return { ...state, vacancyList: action.payload };

    case ACTION_TYPES.CATEGORY_FETCHED:
      // console.log(action);
      return { ...state, categoryList: action.payload };

    case ACTION_TYPES.REGISTER_RESPONSE:
      // console.log(action);
      return { ...state, registerResponse: action.payload };

    case ACTION_TYPES.LOGIN_RESPONSE:
      console.log(action.payload.data.account[0]);
      if (action.payload?.data?.status === "success") {
        return {
          ...state,
          isLogin: true,
          loginResponse: action.payload,
          user: action.payload.data.account[0],
        };
      }
      return { ...state, isLogin: false, loginResponse: action.payload };

    case ACTION_TYPES.LOGOUT:
      // console.log(action);
      return { ...state, isLogin: false, user:[], loginResponse: [] };

    default:
      // console.log(action);
      return state;
  }
};

export default getArticles;
