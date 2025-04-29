import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { change_listCategory } from "../redax/dataActions"
import { ChangeCategory } from "./addCategory"
export const Category = () => {

    const listCategory = useSelector(o => o.dataCategory.arrCategory)
    const dispatch = useDispatch()
    const [isAdd, setisAdd] = useState(false)
    const [isEdit, setisEdit] = useState(false)
    const [data, setData] = useState({})
    const delit = (code) => {

        let d = listCategory.filter(o => o.code != code)
        dispatch(change_listCategory(d))

    }
    const f_change = (x) => {
        setisEdit(true)
        let l = [...listCategory]
        let change = l.find(h => h.code == x.code)
        { isEdit && <ChangeCategory data={change} flag={true}></ChangeCategory> }
    }
    return <>
        <div className="container">
            <h2>hello manager </h2>
            <p>all categorys in stor</p>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>code</td>
                        <td>name</td>
                    </tr>
                </thead>
                <tbody>
                    {listCategory.map((x) =>
                    (<tr style={{ backgroundColor: "whitesmoke" }}>
                        <td>{x.code}</td>
                        <td>{x.name}</td>
                        <button style={{ margin: "5px" }} onClick={() => delit(x.code)}>delete</button>
                        <button onClick={() => f_change(x)}>edit</button>
                        {/* setisEdit(true)
                        {isEdit&&setData(x)}
                        {isEdit&&<ChangeCategory  data={data} flag={true}></ChangeCategory>} */}
                    </tr>
                    ))}
                </tbody>

            </table>
        </div>
        <button onClick={() => setisAdd(!isAdd)}>add category</button><br />
        {isAdd && <ChangeCategory flag={false}></ChangeCategory>}

    </>
}