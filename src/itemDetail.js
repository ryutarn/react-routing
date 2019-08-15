import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import { async } from 'q';

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    item: {images: {}}
  });

  const fetchItem = async () => {
    const id = match.params.id
    const url = `https://fortnite-api.theapinetwork.com/item/get?id=${id}`;
    const token = process.env.REACT_APP_API_TOKEN;
    const fetchItem = await fetch(url, {
      headers: {Authorization: token}
    });
    const item = await fetchItem.json();
    setItem(item.data)
  };

  return (
    <div>
      <h1>{item.item.name}</h1>
      <img src={item.item.images.background} />
    </div>
  );
}

export default ItemDetail;