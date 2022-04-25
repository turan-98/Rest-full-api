const url = "http://localhost:21262/rawMaterials"
const urlAdd = "http://localhost:21262/add"

const $btnGet = document.querySelector("#btn-get");
const $btnUpdate = document.querySelector("#btn-update");
const $btnAddNew = document.querySelector("#btn-addnew");

$btnGet.addEventListener("click", getMaterials)
$btnUpdate.addEventListener("click", updateNewUser)
$btnAddNew.addEventListener("click", addNewMaterials)

const addMaterials =
{
    name: "Suco de uva",
    quantity: 2,
    user: "Fulano"
}

const UpdateUser = {
    name:"Pão",
    quantity:20,
    user:"Ciclano"
}

/* Que delicia de código em pai 🤤 rs*/
function getMaterials(){
    axios.get(url)
    .then( res => {
        const {data} = res;
        render.textContent = JSON.stringify(data);
    })
    .catch(error => console.error(error))
}



function addNewMaterials(){
    axios.post(urlAdd, addMaterials)
    .then(res => {
        alert(res.data)
    })
    .catch(error => console.error(error)) 
}


function updateNewUser(){
    axios.put(`${url}/2`, UpdateUser)
    .then(res => {
        const {data} = res;
        render.textContent = JSON.stringify(data);
    })
    .catch(error => console.error(error)) 
}


