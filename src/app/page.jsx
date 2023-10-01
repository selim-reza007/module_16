import Brands from "./components/brands";
import FearutedProject from "./components/featured-project";
import Hero from "./components/hero";
import Statistics from "./components/statistics";
import Subscribe from "./components/subscribe";
import WorkList from "./components/work-list";

export default function Home() {

  return (
    <div>
        <Hero />
        <Brands /> 
        <WorkList />
        <Statistics />
        <FearutedProject />
        <Subscribe />
    </div>
  );
}