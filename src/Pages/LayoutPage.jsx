import { Outlet } from "react-router-dom";
import HeaderSection from "../Components/HeaderSection";
import FooterSection from "../Components/FooterSection";

function LayoutPage(){
    return(
        <>
            <HeaderSection/>
            <Outlet/><br/>
            <FooterSection/>
        </>
    )
}
export default LayoutPage