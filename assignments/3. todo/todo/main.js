// var list = document.querySelector(".list")
document.querySelector(".todo").addEventListener("keyup", ()=>{
	    var li = document.createElement("li")
        var p = document.createElement("p")
        var button = document.createElement("button")
        button.innerText = "X"
        
    if(event.keyCode == 13 && event.target.value != ""){
        p.innerText = event.target.value
        li.appendChild(p)
        li.appendChild(button)
        document.querySelector(".list").appendChild(li)
        console.log(document.querySelector(".list"))
        event.target.value = null
    }

    button.addEventListener("click", () => {
        event.target.parentElement.remove()
    })

    var checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    li.append(checkbox)
})
