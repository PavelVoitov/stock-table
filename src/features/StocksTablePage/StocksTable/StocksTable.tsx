import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';
import {setMostActiveMarketsStocks, StockType} from "features/StocksTablePage/StocksTable/stocksTable-reducer";
import {AppDispatch, AppRootStateType} from "app/store";

const StocksTable = () => {
	const dispatch = AppDispatch();
	const stocks = useSelector<AppRootStateType, StockType[]>(state => state.stocks);
	// const page = useSelector(state => state.stocks.page);
	// const pageSize = 10;

	useEffect(() => {
		dispatch(setMostActiveMarketsStocks());
	}, [dispatch, stocks]);

	const handlePrevPage = () => {
		// dispatch(setPage(page - 1));
	};

	const handleNextPage = () => {
		// dispatch(setPage(page + 1));
	};

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
				<button onClick={handlePrevPage}
								// disabled={page === 0}
				>
					Prev
				</button>
				<button onClick={handleNextPage}>Next</button>
			</div>
		</div>
	);
};

export default StocksTable;
