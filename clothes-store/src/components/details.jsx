import { useSelector } from "react-redux"
import { Outlet, useParams } from "react-router-dom"

export const Detailes = () => {
    let params = useParams()
    let object = useSelector(x => x.dataclothes.arrClothes.find(k => k.name == params.name))
    return <div><h1>{params.name} </h1>
        <h5>price:  {object.price}</h5>
        <h5>size:  {object.size}</h5>
        <h5>color:  {object.color}</h5>
        <h5>count:  {object.count}</h5>
        <Outlet></Outlet>
    </div>
    
}