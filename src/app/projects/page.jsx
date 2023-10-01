import AllProject from "../components/all-project";
import Header from "../components/header";
import Subscribe from "../components/subscribe";

export default function Projects() {


    return (
        <div>
            <Header title={"All Project"} />
            <AllProject />
            <Subscribe />
        </div>
    );
}