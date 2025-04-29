import { useDispatch, useSelector } from "react-redux"
import { minus, plus } from "../redax/dataActions"

export const Cart = () => {
    let shopping = useSelector(s => s.dataCartReducer.arrCart)
    const mydispatch = useDispatch()
    const f_sum = () => {
        finalSum += sum
    }
    const f_pay = () => {
        alert("v")
    }
    const f_minus = (x) => {
        mydispatch(minus(x.amount - 1, x.itemCode))
    }
    const f_plus = (x) => {
        mydispatch(plus(x.amount + 1, x.itemCode))
    }
    let sum = 0
    let finalSum = 0
    return <>
        <table className="table">
            <thead>
                <tr>
                    <th>custumer code</th>
                    <th>shopping code</th>
                    <th>item code</th>
                    <th>name</th>
                    <th>count</th>
                    <th>price</th>
                    <th>final price</th>
                </tr>
            </thead>
            <tbody>
                {shopping.map((y) =>
                    y.amount > 0 && <tr>
                        {Object.keys(y).map(n => (<td>{y[n]}</td>))}
                        <td>{sum = y.amount * y.price}</td>
                        {f_sum(sum)}
                        <button onClick={() => f_plus(y)}>+</button>
                        <button onClick={() => f_minus(y)}>-</button>
                    </tr>
                        )}
            </tbody>
        </table>
        {finalSum != 0 && <div>
            <p>final sum {finalSum}</p>
            <button onClick={() => f_pay()}>Pay</button>
        </div>}
    </>


}