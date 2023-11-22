import { SearchOutlined } from "@ant-design/icons";
import "../../../css/search.scss";
import { useState } from "react";

export default function Search({ handleSearch }) {
    const [query, setQuery] = useState("");

    return (
        <div className="searchBar">
            <div>
                <input
                    type="text"
                    onChange={(ev) => setQuery(ev.target.value)}
                    placeholder="Search products here"
                />
                <SearchOutlined
                    onClick={(ev) => {
                        ev.preventDefault();
                        handleSearch(query);
                    }}
                />
            </div>
        </div>
    );
}
