import { useState, useEffect } from 'react';
import axios from 'axios';

function Supplier() {
    const [name, setName] = useState("productname")
    const [price, setPrice] = useState(0.0)
    const [stock, setStock] = useState(0.0)

    const onSubmit = (event) => {
        event.preventDefault();
        axios.post('api/v1/products', {
            name,
            price,
            stock
        })
    }


    return (
        <form onSubmit={onSubmit}>

            <div >
                <h3> Supplier Settings For (Coke, Water, Soda)</h3>

                <label htmlFor="name">Product Name: </label>
                <input
                    id="name"
                    onChange={(event) => setName(event.target.value)}
                />
                <div >
                    <label htmlFor="price">New Price</label>
                    <input
                        id="price"
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </div>


                <div >

                    <label htmlFor="stock">New Stock Count</label>
                    <input
                        id="stock"
                        onChange={(event) => setStock(event.target.value)}
                    />

                </div>
                <button disabled={!name || !stock || !price} >Update</button>
            </div>
        </form>

    )
}

export default Supplier


