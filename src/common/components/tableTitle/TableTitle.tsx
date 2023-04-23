import {ListType} from "features/stocksTableBlock/stocksTable-reducer";
import {memo} from "react";


type Props = {
	listType: ListType
	stocksQuantity: number
}

export const TableTitle = memo(({listType, stocksQuantity}: Props) => {
	enum Titles {
		mostActiveTitle = "Most Active",
		gainers = "Gainers",
		losers = "Losers"
	}

	return (
		<div style={{textAlign: "center"}}>
			<h1>Quotes for the top {stocksQuantity} symbols in the {listType === "mostactive"
				? Titles.mostActiveTitle
				: listType === "gainers"
					? Titles.gainers
					: Titles.losers} list.
			</h1>
		</div>
	)
})