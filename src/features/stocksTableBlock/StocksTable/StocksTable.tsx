import React, {useEffect} from 'react';
import {
	ListType,
	setMarketsStocksList,
	StockType
} from "features/stocksTableBlock/stocksTable-reducer";
import {AppDispatch} from "app/store";
import s from "./StockTable.module.scss"


type Props = {
	listType: ListType
	stocks: StockType[]
	startIndex: number,
	endIndex: number
}

const StocksTable = ({listType, stocks, startIndex, endIndex}: Props) => {
	const dispatch = AppDispatch();

	useEffect(() => {
		dispatch(setMarketsStocksList(listType));
	}, [listType]);

	return (
		<div>
			<table  className={s.table}>
				<thead>
				<tr>
					<th>Symbol</th>
					<th>Company Name</th>
					<th>Latest Price</th>
					<th>Change Price</th>
					<th>Change Percent</th>
				</tr>
				</thead>
				<tbody>
				{stocks.slice(startIndex, endIndex).map(stock => (
					<tr key={stock.symbol}>
						<td>{stock.symbol}</td>
						<td>{stock.companyName}</td>
						<td>{stock.latestPrice}</td>
						<td>{stock.change}</td>
						<td>{stock.changePercent}</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
};

export default StocksTable;
