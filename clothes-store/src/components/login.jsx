import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { change_manager, change_user, currrent_user } from "../redax/dataActions"

export const Login = () => {
   const [user, setUser] = useState({})
   const listUsers = useSelector(s => s.dataUser.listUsers)
   const [user1, setUser1] = useState(useSelector(s => s.dataUser.user))
   const [manager, setManager] = useState(useSelector(s => s.dataUser.manager))
   const myN = useNavigate()
   const dispatch = useDispatch()

   const cheack = () => {
      debugger
      if (listUsers.find((h => h.name == user.name) && (h => h.password == user.password))) {
         // setUser1(true)
         dispatch(change_user(true))
         dispatch(currrent_user(true))
         myN('/home')
      }

      else if (user.name == "manager" && user.password == "1234") {
         // setManager(true)
         dispatch(change_manager(true))
         myN('/home')
      }
      else {
         myN('/newUser')
      }

   }
   return <div className="container">
      <h2 style={{color:"lightBlue"}}>log in</h2>
      name:<input className="form-control" placeholder="name" onBlur={(e) => (setUser({ ...user, name: e.target.value }))}></input>
      password:<input className="form-control" type={"passsword"} placeholder="password" onBlur={(c) => (setUser({ ...user, password: c.target.value }))}></input><br />
      <button class="btn btn-info" onClick={() => cheack()}>ok</button>

   </div>


}