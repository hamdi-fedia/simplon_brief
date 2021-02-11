async function get (){
    const response = await fetch("https://game-of-thrones-quotes.herokuapp.com/v1/characters/")
    const data = await response.json()
    console.log(data)

    document.querySelector("#jon .name").innerHTML = data[0].name
    document.querySelector("#jon .slug").innerHTML = data[0].slug
    document.querySelector("#jon .house").innerHTML = data[0].house["name"]
    document.querySelector("#jon .quotes").innerHTML =  data[0].quotes[0] 

    document.querySelector("#sansa .name").innerHTML = data[1].name
    document.querySelector("#sansa .slug").innerHTML = data[1].slug
    document.querySelector("#sansa .house").innerHTML = data[1].house["name"]
    document.querySelector("#sansa .quotes").innerHTML = data[1].quotes[0]

    document.querySelector("#eddard .name").innerHTML = data[2].name
    document.querySelector("#eddard .slug").innerHTML = data[2].slug
    document.querySelector("#eddard .house").innerHTML = data[2].house["name"]
    document.querySelector("#eddard .quotes").innerHTML = data[2].quotes[0]

    document.querySelector("#jaime .name").innerHTML = data[3].name
    document.querySelector("#jaime .slug").innerHTML = data[3].slug
    document.querySelector("#jaime .house").innerHTML = data[3].house["name"]
    document.querySelector("#jaime .quotes").innerHTML = data[3].quotes[0]

    document.querySelector("#tyrion .name").innerHTML = data[4].name
    document.querySelector("#tyrion .slug").innerHTML = data[4].slug
    document.querySelector("#tyrion .house").innerHTML = data[4].house["name"]
    document.querySelector("#tyrion .quotes").innerHTML = data[4].quotes[0]

    document.querySelector("#cersei .name").innerHTML = data[5].name
    document.querySelector("#cersei .slug").innerHTML = data[5].slug
    document.querySelector("#cersei .house").innerHTML = data[5].house["name"]
    document.querySelector("#cersei .quotes").innerHTML = data[5].quotes[0]

    document.querySelector("#joffrey .name").innerHTML = data[6].name
    document.querySelector("#joffrey .slug").innerHTML = data[6].slug
    document.querySelector("#joffrey .house").innerHTML = data[6].house["name"]
    document.querySelector("#joffrey .quotes").innerHTML = data[6].quotes[0]

    document.querySelector("#aerys .name").innerHTML = data[7].name
    document.querySelector("#aerys .slug").innerHTML = data[7].slug
    document.querySelector("#aerys .house").innerHTML = data[7].house["name"]
    document.querySelector("#aerys .quotes").innerHTML = data[7].quotes[0]
    
    
    
    
}
get()