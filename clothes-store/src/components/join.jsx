import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { add, change_user } from "../redax/dataActions"



export const Join = () => {
    const [newr, setnewr] = useState({})
    let d = useDispatch()
    let navigate = useNavigate()
    const dispatch = useDispatch()


    const f_adduser = () => {
        debugger
        d(add(newr))
        dispatch(change_user(true))
        navigate('/home')

    }
    return <div className="form">
            <fieldset>
                <input placeholder="code" type={"number"} style={{ width: "200px", height: "30px" }} onBlur={(e) => { setnewr({ ...newr, code: e.target.value }) }}></input><br></br><br></br>
                <input placeholder="name" type={"text"} style={{ width: "200px", height: "30px" }} onBlur={(e) => { setnewr({ ...newr, name: e.target.value }) }}></input><br></br><br></br>
                <input placeholder="password" type={"password"} style={{ width: "200px", height: "30px" }} maxLength={'8'} onBlur={(e) => { setnewr({ ...newr, password: e.target.value }) }}></input><br></br><br></br>
                <input placeholder="detailscard" type={"number"} style={{ width: "200px", height: "30px" }} onBlur={(e) => { setnewr({ ...newr, craditCard: e.target.value }) }}></input><br></br><br></br>
                <button style={{ width: "80px", height: "30px" }} onClick={() => f_adduser()}>ok</button>
            </fieldset></div>
}