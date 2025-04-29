import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { change_list} from "../redax/dataActions"
import { AddClothes } from "./addClothes"

export const ListClothes = () => {
    const listClothes = useSelector(s => s.dataclothes.arrClothes)
    const dispatch = useDispatch()
    const [showAdd,setShowAdd]=useState(false)
    const delit = ( codeClothes ) => {
        debugger
        let d = listClothes.filter(o => o.codeClothes != codeClothes)
        dispatch(change_list(d))
            
    }
    return <>
        <div className="container">
        <h2>hello manager </h2>
        <p>all clothes in stor</p>  
        <table className="table table-striped">
            <thead>
                <tr>
                    <td>code item</td>
                    <td>name item</td>
                    <td>code ctegory</td>
                    <td>name category</td>
                    <td>price</td>
                    <td>img</td>
                    <td>color</td>
                    <td>size</td>
                    <td>count</td>
                </tr>
            </thead>
            <tbody>
                {listClothes.map((x, i) =>
                (<tr style={{ backgroundColor: "whitesmoke" }}>
                    <td>{x.codeClothes}</td>
                    <td>{x.name}</td>
                    <td>{x.codeCategory}</td>
                    <td>{x.nameCategory}</td>
                    <td>{x.price}</td>
                    <td><img src={x.img} alt="clothes" width="50px" /></td>
                    <td>{x.color}</td>
                    <td>{x.size}</td>
                    <td>{x.count}</td>
                    <button onClick={() => delit(x.codeClothes)}>delete</button>
                </tr>
                ))}
            </tbody>

        </table>
        </div>
        <button onClick={() => setShowAdd(!showAdd)}>add Clothes</button>
        {showAdd && <AddClothes></AddClothes>}
    </>
}