import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const url = "https://fortnite-api.theapinetwork.com/upcoming/get"
    const token = process.env.REACT_APP_API_TOKEN;
    const data = await fetch(url, {
      headers: {Authorization: token}
    });
    const items = await data.json();
    setItems(items.data);
  }

  return (
    <div>
      {items.map(itemObj => (
          <h1 key={itemObj.itemId}>
            <Link to={`/shop/${itemObj.itemId}`}>{itemObj.item.name}</Link>
          </h1>
      ))}
    </div>
  );
}

export default Shop;