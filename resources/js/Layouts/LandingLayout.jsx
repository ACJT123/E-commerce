// import "../../css/landing.scss";
import Navbar from "@/Components/Navbar";
import { useEffect } from "react";

export default function LandingLayout({ children }) {
    // useEffect(() => {
    //     document.body.style.backgroundColor = "#FFFFFF";
    // }, []);

    return (
        <div>
            <Navbar />
            <div style={{
                width: "1100px",
                margin: "auto"
            }}>
            {children}
            </div>

        </div>
    );
}
