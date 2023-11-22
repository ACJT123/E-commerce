import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import "../../css/navbar.scss";

export default function Navbar() {
    const currentPath = window.location.pathname;

    const links = [
        {
            name: "Home",
            url: "/product",
        },
        {
            name: "Products",
            url: "/products",
        },
        {
            name: "Manufacturing",
            url: "/manufacturing",
        },
        {
            name: "Packaging",
            url: "/packaging",
        },
    ];

    return (
        <div className="py-5 flex px-20 font-black justify-between mb-5">
            <div className="text-2xl">unmeuable</div>
            <ul className="flex space-x-14 items-center h-[100%]">
                {links.map((link) => (
                    <li
                        onClick={(ev) => {
                            ev.preventDefault();
                            window.location.href = link.url;
                        }}
                        className={`nav-item ${
                            link.url === currentPath ? "active" : ""
                        }`}
                        key={link.name}
                    >
                        {link.name}
                    </li>
                ))}
            </ul>
            <div className="space-x-5 ">
                <ShoppingCartOutlined style={{ fontSize: "24px" }} />
                <UserOutlined style={{ fontSize: "24px" }} />
            </div>
        </div>
    );
}
