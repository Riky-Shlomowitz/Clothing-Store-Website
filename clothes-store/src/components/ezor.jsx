import { useDispatch, useSelector } from "react-redux"

export const Ezor = () => {
    const currentUser = useSelector(s => s.dataUser.curentUser)
    let shopping = useSelector(s => s.dataShopping.arrshopping)
    const ezSh = shopping.filter(x => x.codeUser == currentUser.userCode)
    const mydispatch = useDispatch()
    debugger
    let sum = 0
    return <>
        <h1>Hello {currentUser.name}</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>shopping code</th>
                    <th>custumer code</th>
                    <th>date</th>
                    <th>name</th>
                    <th>count</th>
                    {/* <th>final price</th> */}
                </tr>
            </thead>
            <tbody>
                {ezSh.map((y) => <>
                    {y.arr.map((x) => <tr>
                        <td>{y.codeShopping}</td>
                        <td>{y.codeUser}</td>
                        <td>{y.date}</td>
                        <td>{x.name}</td>
                        <td>{x.acount}</td>
                    </tr>)}
                    <td id="pay">total{y.codeShopping}:{y.sum}</td>
<br></br>
<br></br>
                </>
                )}
            </tbody>
        </table>
    </>



}