import Product from "@/Components/ProductsPage/Product";
import Search from "@/Components/ProductsPage/Search";
import LandingLayout from "@/Layouts/LandingLayout";
import { usePage } from "@inertiajs/react";
import { Pagination } from "antd";
import {
    UpCircleOutlined,
    SortAscendingOutlined,
    FilterFilled,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import "../../../css/products.scss";
import { Popover } from '@headlessui/react'

export default function Products() {
    const { products } = usePage().props;

    // Assuming you want to display 9 products per page
    const pageSize = 9;

    // Assuming you have a state to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // State to store the filtered products
    const [filteredProducts, setFilteredProducts] = useState([]);

    // State to store the search query
    const [searchQuery, setSearchQuery] = useState("");

    // State to track whether the page has been scrolled
    const [pageScrolled, setPageScrolled] = useState(false);

    // Calculate the range of products to display based on the current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Function to handle search
    const handleSearch = (query) => {
        setSearchQuery(query);

        // Perform filtering based on the search query
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredProducts(filtered);
        setCurrentPage(1); // Reset to the first page when performing a new search
    };

    // Determine which set of products to display (filtered or all)
    const productsToDisplay =
        searchQuery.length > 0 ? filteredProducts : products;

    // Slice the products array to get the products for the current page
    const productsForCurrentPage = productsToDisplay.slice(
        startIndex,
        endIndex
    );

    // Effect to check scroll position and update pageScrolled state
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                document.body.scrollTop || document.documentElement.scrollTop;
            setPageScrolled(scrollTop > 20);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array ensures that the effect runs once after the initial render

    return (
        <LandingLayout>
            <div className="productControls">
                <Search handleSearch={handleSearch} />
                <div className="buttonGroup">
                    <button className="sortBtn text-sm items-center space-x-1">
                        <span>
                            <SortAscendingOutlined />
                        </span>
                        <h1>Sort By</h1>
                    </button>
                    <button className="filterBtn text-sm items-center space-x-1">
                        <span>
                            <FilterFilled />
                        </span>
                        <h1>Filter By</h1>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 my-5">
                {productsForCurrentPage.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <div className="flex justify-center mb-5">
                <Pagination
                    defaultCurrent={1}
                    current={currentPage}
                    pageSize={pageSize}
                    total={productsToDisplay.length}
                    onChange={handlePageChange}
                />
            </div>
            <UpCircleOutlined
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{
                    position: "fixed",
                    padding: "10px",
                    fontSize: "30px",
                    bottom: "20px",
                    right: "20px",
                    textAlign: "center",
                    borderRadius: "5px",
                    display: pageScrolled ? "block" : "none",
                }}
            >
                Scroll to top
            </UpCircleOutlined>
        </LandingLayout>
    );
}
