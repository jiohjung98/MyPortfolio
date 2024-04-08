import CoolPeace from "./develop-project-info/Coolpeace/coolPeace";
import PawPaw from "./develop-project-info/PawPaw/pawpaw";
import Shimpyo from "./develop-project-info/Shimpyo/shimpyo";
import Talk from "./develop-project-info/Talk/talk";

export default function Development() {
    return (
        <section className="container mx-auto px-5 py-5 md:flex-row flex-col items-center">
            <CoolPeace />
            <hr className="w-full mx-auto my-10 border-gray-300"/> 
            <Shimpyo />
            <hr className="w-full mx-auto my-10 border-gray-300"/>  
            <Talk />
            <hr className="w-full mx-auto my-10 border-gray-300"/> 
            <PawPaw />
        </section>
    )
};