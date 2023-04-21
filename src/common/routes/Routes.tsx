import {Navigate, Route, Routes} from "react-router-dom";
import {PATHS} from "common/routes/PATHS";
import StocksTable from "features/stocksTable/StocksTable";

export type ListType = "mostactive" | "gainers" | "losers"

export const RoutesPage = () => {
	return (
		<Routes>
			<Route path={"/"} element={<StocksTable listType={"mostactive"}/>} />
			<Route path="/mostActive" element={<StocksTable listType={"mostactive"}/>} />
			<Route path="/gainers" element={<StocksTable listType={"gainers"}/>} />
			<Route path="/losers" element={<StocksTable listType={"losers"}/>} />
			<Route path={PATHS.unknown} element={<Navigate to={PATHS.notFound} />} />
		</Routes>
	)
}