import {RouteProps} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {MoviePage} from "../pages/MoviePage";

export enum AppRoutes {
   MAIN = 'main',
   MOVIES = 'movies',
}

export const RoutePath: Record<AppRoutes, string> = {
   [AppRoutes.MAIN]: '/',
   [AppRoutes.MOVIES]: '/movies',
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
   [AppRoutes.MAIN]: {
      path: RoutePath.main,
      element: <MainPage/>
   },
   [AppRoutes.MOVIES]: {
      path: RoutePath.movies,
      element: <MoviePage/>
   }
};
