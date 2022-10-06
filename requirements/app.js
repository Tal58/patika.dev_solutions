import axios from "axios"
const getData = async function(Number){
    const {data:data1} = await axios(`https://jsonplaceholder.typicode.com/users/${Number}`)
    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?id=${Number}`)
console.log(data1)
console.log(posts)
const total = {data1, "posts": posts}
console.log(total)
}

export default getData