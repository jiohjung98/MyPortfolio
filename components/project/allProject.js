import Development from "./develop/development";
import Plan from "./plan/plan";

export default function AllProject() {
    return (
        <section className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <Development />
        <Plan />
        </section>
    )
};