import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contacts from './contacts'
import filter from './filter';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


const reducer = combineReducers({
    contacts,
    filter,
})
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter'],
}
const persistReduser = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistReduser,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);