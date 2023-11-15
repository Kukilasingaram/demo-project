import MainBar from "./MainBar";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function Workspace(){
    return(
    <div className="flex flex-col w-full border-opacity-50 h-screen">
                <div className="grid h-20 card rounded-box place-items-center m-1">
                    <TopBar/>
                </div>
                <div className="flex flex-nowrap rounded-box place-items-center h-screen">
                    <div className="grid flex-grow h-full w-1/6 m-1">
                        <SideBar/>
                    </div>
                    <div className="grid flex-grow h-full w-5/6 m-1">
                        <MainBar/>
                    </div>
                </div>
                
                </div>
            

    
        
    )
}