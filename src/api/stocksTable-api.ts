import axios from 'axios'

const instance = axios.create({
	baseURL: "https://cloud.iexapis.com/stable/stock/market/list/",
	params: {
		token: process.env.REACT_APP_IEXCLOUD_TOKEN,
	}
})

// api
export const StocksTableApi = {
	getMarketList(listType: string, params = {listLimit: 50}) {
		return instance.get<StocksResponseType>(`${listType}`, {params})
	},
}

//types
type StockResponseType = {
	avgTotalVolume: number,
	calculationPrice: string,
	change: number,
	changePercent: number,
	close: null,
	closeSource: string,
	closeTime: null,
	companyName: string,
	currency: string,
	delayedPrice: null,
	delayedPriceTime: null,
	extendedChange: null,
	extendedChangePercent: null,
	extendedPrice: null,
	extendedPriceTime: null,
	high: null,
	highSource: null,
	highTime: null,
	iexAskPrice: number,
	iexAskSize: number,
	iexBidPrice: number,
	iexBidSize: number,
	iexClose: number,
	iexCloseTime: Date,
	iexLastUpdated: number,
	iexMarketPercent: number
	iexOpen: number,
	iexOpenTime: Date,
	iexRealtimePrice: number,
	iexRealtimeSize: number,
	iexVolume: number,
	lastTradeTime: Date,
	latestPrice: number,
	latestSource: string,
	latestTime: string,
	latestUpdate: number,
	latestVolume: null,
	low: null,
	lowSource: null,
	lowTime: null,
	marketCap: number,
	oddLotDelayedPrice: null,
	oddLotDelayedPriceTime: null,
	open: null,
	openTime: null,
	openSource: string,
	peRatio: number,
	previousClose: number,
	previousVolume: number,
	primaryExchange: string,
	symbol: string,
	volume: null,
	week52High: number,
	week52Low: number,
	ytdChange: number,
	isUSMarketOpen: boolean
}
type StocksResponseType = StockResponseType[]