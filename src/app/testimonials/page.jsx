import Header from "../components/header";
import Subscribe from "../components/subscribe";
import TestimonialsComponents from "../components/testimonials-com";

export default function Testimonials() {

    return (
        <div>
            <Header title={"Testimonial List"} />
            <TestimonialsComponents />
            <Subscribe />
        </div>
    );
}