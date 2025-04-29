import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { addToCart } from "../redax/dataActions"



export const Home = () => {
    const [add, setadd] = useState(useSelector(x => (x.dataCartReducer.arrCart)))
    let d = useDispatch()
    let item
     let mone=useSelector(x=>(x.dataUser.mone))
    let user=useSelector(x=>(x.dataUser.curentUser.userCode))

    const f_addtocart = (x) => {
        debugger
        item={code:user,codeshoping:mone,codeitem:x.code,nameitem:x.name,count:1,price:x.price}
        d(addToCart(item))
    }

    const [myarr, setmyarr] = useState(useSelector(x => (x.dataclothes.arrClothes)))
    let ca = useSelector(x => (x.dataclothes.arrClothes))
    let navigate=useNavigate()
    let arr = ["baby ", "girl", "boy", "men", "women","guy"]
    const filter = (val) => {
        if (val == "") {
            setmyarr(ca)
        }
        else {
            let y = [...myarr]
            y = y.filter(i => i.nameCategory == val)
            setmyarr(y)
        }
    }
    const f_pass=()=>{
        navigate('/cart')
    }
    return <div>
        <input style={{width:"300px",height:"30px"}} list='category' onChange={(e) => filter(e.target.value)} placeholder={"Category"}></input>        <datalist id='category' >
            {arr.map(o => <option key={o}>{o}</option>)}
        </datalist>
        <br></br>
        {myarr.map(x => <td style={{display:"inline-block"}}>
           <h3 >{x.name}</h3>
            <h3>{<img src={x.img} alt="picture" style={{margin:"38px"}} width="220px"></img>}</h3>
            <p><Link to={`det/${x.name}`}>details</Link></p>
            <button onClick={() => f_addtocart(x)}>add to Cart</button>
        </td>)}
        <br></br>
        <br></br>
        <button style={{width:"250px",height:"60px",fontSize:"20px"}} onClick={()=>f_pass()}>finish shopping </button>
        <Outlet></Outlet>
    </div>
}

// ///////////







//     debugger
//     return <div>
//         <input style={{width:"300px",height:"30px"}} list='category' onChange={(e) => filter(e.target.value)} placeholder={"Category"}></input>
//         <datalist id='category' >
//             {arr.map(o => <option key={o}>{o}</option>)}
//         </datalist>
//         <br></br>
//         {myarr.map(x => <td style={{display:"inline-block"}}>
//            <h3 >{x.name}</h3>
//             <h3>{<img src={x.src} alt="picture" width={"220px"} style={{margin:"38px"}}></img>}</h3>
//             <h4><Link to={`det/${x.name}`}>details</Link></h4>
//             <button onClick={() => f_addtocart(x)}>add to Cart</button>
//         </td>)}
//         <br></br>
//         <br></br>
//         <button style={{width:"250px",height:"60px",fontSize:"20px"}} onClick={()=>f_pass()}>finish shopping </button>
//         <Outlet></Outlet>
//     </div>
// }