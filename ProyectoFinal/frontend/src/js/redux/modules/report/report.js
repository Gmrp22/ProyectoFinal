import { push } from "react-router-redux";
import { initialize as initializeForm } from "redux-form";
import { api } from "api";
import { NotificationManager } from "react-notifications";
import { handleActions } from "redux-actions";
import { array } from "validate-redux-form";

const LOADER = "ADMINMODULE_LOADER";
const DATA = "ADMINMODULET_DATA";
const ITEM = "ADMINMODULE_ITEM";
const PAGE = "ADMINMODULE_PAGE";
const ORDERING = "ADMINMODULE_ORDERING";
const SEARCH = "ADMINMODULE_SEARCH";
const STEP = "ADMINMODULE_STEP";

// -----------------------------------
// Pure Actions
// -----------------------------------
const setLoader = (loader) => ({
    type: LOADER,
    loader,
});

const setData = (data) => ({
    type: DATA,
    data,
});
const setItem = (item) => ({
    type: ITEM,
    item,
});
const setPage = (page) => ({
    type: PAGE,
    page,
});

const setOrdering = (ordering) => ({
    type: ORDERING,
    ordering,
});
const setSearch = (search) => ({
    type: SEARCH,
    search,
});
const setStep = (step) => ({
    type: STEP,
    step,
});

// -----------------------------------
// Actions
// -----------------------------------
const listar = (page = 1) => (dispatch) => {
    dispatch(setLoader(true));
    const params = { page };
    api.get("salereport/reports", params)
        .then((response) => {
            
            dispatch(initializeForm("report", response.Report[0]));

            dispatch(setData({results: response.Product_Sales}));
            dispatch(setPage(page));
       
        })
        .catch(() => {})
        .finally(() => {
            dispatch(setLoader(false));
        });
};









export const actions = {
    listar,
    
};

// -----------------------------------
// Reducers
// -----------------------------------
const reducers = {
    [LOADER]: (state, { loader }) => {
        return {
            ...state,
            loader,
        };
    },
    [DATA]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [ITEM]: (state, { item }) => {
        return {
            ...state,
            item,
        };
    },
    [PAGE]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [ORDERING]: (state, { ordering }) => {
        return {
            ...state,
            ordering,
        };
    },
    [SEARCH]: (state, { search }) => {
        return {
            ...state,
            search,
        };
    },
    [STEP]: (state, { step }) => {
        return {
            ...state,
            step,
        };
    },
};

const initialState = {
    loader: false,
    data: {
        results: [],
        count: 0,
    },
    item: {},
    page: 1,
    ordering: "",
    search: "",
};

export default handleActions(reducers, initialState);
