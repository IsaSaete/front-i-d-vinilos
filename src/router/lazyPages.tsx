import { lazy } from "react";

export const LazyVinylsPage = lazy(
  () => import("../vinyl/pages/VinylsPage/VinylsPage"),
);

export const LazyNotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export const LazyAddVinylPage = lazy(
  () => import("../vinyl/pages/AddVinylPage/AddVinylPage"),
);

export const LazyDetailVinylPage = lazy(
  () => import("../vinyl/pages/VinylDetailPage/VinylDetailPage"),
);

export const LazyModifyVinylPage = lazy(
  () => import("../vinyl/pages/ModifyVinylPage/ModifyVinylPage"),
);
