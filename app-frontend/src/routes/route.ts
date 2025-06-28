import React, { lazy, Suspense } from "react";
import NotFound from "../pages/NotFound";
import Homelayout from "../Layout/Home/Homelayout";
import PricingLayout from "../Layout/Pricing/PricingLayout";
import AboutLayout from "../Layout/About/AboutLayout";
import TutorLayout from "../Layout/Tutor/TutorLayout";
import { createBrowserRouter } from "react-router-dom";

const Tutor = lazy(() => import("../Layout/Tutor/TutorLayout"))

const withSuspense = (element: React.ReactNode) => (
    <Suspense fallback={<div>Loading...</div>}>
      {element}
    </Suspense>
);

export const router = createBrowserRouter([
  { path: '/', element: withSuspense(<Home />) },
  { path: '/about', element: withSuspense(<About />) },
  { path: '/pricing', element: withSuspense(<Pricing />) },
  { path: '/tutor', element: (<Tutor />) },
  { path: '/login', element: withSuspense(<Login />) },
  { path: '/register', element: withSuspense(<Register />) },
  { path: '*', element: withSuspense(<NotFound />) },
]);