import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [newItemName, setNewItemName ] = useState("")
  const [newItemCat, setNewItemCat ] = useState("Produce")
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  //const [arrayOfItems, setArrayOfItems] = useState(items)

  function onSearchChange(e) {
    setSearch(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function onItemFormSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: newItemName,
      category: newItemCat,
    };
    setItems((prevArray => [...prevArray, newItem]))
  }

  

  return (
    <div className="ShoppingList">

      <ItemForm 
      newItemName={newItemName} 
      newItemCat={newItemCat} 
      onItemFormSubmit={onItemFormSubmit} 
      setNewItemName={setNewItemName}
      setNewItemCat={setNewItemCat}/>

      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => {
          return item.name.includes(search) && <Item key={item.id} name={item.name} category={item.category} />
        }
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
