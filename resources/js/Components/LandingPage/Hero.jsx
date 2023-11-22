import "../../../css/hero.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function Hero({ product }) {
    const { name, category, price, description, image_link } = product;

    return (
        <div className="flex">
            <div>
                <h1>
                    <b>{category}</b>
                </h1>
                <h1 className="title-heads">{name}</h1>
                <p className="w-60 text-justify">{description}</p>
                <div className="flex space-x-8 my-3 items-center">
                    <h1 className="text-xl font-extrabold">${price}</h1>
                    <h1 className="total-payable">total payable</h1>
                </div>
                <button className="add-to-cart-btn shadow-xl flex rounded-lg items-center space-x-3">
                    <b> Add to cart</b>

                    <ShoppingCartOutlined className="shopping-cart-icon rounded-xl" />
                </button>
            </div>
            <div className="product-bg">
                <img
                    src={image_link}
                    alt="HERMANN-3-SEATER-SOFA-BEIGE-1-1140x475"
                    border="0"
                />
            </div>
        </div>
    );
}
