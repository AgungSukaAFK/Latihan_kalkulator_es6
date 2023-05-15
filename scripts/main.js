// import { readInput } from "./utils/readInput.js";
import { submit } from "./utils/submit.js";
// import { ubahHasil } from "./utils/hasil.js";

    let buttonSubmit = document.querySelector(".submit");
    // let input1 = document.querySelector("#angka1");
    // let input2 = document.querySelector("#angka2");
    // let hasilField = document.querySelector(".hasil h4");

    buttonSubmit.addEventListener("click", () => {
        submit(buttonSubmit);
    })

    // let val1 = readInput(input1);
    // let val2 = readInput(input2);

    // alert(`val1 ${val1}, ${val2}`);