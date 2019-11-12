import React from "react";
import { BrowserRouter} from "react-router-dom";
import { renderRoutes } from 'react-router-config';

import routes from './routes';

export default ()=> {
  return(
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  )
}