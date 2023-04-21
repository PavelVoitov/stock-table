import {StocksTableApi} from "api/stocksTable-api";
import {AppThunk} from "app/store";
import {ListType} from "common/routes/Routes";


export const initialState: initialStateType = [{
	symbol: '',
	companyName: '',
	latestPrice: null
}]

export const stocksTableReducer = (state = initialState, action: StocksTableActionsType) => {
	switch (action.type) {
		case "STOCKS-TABLE/SET_MOST_ACTIVE_MARKETS_STOCKS":
			return [
				...action.stocks,
			]
		default:
			return state
	}
}

//actions
const setMarketsStocksListAC = (stocks: StockType[]) => ({
	type: "STOCKS-TABLE/SET_MOST_ACTIVE_MARKETS_STOCKS",
	stocks
} as const)

//thunks
export const setMarketsStocksList = (listType: ListType): AppThunk => async dispatch => {
	try {
		const res = await StocksTableApi.getMarketList(listType)
		const stocksArr = res.data.map(({symbol, companyName, latestPrice}) => ({symbol, companyName, latestPrice}))
		dispatch(setMarketsStocksListAC(stocksArr))
	} catch (e) {
		console.log('error')
	}
}

//types
export type StockType = { symbol: string, companyName: string, latestPrice: number | null }
export type initialStateType = StockType[]
export type StocksTableActionsType = ReturnType<typeof setMarketsStocksListAC>