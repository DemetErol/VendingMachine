import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function Product({ product, money, setMoney }) {


    const add = () => {
        if (product.stock > 0 & product.price <= money) {
            product.stock = product.stock - 1;
            setMoney(money - product.price)
            toast("Product is giving...");

        }
        else {

            toast("You should add money");

        }

    }

    return (
        <>

            <div className="box">
                <h2 className="label">{product.name}</h2>
                <img className="img" src={product.image_url}></img>
                <div className="price">{product.price}TL</div>
                <div className="actions">
                    <span className="stock"> stock: {product.stock}</span>
                    <div>
                        <button className="btn" onClick={add}>+</button>
                        <ToastContainer />
                    </div>

                </div>
            </div>
        </>

    )
}

export default Product