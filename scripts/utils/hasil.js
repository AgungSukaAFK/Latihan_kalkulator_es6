export function ubahHasil(element, value){
    if(!isNaN(value)){
        element.innerHTML = `Hasil : ${value}`;
    } else {
        alert("Input harus ankga");
    }
}