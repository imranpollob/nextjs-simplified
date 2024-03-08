import { RootLayout } from "./layouts/RootLayout";
import { homeRoute } from "./pages/Home";

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        children: [
          { index: true, ...homeRoute },
          { path: "*", element: <h1>404 - Page Not Found</h1> },
        ],
      },
    ],
  },
];
