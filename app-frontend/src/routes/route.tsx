import { lazy, ReactNode } from "react";

import HomeLayout from "../Layout/Home/Homelayout";
import PricingLayout from "../Layout/Pricing/PricingLayout";
import AboutLayout from "../Layout/About/AboutLayout";
const TutorLayout = lazy(() => import("../Layout/Tutor/TutorLayout"));
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

interface RouteConfig {
  path: string;
  element: React.ReactElement;
  lazy?: boolean;
}

export const routes: RouteConfig[] = [
  { path: "/", element: <HomeLayout /> },
  { path: "/pricing", element: <PricingLayout /> },
  { path: "/about", element: <AboutLayout /> },
  { path: "/tutor", element: <TutorLayout />, lazy: true },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
];