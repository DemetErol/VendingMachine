import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function Insert({ setMoney, money }) {
    const refund = () => {
        setMoney(0.0)
        toast("Money is being refunded");
    
    }

    return (
        <div className="box">
            <h1 className="money">You have {money} TL. Add Money...</h1>


            <button className="buttons" onClick={() => setMoney(money + 1)}>1</button>
            <button className="buttons" onClick={() => setMoney(money + 5)}>5</button>
            <button className="buttons" onClick={() => setMoney(money + 10)}>10</button>
            <button className="buttons" onClick={() => setMoney(money + 20)}>20</button>

            <button className="btn" disabled={!money} onClick={refund}>Refund</button>
            <ToastContainer />

        </div>
    )
}

export default Insert