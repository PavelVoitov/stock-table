import {
	initialStateType,
	ListType,
	setCurrentPage, setMarketsStocksListAC,
	stocksTableReducer, StockType
} from "features/stocksTableBlock/stocksTable-reducer";


let startState: initialStateType


beforeEach(() => {
	startState = {
		stocks: [],
		itemsPerPage: 10,
		currentPage: 1,
		totalPages: 1,
		listType: "mostactive"
	}
})

test('current page should be changed', () => {
	const currentPage: number = 5

	const action = setCurrentPage(currentPage)

	const endState = stocksTableReducer(startState, action)

	expect(endState.currentPage).toEqual(currentPage)
})
test('list type should be changed', () => {
	const totalPage = startState.stocks.length / startState.itemsPerPage
	const listType: ListType = "gainers"

	const action = setMarketsStocksListAC(startState.stocks, totalPage, listType)

	const endState = stocksTableReducer(startState, action)

	expect(endState.listType).toEqual(listType)
})
test('total pages should be changed', () => {
	const totalPages: number = 10

	const action = setMarketsStocksListAC(startState.stocks, totalPages, "losers")

	const endState = stocksTableReducer(startState, action)

	expect(endState.totalPages).toEqual(totalPages)
})
test('stocks should be changed', () => {
	const stocks: StockType[] = [
		{symbol: 'USD', companyName: "USA", latestPrice: 2.8, change: 0.1, changePercent: 0.01}
	]

	const action = setMarketsStocksListAC(stocks, 1, "losers")

	const endState = stocksTableReducer(startState, action)

	expect(endState.stocks[0].symbol).toEqual(stocks[0].symbol)
	expect(endState.stocks.length).toEqual(stocks.length)
	expect(endState.stocks).toEqual(stocks)
})