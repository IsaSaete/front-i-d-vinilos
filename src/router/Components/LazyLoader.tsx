import { lazy } from "react";

export const LazyVinylsPage = lazy(
  () => import("../../vinyl/pages/VinylsPage/VinylsPage"),
);

export const LazyNotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
