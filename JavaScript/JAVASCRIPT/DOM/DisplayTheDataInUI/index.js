let table = document.getElementById("table")
console.log(table);

table.style.width="100%"

let api1 = "https://api.escuelajs.co/api/v1/categories"
async function fetchData() {
    let response = await fetch(api1)
    let data = await response.json()
    console.log(data); //array of objects 
    
    
    for(let i=0;i<data.length-1;i++)
    {
        let tr01 = document.createElement("tr")
        tr01.innerHTML = `<td style="text-align:center";>${data[i].id}</td> 
                          <td style="text-align:center";>${data[i].name}</td>
                          <td style="text-align:center";>${data[i].slug}</td>
                          <td style="text-align:center";><img style="height:100px; width:150px" src="${data[i].image}"></td>
                          <td style="text-align:center";>${data[i].creationAt}</td>`
        table.append(tr01)
    }
}
fetchData()

function search()
{
    console.log("searching...");
    
}
search()