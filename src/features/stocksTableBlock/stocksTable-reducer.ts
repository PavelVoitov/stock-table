import {StocksTableApi} from "api/stocksTable-api";
import {AppRootStateType} from "app/store";
import {setAppStatusAC} from "app/app-reducer";
import {handleServerNetworkError} from "util/error-util";
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";


export const initialState: initialStateType = {
	stocks: [],
	itemsPerPage: 10,
	currentPage: 1,
	totalPages: 1,
	listType: "mostactive"
}

export const stocksTableReducer = (state = initialState, action: StocksTableActionsType): initialStateType => {
	switch (action.type) {
		case "STOCKS-TABLE/SET_MARKETS_STOCKS_LIST":
			return {
				...state,
				stocks: action.stocks,
				totalPages: action.totalPages,
				listType: action.listType,
				currentPage: 1
			}
		case "STOCKS-TABLE/SET_CURRENT_PAGE":
			return {
				...state,
				currentPage: action.currentPage
			}
		case "STOCKS-TABLE/CHANGE_STOCKS_LIST":
			return  {
				...state,
				stocks: action.stocks
			}
		default:
			return state
	}
}

//actions
export const setMarketsStocksListAC = (stocks: StockType[], totalPages: number, listType: ListType) => ({
	type: "STOCKS-TABLE/SET_MARKETS_STOCKS_LIST",
	stocks,
	totalPages,
	listType
} as const)
export const setCurrentPage = (currentPage: number) => ({
	type: "STOCKS-TABLE/SET_CURRENT_PAGE",
	currentPage
} as const)

export const changeStocksListAC = (stocks: StockType[]) => ({
	type: "STOCKS-TABLE/CHANGE_STOCKS_LIST",
	stocks
} as const)

//thunks
export const setMarketsStocksList = (listType: ListType): ThunkAction<void, AppRootStateType, unknown, AnyAction> => async dispatch => {
	dispatch(setAppStatusAC('loading'))
	try {
		const res = await StocksTableApi.getMarketList(listType)
		const stocksArr = res.data.map(({symbol, companyName, latestPrice, change, changePercent}) => ({
			symbol,
			companyName,
			latestPrice,
			change,
			changePercent
		}))
		const totalPages = Math.ceil(res.data.length / initialState.itemsPerPage)
		dispatch(setMarketsStocksListAC(stocksArr, totalPages, listType))
		dispatch(setAppStatusAC('succeeded'))
	} catch (error) {
		handleServerNetworkError(error, dispatch)
	}
}

//types
export type ListType = "mostactive" | "gainers" | "losers"
export type StockType = {
	symbol: string
	companyName: string
	latestPrice: number
	change: number
	changePercent: number
}
export type initialStateType = {
	stocks: StockType[] | []
	currentPage: number
	itemsPerPage: number
	totalPages: number
	listType: ListType

}
export type StocksTableActionsType =
	| ReturnType<typeof setMarketsStocksListAC>
	| ReturnType<typeof setCurrentPage>
	| ReturnType<typeof changeStocksListAC>