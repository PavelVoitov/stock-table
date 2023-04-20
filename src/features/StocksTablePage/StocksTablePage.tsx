import StocksTable from "features/StocksTablePage/StocksTable/StocksTable"


export const StocksTablePage = () => {
	return (
		<div>
			<nav>Most Active - Gainers - Losers</nav>
			<StocksTable/>
			<p>Paginator</p>
			<footer>2023</footer>
		</div>
	)
}