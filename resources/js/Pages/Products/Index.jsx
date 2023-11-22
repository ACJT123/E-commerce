import Hero from "@/Components/LandingPage/Hero";
import LandingLayout from "@/Layouts/LandingLayout";
import { usePage } from "@inertiajs/react";

export default function Index() {
    const { products } = usePage().props;

    let topSales = products[0];

    products.map((product) => {
        console.log(
            `product: ${product.name} ${product.price} ${product.category}`
        );
    });

    return (
        <LandingLayout>
            <Hero product={topSales} />
        </LandingLayout>
    );
}
