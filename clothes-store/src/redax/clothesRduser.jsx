

import { produce } from "immer";

export const InitialState = {

    arrClothes: [
        { codeClothes: "1", name: "shoes", codeCategory: "5", nameCategory: "women", price: "100", img: "s-w.jpg", color: "red", size: "36", count: "12" },
        { codeClothes: "2", name: "shirt", codeCategory: "3", nameCategory: "boy", price: "100", img: "shirt_b.jpg", color: "blue", size: "6", count: "24" },
        { codeClothes: "3", name: "shirt", codeCategory: "5", nameCategory: "women", price: "100", img: "shirt_w.png", color: "pink", size: "42", count: "11" },
        { codeClothes: "4", name: "suit", codeCategory: "6", nameCategory: "men", price: "100", img: "suit_m.jpg", color: "gray", size: "3-6", count: "56" },
        { codeClothes: "5", name: "dress", codeCategory: "1", nameCategory: "baby", price: "100", img: "d_b.png", color: "colorful", size: "45", count: "172" },
        { codeClothes: "6", name: "dress", codeCategory: "2", nameCategory: "girl", price: "100", img: "d_g.png", color: "blue", size: "36", count: "87" },
        { codeClothes: "7", name: "shirt", codeCategory: "5", nameCategory: "women", price: "100", img: "shi_w.png", color: "blue", size: "32", count: "98" },
        { codeClothes: "8", name: "shoes", codeCategory: "1", nameCategory: "baby", price: "100", img: "s-b.jpg", color: "green", size: "18", count: "34" },
        { codeClothes: "9", name: "shirt", codeCategory: "2", nameCategory: "girl", price: "100", img: "shirt_g.jpg", color: "waite", size: "18", count: "34" },
        { codeClothes: "10", name: "shirt", codeCategory: "2", nameCategory: "girl", price: "100", img: "shir_g.jpg", color: "blue", size: "18", count: "34" },
        { codeClothes: "11", name: "shoes", codeCategory: "3", nameCategory: "boy", price: "100", img: "shoes.jpg", color: "blue", size: "18", count: "34" },
        { codeClothes: "12", name: "shirt", codeCategory: "5", nameCategory: "women", price: "100", img: "shi-w.jpg", color: "waitw", size: "18", count: "3" },
        { codeClothes: "13", name: "shoes", codeCategory: "5", nameCategory: "women", price: "100", img: "s-w.jpg", color: "red", size: "36", count: "12" },
        { codeClothes: "14", name: "shirt", codeCategory: "3", nameCategory: "boy", price: "100", img: "shirt_b.jpg", color: "blue", size: "6", count: "24" },
        { codeClothes: "15", name: "shirt", codeCategory: "5", nameCategory: "women", price: "100", img: "shirt_w.png", color: "pink", size: "42", count: "11" },
        { codeClothes: "16", name: "suit", codeCategory: "6", nameCategory: "men", price: "100", img: "suit_m.jpg", color: "gray", size: "3-6", count: "56" },
        { codeClothes: "17", name: "dress", codeCategory: "1", nameCategory: "baby", price: "100", img: "d_b.png", color: "colorful", size: "45", count: "172" },
        { codeClothes: "18", name: "dress", codeCategory: "2", nameCategory: "girl", price: "100", img: "d_g.png", color: "blue", size: "36", count: "87" },
    ], counter: 19
}
export const dataclothes = produce((state, action) => {
    switch (action.type) {
        case "CANGE_LIST": { state.arrClothes = action.payload; break; }
        case "CANGE_COUNTER": { state.counter = action.payload; break; }
        default:
            break;
    }
}, InitialState)