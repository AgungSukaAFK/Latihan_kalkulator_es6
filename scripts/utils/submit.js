import { readInput } from "./readInput.js";
import { ubahHasil } from "./hasil.js";

export function submit(){

        let input1 = document.querySelector("#angka1");
        let input2 = document.querySelector("#angka2");
        let hasilField = document.querySelector(".hasil h4");

        // let val1 = parseInt(readInput(input1));
        let val1 = readInput(input1);
        // let val2 = parseInt(readInput(input2));
        let val2 = readInput(input2);

        ubahHasil(hasilField, val1+val2)
}

function isNumber(n){
        return Number(n)=== n;
}