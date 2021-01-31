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

const detalle = (id) => (dispatch) => {
    dispatch(setLoader(true));
    
    api.get(`product/${id}`)
        .then((response) => {

            dispatch(initializeForm("createProduct", response));
        })
        .catch((error) => {
            NotificationManager.error(error.detail, "ERROR", 0);
        })
        .finally(() => {
            dispatch(setLoader(false));
        });
};

const detalleSale = (id) => (dispatch) => {
    dispatch(setLoader(true));
    
    api.get(`sale/${id}`)
        .then((response) => {

            dispatch(initializeForm("saleproduct", response));
        })
        .catch((error) => {
            NotificationManager.error(error.detail, "ERROR", 0);
        })
        .finally(() => {
            dispatch(setLoader(false));
        });
};
const onSubmit = () => (dispatch, getStore) => {
    const dataForm = getStore().form.createProduct.values;
    api.post("product", dataForm)
        .then((response) => {
            NotificationManager.success(
                "Producto registrado correctamente",
                "Éxito",
                1000
            );
            dispatch(push("/seller/myproducts"));
        })
        .catch(() => {
            NotificationManager.error("Error de creacion", "ERROR", 3000);

        });
};

const listar = (page = 1) => (dispatch) => {
    dispatch(setLoader(true));
    const params = { page };
    api.get("ownproducts", params)
        .then((response) => {
            dispatch(setData(response));
            dispatch(setPage(page));
        })
        .catch(() => {})
        .finally(() => {
            dispatch(setLoader(false));
        });
};
const listarsold = (page = 1) => (dispatch) => {
    dispatch(setLoader(true));
    const params = { page };
    api.get("sale", params)
        .then((response) => {
            dispatch(setData(response));
            dispatch(setPage(page));
        })
        .catch(() => {})
        .finally(() => {
            dispatch(setLoader(false));
        });
};
const actualizar = () => (dispatch, getStore) => {
    const { values } = getStore().form.createProduct;

    const dataForm = getStore().form.createProduct.values;
    api.put(`product/${values.id}`, dataForm)
        .then(() => {
            NotificationManager.success(
                "El producto se actualizo correctamente",
                "Éxito",
                1000
            );
            dispatch(push("/seller/myproducts"));
        })
        .catch(() => {
            NotificationManager.error(
                "Hubo error en la actualización",
                "ERROR",
                0
            );
        });
};

const eliminar = (id) => (dispatch, getStore) => {
    api.eliminar(`product/${id}`).then((response) => {

        NotificationManager.success('Producto terminado', 'Éxito', 1000);
        dispatch(listar());
    }).catch((error) => {
        NotificationManager.error(error.detail, 'ERROR', 0);
    }).finally(() => {

    });
}




export const actions = {
    onSubmit,
    actualizar,
    detalle,
    listar,
    listarsold,
    detalleSale,
    eliminar,
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
