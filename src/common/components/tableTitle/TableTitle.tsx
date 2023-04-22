import {ListType} from "features/stocksTableBlock/stocksTable-reducer";
import {memo} from "react";


type Props = {
	listType: ListType
}

export const TableTitle = memo(({listType}: Props) => {
	enum Titles {
		mostActiveTitle = "Most Active",
		gainers = "Gainers",
		losers = "Losers"
	}

	return (
		<div>
			<h1>Quotes for the top 50 symbols in the {listType === "mostactive"
				? Titles.mostActiveTitle
				: listType === "gainers"
					? Titles.gainers
					: Titles.losers} list.
			</h1>
		</div>
	)
})