import { createSlice } from "@reduxjs/toolkit";

const basketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
};

const initialState = {
    products: basketFromStorage(),
    drawer: false,
    totalAmount: 0,
};

const basketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct =
                state.products &&
                state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                //daha once eklenmis
                const extractedProduct = state.products.filter(
                    (product) => product.id != action.payload.id
                );
                findProduct.count += action.payload.count;

                state.products = [...extractedProduct, findProduct];
                basketToStorage(state.products);
            } else {
                state.products = [...state.products, action.payload];
                basketToStorage(state.products);
            }
        },

        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },
        calculateAmount: (state) => {
            state.totalAmount = 0
            state.products &&
                state.products.map((product) => {
                    state.totalAmount += product.price * product.count;
                });
        },
    },
});

export const { addToBasket, setDrawer, calculateAmount } = basketSlice.actions;
export default basketSlice.reducer;