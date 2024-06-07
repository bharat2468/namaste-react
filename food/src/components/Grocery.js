import React, { useState } from "react";

const Grocery = () => {
    const [groceryItems, setGroceryItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const handleInputChange = (e) => {
        setNewItem(e.target.value);
    };

    const addItem = () => {
        if (newItem.trim()) {
            setGroceryItems([...groceryItems, newItem.trim()]);
            setNewItem("");
        }
    };

    const removeItem = (index) => {
        const updatedItems = [...groceryItems];
        updatedItems.splice(index, 1);
        setGroceryItems(updatedItems);
    };

    return (
        <div className="p-20 w-screen">
            <h1 className="mb-4">Grocery List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Add a new item..."
                    value={newItem}
                    onChange={handleInputChange}
                    className="mr-4 my-4 input input-bordered w-full max-w-xs"
                />
                <button className=" btn btn-primary" onClick={addItem}>
                    Add
                </button>
            </div>
            <ul>
                {groceryItems.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => removeItem(index)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Grocery;
