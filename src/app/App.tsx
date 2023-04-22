import React from 'react';
import s from "./App.module.scss"
import {Header} from "features/header/Header";
import {RoutesPage} from "common/routes/Routes";
import {Footer} from "common/components/footer/Footer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "app/store";
import {StockType} from "features/stocksTableBlock/stocksTable-reducer";
import {StatusType} from "app/app-reducer";

function App() {
  const stocks = useSelector<AppRootStateType, StockType[]>(state => state.stocksTable.stocks);
  const status = useSelector<AppRootStateType, StatusType>(state => state.app.status)

  return (
    <div className={s.app}>
      <Header status={status}/>
      <RoutesPage stocks={stocks}/>
      <Footer />
    </div>
  );
}

export default App;
