let api02= "https://jsonplaceholder.typicode.com/posts";
async function fetchData(){
let DataInsideObjec = await axios.get(api02) ;
console.log(DataInsideObjec.data);
}
fetchData();