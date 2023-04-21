import React from 'react';
import s from "./App.module.scss"
import {Header} from "features/header/Header";
import {RoutesPage} from "common/routes/Routes";
import {Footer} from "common/components/footer/Footer";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <RoutesPage />
      <p>Paginator</p>
      <Footer />
    </div>
  );
}

export default App;
