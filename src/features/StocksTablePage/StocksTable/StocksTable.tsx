import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchStocks, setPage } from '../actions/stocksActions';

const StocksTable = () => {
	const dispatch = useDispatch();
	// const stocks = useSelector(state => state.stocks.stocks);
	// const page = useSelector(state => state.stocks.page);
	const pageSize = 10;

	// useEffect(() => {
	// 	dispatch(fetchStocks(page, pageSize));
	// }, [dispatch, page]);
	//
	// const handlePrevPage = () => {
	// 	dispatch(setPage(page - 1));
	// };
	//
	// const handleNextPage = () => {
	// 	dispatch(setPage(page + 1));
	// };

	return (
		<div>
			<table>
				<thead>
				<tr>
					<th>Symbol</th>
					<th>Company Name</th>
					<th>Latest Price</th>
				</tr>
				</thead>
				<tbody>
				{stocks.map(stock => (
					<tr key={stock.symbol}>
						<td>{stock.symbol}</td>
						<td>{stock.companyName}</td>
						<td>{stock.latestPrice}</td>
					</tr>
				))}
				</tbody>
			</table>
			<div>
				<button onClick={handlePrevPage} disabled={page === 0}>
					Prev
				</button>
				<button onClick={handleNextPage}>Next</button>
			</div>
		</div>
	);
};

export default StocksTable;
