async function get (){
    const response = await fetch("https://game-of-thrones-quotes.herokuapp.com/v1/characters/")
    const data = await response.json()
    console.log(data)
}
get()