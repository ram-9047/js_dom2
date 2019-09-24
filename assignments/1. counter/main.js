function main(){
    var count = 0;
    var increment = document.querySelector(".increment")
    var decrement = document.querySelector(".decrement")
    var reset = document.querySelector(".reset")
    var finalData = document.querySelector(".data")

    function finalValue(data){
        return finalData.innerHTML = `<h1>${data}</h1>`
    }
    increment.addEventListener("click", () => {
        count = count + 1;
        finalValue(count)
    })
    decrement.addEventListener("click", () => {
        count = count - 1;
        finalValue(count)
    })
    reset.addEventListener("click" , () => {
        count = 0;
        finalValue(count)
    })

}
main();