import { Route, Routes } from "react-router-dom"
import { AddClothes } from "./addClothes"
import { Cart } from "./cart"
import { Category } from "./category"
import { Ezor } from "./ezor"
import { Home } from "./home"
import { Login } from "./login"
import { ListClothes } from "./listCloethes"
import { ChangeCategory } from "./addCategory"
import { Detailes } from "./details"
import { Join } from "./join"


export const Routing = () => {
    return <>
        <Routes>
            <Route path="home" element={<Home></Home>}>
                <Route path="det/:name" element={<Detailes></Detailes>}></Route>
            </Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="ezor" element={<Ezor></Ezor>}></Route>
            <Route path="category" element={<Category></Category>}></Route>
            <Route path="category" element={<ChangeCategory></ChangeCategory>}></Route>
            <Route path="listClothes" element={<ListClothes></ListClothes>}></Route>
            <Route path="addClothes" element={<AddClothes></AddClothes>}></Route>
            <Route path="join" element={<Join></Join>}></Route>
            <Route path="cart" element={<Cart></Cart>}></Route>
        </Routes>
    </>
}