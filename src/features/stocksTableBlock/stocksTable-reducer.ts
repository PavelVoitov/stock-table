import {StocksTableApi} from "api/stocksTable-api";
import {AppThunk} from "app/store";


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
				listType: action.listType
			}
		case "STOCKS-TABLE/SET_CURRENT_PAGE":
			return {
				...state,
				currentPage: action.currentPage
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

//thunks
export const setMarketsStocksList = (listType: ListType): AppThunk => async dispatch => {
	try {
		const res = await StocksTableApi.getMarketList(listType)
		const stocksArr = res.data.map(({symbol, companyName, latestPrice, change, changePercent}) => ({symbol, companyName, latestPrice, change, changePercent}))
		const totalPages = Math.ceil(res.data.length / initialState.itemsPerPage)
		dispatch(setMarketsStocksListAC(stocksArr, totalPages, listType))
	} catch (e) {
		console.log('error')
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