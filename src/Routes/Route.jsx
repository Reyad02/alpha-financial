import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            }
        ],

    },
]);

export default router;