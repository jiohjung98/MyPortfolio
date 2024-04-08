import Consolve from "./plan-project-info/Consolve/consolve";
import Indi from "./plan-project-info/IndiConnects/indi";

export default function Plan() {
    return (
        <section className="container mx-auto flex-row px-5 py-5 md:flex-row flex-col items-center">
            <Indi />
            <Consolve />
        </section>
    )
};