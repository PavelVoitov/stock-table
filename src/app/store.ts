import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {applyMiddleware} from "redux"
import {legacy_createStore, combineReducers} from "redux"
import {StocksTableActionsType, stocksTableReducer} from "features/stocksTableBlock/stocksTable-reducer";
import {useDispatch} from "react-redux";
import {appReducer} from "app/app-reducer";


const rootReducers = combineReducers({
	app: appReducer,
	stocksTable: stocksTableReducer
})

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, ActionsRootTypes>
export const AppDispatch = () => useDispatch<AppDispatchType>()

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducers>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppRootStateType,
	unknown,
	ActionsRootTypes
	>
type ActionsRootTypes = StocksTableActionsType