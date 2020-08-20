let main = document.body
main.setAttribute("style","background-color:#667893;")
let mydiv = document.createElement("div")
mydiv.setAttribute("style","width:100%;height:auto;")
mydiv.setAttribute("class","card-group")
let header_div = document.createElement("div")
header_div.setAttribute("style","text-align:center;color:black;")
let header = document.createElement("h1")
header.setAttribute("style","color:white;font-family:monospace;margin-top:20px;")
header.innerText = "Giphy";

let input = document.createElement("input")
input.setAttribute("id","data")
input.setAttribute("style","margin-left:20px;")
header.appendChild(input)

let button = document.createElement("input")
button.setAttribute("type","submit")
button.setAttribute("value", "Search")
button.setAttribute("onclick", "processGIF()")
button.setAttribute("style","margin-left:10px;")
header.appendChild(button)

let outcontainer = document.createElement("div")
outcontainer.setAttribute("class","row")
outcontainer.setAttribute("id","out")
header_div.appendChild(header)
main.appendChild(header_div)
main.appendChild(mydiv)

async function getData(url){
    let country = await fetch(url)
    let arr = await country.json()
    return arr
}



async function processGIF(){
    try{
        let word = document.getElementById("data").value
        console.log(word)
        let arrdata = await getData(`https://api.giphy.com/v1/gifs/search?api_key=6ThW03Ex8fqrr25uR26Sg26ZjUu2USF7&q=${word}&limit=6&offset=0&rating=g&lang=en`)
        console.log(arrdata["data"])
        for(i of arrdata["data"]){
            let col = document.createElement("div")
            col.setAttribute("class","col-lg-4 col-sm-12")
            let gif = document.createElement("img")
            gif.setAttribute("src",`${i["images"]["original"].url}`)
            gif.setAttribute("style","width:350px;height:350px;padding:30px;")
            
            col.appendChild(gif)
            outcontainer.appendChild(col)
            mydiv.appendChild(outcontainer)
        }
}catch(error){
        console.log(error)
}
}

