import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { change_counter, change_list } from "../redax/dataActions"

export const AddClothes = () => {
    const [newClothes, setNewClothes] = useState({})
    const [listClothes,setListClothes] = useState(useSelector(o => o.dataclothes.arrClothes))
    const counter = useSelector(o => o.dataclothes.counter)
    const dispatch = useDispatch()
    const add = () => {
        dispatch(change_counter(counter + 1))
        newClothes.codeClothes=counter
        setListClothes(i => i.concat(newClothes))
        dispatch(change_list(listClothes))
    }
    return <div className="container">
        <input className="form-control" id="name" placeholder="name item" onBlur={(e) => setNewClothes({ ...newClothes, name: e.target.value })}></input>
        <input className="form-control" placeholder="code Category" onBlur={(c) => setNewClothes({ ...newClothes, codeCategory: c.target.value })}></input>
        <input className="form-control" placeholder="name Category" onBlur={(v) => setNewClothes({ ...newClothes, nameCategory: v.target.value })}></input>
        <input className="form-control" placeholder="price" onBlur={(b) => setNewClothes({ ...newClothes, price: b.target.value })}></input>
        <input className="form-control" placeholder="color" onBlur={(h) => setNewClothes({ ...newClothes, color: h.target.value })}></input>
        <input className="form-control" placeholder="size" onBlur={(k) => setNewClothes({ ...newClothes, size: k.target.value })}></input>
        <input className="form-control" placeholder="count" onBlur={(s) => setNewClothes({ ...newClothes, count: s.target.value })}></input>
        <button onClick={() => add()}>ok</button>
        </div>
}