import React from 'react';
import s from "./App.module.scss"
import {Header} from "features/header/Header";
import {RoutesPage} from "common/routes/Routes";
import {Footer} from "common/components/footer/Footer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "app/store";
import {StockType} from "features/stocksTableBlock/stocksTable-reducer";
import {StatusType} from "app/app-reducer";
import {LinearProgress, Stack} from "@mui/material";

function App() {
	const stocks = useSelector<AppRootStateType, StockType[]>(state => state.stocksTable.stocks);
	const status = useSelector<AppRootStateType, StatusType>(state => state.app.status)

	return (
		<div className={s.app}>
			{status === "loading" ?
				<Stack sx={{width: '100%', color: 'grey.500'}} spacing={2}>
					<LinearProgress color="success" sx={{height: 5}}/>
				</Stack>
				: <div className={s.emptyLinearProgress}></div>}
			<Header/>
			<RoutesPage stocks={stocks}/>
			<Footer/>
		</div>
	);
}

export default App;
