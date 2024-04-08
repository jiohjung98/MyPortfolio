import CoolPeace from "./develop-project-info/Coolpeace/coolPeace";
import Shimpyo from "./develop-project-info/Shimpyo/shimpyo";

export default function Development() {
    return (
        <section className="container mx-auto px-5 py-5 md:flex-row flex-col items-center">
            <CoolPeace />
            <Shimpyo />
        </section>
    )
};