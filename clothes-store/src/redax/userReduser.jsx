import { produce } from 'immer'

export const InitialState = {
    listUsers: [
        { code: 1, name: "chana", password: "12", craditCard: 123456789 },
        { code: 2, name: "mayan", password: "123", craditCard: 123456789 },
        { code: 3, name: "tramp", password: "134", craditCard: 123456789 },
        { code: 4, name: "tal", password: "124", craditCard: 123456789 },
        { code: 5, name: "shany", password: "234", craditCard: 123456789 },
        { code: 6, name: "bibi", password: "1834", craditCard: 123456789 },

    ],
    curentUser: { name: "visitor" ,userCode:2 }
    , mone:  6 , user: false, manager: false, counter: 7

}
export const dataUser = produce((state, action) => {
    switch (action.type) {
        case 'ADD-R' :{state.listUsers.push(action.payload); ;break}
        case "CANGE_MANAGER": { state.manager = action.payload; break; }
        case "CANGE_USER": { state.user = action.payload; break; }
        default:
            break;
    }
}, InitialState)