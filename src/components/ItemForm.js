import React from "react";

function ItemForm(props) {
  return (
    <form className="NewItem" onSubmit={props.onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={props.newItemName} onChange={(e) => props.setNewItemName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={props.newItemCat} onChange={(e) => props.setNewItemCat(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
