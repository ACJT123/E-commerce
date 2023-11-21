import Hero from "@/Components/LandingPage/Hero";
import LandingLayout from "@/Layouts/LandingLayout";

export default function Index() {
    return (
        <LandingLayout>
            <div className="ml-auto px-20 ">
                <Hero />
            </div>
        </LandingLayout>
    );
}
