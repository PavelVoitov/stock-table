import React from 'react';
import {StocksTablePage} from "features/StocksTablePage/StocksTablePage";
import s from "./App.module.scss"

function App() {
  return (
    <div className={s.app}>
      <StocksTablePage />
    </div>
  );
}

export default App;
