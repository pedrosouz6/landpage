import Header from "../header/header";
import Wellcome from "../wellcome/index";
import Benefits from "../benefits/index";
import Operation from "../operation/index";
import Choise from "../choise/index";

export default function Index(){
    return(
        <>
            <Header/>
            <Wellcome/>
            <Benefits/>
            <Operation/>
            <Choise/>
        </>
    )
}