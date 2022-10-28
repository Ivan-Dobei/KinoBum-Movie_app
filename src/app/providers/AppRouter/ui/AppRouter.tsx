import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "../../../../shared/lib/routerConfig/routerConfig";

const AppRouter = () => {
   return (
      <Routes>
         {Object.values(routerConfig).map(route =>
            <Route
               key={route.path}
               path={route.path}
               element={route.element}
            />
         )}
      </Routes>
   );
};

export default AppRouter;
