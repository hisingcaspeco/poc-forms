// We want to have type safe routes, with type safe params and query params, so we need to create a type for each route
// We also need to create a type for each route params and query params

import App from "./App.tsx";
import { Booking } from "./views/Booking.tsx";
import { Home } from "./views/Home.tsx";
import { createBrowserRouter } from "react-router-dom";

const routes = {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/booking",
            element: <Booking />,
        },
    ],
};

export const appRoutes = createBrowserRouter([routes]);
