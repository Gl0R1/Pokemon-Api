console.log("hola mundo")

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt(1,151))

const fetchData = async() => { 
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/150')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log("Error fetch")
  }
}