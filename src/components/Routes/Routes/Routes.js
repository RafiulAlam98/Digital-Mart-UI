import { createBrowserRouter } from "react-router-dom";
import DashboardMain from "../../../Layout/DashboardMain";
import Main from "../../../Layout/Main";
import About from "../../About/About";
import ConditionTerms from "../../ConditionTerms/ConditionTerms";
import ContactUs from "../../ContactUs/ContactUs";
import AllUser from "../../Dashboard/AllUser/AllUser";
import UserReview from "../../Dashboard/UserReview/UserReview";
import AddProduct from "../../Dashboard/Vendor/AddProduct/AddProduct";
import AddVendor from "../../Dashboard/Vendor/AddVendor/AddVendor";
import Faq from "../../Faq/Faq";
import Homepage from "../../Home/Homepage/Homepage";

import Inventory from "../../Inventory/Inventory/Inventory";
import Login from "../../Login/Login";
import Orders from "../../Orders/Orders";
import Payment from "../../Payment/Payment";
import Privacy from "../../Privacy/Privacy";
import ReturnPolicy from "../../ReturnPolicy/ReturnPolicy";
import ShowError from "../../Shared/ShowError/ShowError";
import Shipment from "../../Shipment/Shipment";
import SignUp from "../../SignUp/SignUp";
import Support from "../../Support/Support";
import Ticket from "../../Ticket/Ticket";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import VendorRoute from "../VendorRoute/VendorRoute";
import ComingSoon from "../../ComingSoon/ComingSoon";
import ProductDetails from "../../Product/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ShowError />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/inventory/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/terms",
        element: <ConditionTerms />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/return",
        element: <ReturnPolicy />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/ticket",
        element: <Ticket />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/shipping",
        element: (
          <PrivateRoute>
            <Shipment />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardMain />
      </PrivateRoute>
    ),
    errorElement: <ShowError />,
    children: [
      {
        path: "/dashboard",
        element: <UserReview />,
      },

      {
        path: "/dashboard/user",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addvendor",
        element: (
          <AdminRoute>
            <AddVendor />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <VendorRoute>
            <AddProduct />
          </VendorRoute>
        ),
      },
    ],
  },
]);

export default router;
