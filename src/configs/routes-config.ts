import { PATHS } from "@/constants/routes";
import { lazy, type ComponentType, type LazyExoticComponent } from "react";

export interface IRoute {
  key: string;
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: LazyExoticComponent<ComponentType<any>>;
}

export const authenticationRoutes: IRoute[] = [
  {
    key: "login",
    path: PATHS.LOGIN,
    component: lazy(() => import("../pages/auth/Login")),
  },
  {
    key: "sign-up",
    path: PATHS.SIGNUP,
    component: lazy(() => import("../pages/auth/SignUp")),
  },
];

export const publicRoutes: IRoute[] = [
  ...authenticationRoutes,
  {
    key: "homePage",
    path: PATHS.HOME,
    component: lazy(() => import("../pages/Landing")),
  },
];

export const protectedRoutes: IRoute[] = [];
