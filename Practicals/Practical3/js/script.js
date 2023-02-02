function onSubmit() {
    let prodData = JSON.parse(localStorage.getItem('prodData')) || [];
    console.log(prodData);
    if(validateID(prodData)){
        prodData.push({
            prodId : document.getElementById('prodId').value,
            name : document.getElementById('name').value,
            image : document.getElementById('image').value,
            price : document.getElementById('price').value,
            description : document.getElementById('description').value
        });
    
        localStorage.setItem('prodData',JSON.stringify(prodData));
    }
    else{
        alert(`This ProductId : ${document.getElementById('prodId').value} is already exist.`)
    }
    
  
}

function validateID(data){
    let isValidate = true;
    data.forEach(item => {
        if(item.prodId == document.getElementById('prodId').value && document.getElementById('prodId').value != null){
            isValidate = false;
        }
    });
    return isValidate;
}