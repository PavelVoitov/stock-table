import {Navigate, Route, Routes} from "react-router-dom";
import {PATHS} from "common/routes/PATHS";
import {Error404} from "common/components/error404/Error404";
import {StockType} from "features/stocksTableBlock/stocksTable-reducer";
import {StockTableBlock} from "features/stocksTableBlock/StockTableBlock";

type Props = {
	stocks: StockType[]
}

export const RoutesPage = ({stocks}: Props) => {
	return (
		<Routes>
			<Route path={"/"} element={<StockTableBlock stocks={stocks} listType={"mostactive"}/>}/>
			<Route path="/mostActive" element={<StockTableBlock stocks={stocks} listType={"mostactive"}/>}/>
			<Route path="/gainers" element={<StockTableBlock stocks={stocks} listType={"gainers"}/>}/>
			<Route path="/losers" element={<StockTableBlock stocks={stocks} listType={"losers"}/>}/>
			<Route path={PATHS.unknown} element={<Navigate to={PATHS.notFound}/>}/>
			<Route path={PATHS.notFound} element={<Error404/>}/>
		</Routes>
	)
}