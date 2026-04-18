import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "../Pages/LayoutPage";
import UsersPage from "../Pages/UserPage";
import AboutPage from "../Pages/AboutPage";
function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutPage/>}>
<Route element={<UsersPage/>} index/>
<Route element={<AboutPage/>}  path="/About" />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router