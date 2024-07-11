// Add your code here
let name="Nobert Muma"
let email="mumanobert17@gmail.com"
const body=document.querySelector("body")
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({name, email})
    })
    .then(response => response.json())
    .then(data=>{
        
        const newId=JSON.stringify(data.id)
        body.append(newId)
        console.log(data)
    })
    .catch(error => {
        console.error(error.message); 
        let errMessage; 
        if (errMessage = document.getElementById("error-message")) {
          if (error.message.includes('Unauthorized Access')) {
            errMessage.textContent = "Unauthorized Access: You may not be authorized to create new users.";
          } else {
            errMessage.textContent = `Error: ${error.message}`; 
          }
        } else {
          console.warn("Element with ID 'error-message' not found. Creating a new element for errors.");
          errMessage = document.createElement("div");
          errMessage.id = "error-message";
          document.body.appendChild(errMessage);
          errMessage.textContent = `Error: ${error.message}`;
        }
    })

}
submitData(name, email)


