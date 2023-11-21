import "../../../css/hero.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function Hero() {
    return (
        <div className="flex py-5">
            <div className="mt-auto mr-20">
                <h1>
                    <b>Modern Minimal House</b>
                </h1>
                <h1 className="title-heads">Furniture</h1>
                <p className="w-60 text-justify">
                    Beatifully designed with multiple color combination of white
                    black and wodden with harsh lines and smooth curves.
                </p>
                <div className="flex space-x-8 my-3 items-center">
                    <h1 className="text-xl font-extrabold">$238</h1>
                    <h1 className="total-payable">total payable</h1>
                </div>
                <button className="add-to-cart-btn shadow-xl flex rounded-lg items-center space-x-3">
                    <b> Add to cart</b>

                    <ShoppingCartOutlined className="shopping-cart-icon rounded-xl" />
                </button>
            </div>
            <div className="product-bg">
                {/* <img
                    className="ml-auto mr-auto"
                    src="https://www.joyd.my/image/cache/catalog/product%20images/Additional%20Images/FF/HERMANN%203%20SEATER%20SOFA%20BEIGE%201-1140x475.png"
                /> */}
            </div>
        </div>
    );
}
