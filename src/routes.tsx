import React from 'react';
import Home from 'pages/Home';
import InfoPage from 'pages/InfoPage';
import ModelPage from 'pages/ModelPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export interface AppRouterProps {}

const AppRouter: React.FunctionComponent<AppRouterProps> = (props) => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModelPage />}>
          <Route path="*" element={<div>error 404</div>} />
          <Route index element={<Home />} />
          <Route path=":id" element={<InfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default AppRouter;