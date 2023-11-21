import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import "../../css/navbar.scss";

export default function Navbar() {
    const links = [
        {
            name: "Home",
            url: "something",
        },
        {
            name: "Products",
            url: "something",
        },
        {
            name: "Manufacturing",
            url: "something",
        },
        {
            name: "Packaging",
            url: "something",
        },
    ];

    return (
        <div className="py-5 flex px-20 font-black justify-between">
            <div className="text-2xl">unmeuable</div>
            <ul className="flex space-x-14 items-center h-[100%]">
                {links.map((link) => (
                    <li className="nav-item" key={link.name}>
                        {link.name}
                    </li>
                ))}
            </ul>
            <div className="space-x-5 ">
                <ShoppingCartOutlined style={{ fontSize: '24px'}} />
                <UserOutlined style={{ fontSize: '24px' }} />
            </div>
        </div>
    );
}
