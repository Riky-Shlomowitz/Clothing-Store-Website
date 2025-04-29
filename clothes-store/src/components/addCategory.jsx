import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { change_counterCategory, change_listCategory } from "../redax/dataActions"

export const ChangeCategory = ({ data,flag }) => {
    const [newCategory, setNewCategory] = useState({})
    const [listCategory, setListCategory] = useState(useSelector(o => o.dataCategory.arrCategory))
    const counter = useSelector(o => o.dataCategory.counter)
    const dispatch = useDispatch()
    useEffect(() => {
        if (data.code != undefined)
            setNewCategory(data)
    }, [])

    const whoIsIt = (newCategory) => {
        debugger
        if (flag)
            edit(newCategory)
        else
            add()
    }
    const add = () => {
        dispatch(change_counterCategory((counter + 1)))
        newCategory.code = counter
        setListCategory(i => i.concat(newCategory))
        dispatch(change_listCategory(listCategory))
    }
    const edit = (newCategory) => {
        let y = [...listCategory]
        y.find(h => h.code == newCategory.code).name = newCategory.name
        setListCategory(y)
        dispatch(change_listCategory(listCategory))
    }
    return <div class="container">
        <input className="form-control" placeholder={newCategory.name} onBlur={(c) => setNewCategory({ ...newCategory, name: c.target.value })}></input>
        <button onClick={() => whoIsIt(newCategory)}>ok</button>
    </div>
}