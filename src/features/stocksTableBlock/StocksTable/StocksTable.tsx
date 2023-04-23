import React, {memo, useEffect} from 'react';
import {
	changeStocksListAC,
	ListType,
	setMarketsStocksList,
	StockType
} from "features/stocksTableBlock/stocksTable-reducer";
import {AppDispatch} from "app/store";
import s from "features/stocksTableBlock/StocksTable/StocksTable.module.scss"
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';


type Props = {
	listType: ListType
	stocks: StockType[]
	startIndex: number,
	endIndex: number
}

export const StocksTable = memo(({listType, stocks, startIndex, endIndex}: Props) => {
	const dispatch = AppDispatch();

	useEffect(() => {
		dispatch(setMarketsStocksList(listType));
	}, [listType]);

	function handleOnDragEnd(result: any) {
		if (!result.destination) return;

		const items = Array.from(stocks);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		dispatch(changeStocksListAC(items));
	}

	return (
		<div className={s.tableWrapper}>
			<table className={s.table}>
				<thead>
				<tr>
					<th>Index</th>
					<th>Symbol</th>
					<th>Company Name</th>
					<th>Latest Price</th>
					<th>Change Price</th>
					<th>Change Percent</th>
				</tr>
				</thead>
				<DragDropContext onDragEnd={handleOnDragEnd}>
					<Droppable droppableId={`${listType} ${startIndex}`}>
						{(provided) => (
							<tbody {...provided.droppableProps} ref={provided.innerRef}>
							{stocks.slice(startIndex, endIndex).map((symbol) => {
								return (
									<Draggable key={symbol.symbol} draggableId={symbol.symbol} index={stocks.indexOf(symbol)}>
										{(provided) => (
											<tr
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
											>
												<td>{stocks.indexOf(symbol) + 1}</td>
												<td>{symbol.symbol}</td>
												<td>{symbol.companyName}</td>
												<td>{symbol.latestPrice}</td>
												<td>{symbol.change}</td>
												<td>{symbol.changePercent}</td>
											</tr>
										)}
									</Draggable>
								)
							})}
							{provided.placeholder}
							</tbody>
						)}
					</Droppable>
				</DragDropContext>
			</table>
		</div>
	);
})

