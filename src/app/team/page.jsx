import Header from "../components/header";
import Subscribe from "../components/subscribe";
import TeamMember from "../components/team-members";

export default function Team() {

    return (
        <div>
            <Header title={"Team"} />
            <TeamMember />
            <Subscribe />
        </div>
    );
}