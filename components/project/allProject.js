import Development from "./develop/development";
import Plan from "./plan/plan";

export default function AllProject() {
    return (
        <section className="container mx-auto flex-row md:flex-row flex-col items-center">
        <Development />
        <hr className="w-full mx-auto my-10 border-gray-300"/> 
        <Plan />
        </section>
    )
};