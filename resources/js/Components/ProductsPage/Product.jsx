import "../../../css/product.scss";
import { Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";


export default function Product({ product }) {
    const { name, category, price, image_link } = product;
    return (
        <div className="product shadow-xl">
            <img src={image_link} />

            <div>
                <h1 className="text-base"> {name}</h1>
                <div>
                    <b className="text-xl mt-auto">${price}</b>
                    <ShoppingCartOutlined className="cartIcon" />
                </div>
            </div>
        </div>
    );
}
