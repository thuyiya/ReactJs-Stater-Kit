import DashboardPage from "../views/DashboardPage";
import UserProfile from "../views/UserProfile";
import PageNotFound from "../views/PageNotFound";

import {
  Dashboard,
  NextWeek,
  Error
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: NextWeek,
    component: UserProfile
  },
  {
    path: "/notfound",
    sidebarName: "Page Not Found",
    navbarName: "Page Not Found",
    icon: Error,
    component: PageNotFound
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
