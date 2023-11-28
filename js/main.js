
document.getElementById('inputButton').addEventListener('click', function () {
  

// Get the button ID and Store the Input Value 
console.log('click');

let inputManager = document.getElementById('inputManager').value;

// The input creates a new list
// createTextNode creates a new text after writing something in the input and appends it to the list
//The if Statement makes sure that the input doesn't accept only blank characters.
if (inputManager.trim() !== '') 
{
 
   let createNewListItem = document.createElement('li');
   
// The input value is disabled before adding it to "Att göra"
   let inputElement = document.createElement('input')
   inputElement.type = 'text'
   inputElement.value = inputManager
   inputElement.disabled = true;
   createNewListItem.appendChild(inputElement);
   
//Returns the value of the input and then appends it to the "Att göra" List
document.getElementById("listManager").appendChild(createNewListItem);
document.getElementById("inputManager").value = '';

   
   // Creates new buttons.
   let createEditButton = document.createElement('button')
   let createDeleteButton = document.createElement('button')
   let createFinishedButton = document.createElement('button')

   createNewListItem.appendChild(createFinishedButton);

// The Edit button -------------------------------------------------------------------
    
createEditButton.appendChild(document.createTextNode("Ändra"));

// When "Ändra" is clicked, the input value is editable through InputElement.disabled
// textContent changes the text of the Button
createEditButton.addEventListener("click", function() {
    // Toggle between "Ändra" and "Spara"
    if (createEditButton.textContent === "Ändra") {
        inputElement.disabled = false;
        createEditButton.textContent = "Spara";
    } else {
        // When "Spara" is clicked, save the changes and toggle back to "Ändra"
        inputElement.disabled = true;
        createEditButton.textContent = "Ändra";
    }
});

createNewListItem.appendChild(createEditButton);

// The Delete button -----------------------------------------------------------------------
   createDeleteButton.appendChild(document.createTextNode("Radera"));

   createDeleteButton.addEventListener("click", function () 
   {
   // Remove the entire list item (task) when Delete is clicked
      createNewListItem.remove();
   });


   createNewListItem.appendChild(createDeleteButton);


// The Finished button -------------------------------------------------------------------
createFinishedButton.appendChild(document.createTextNode("Färdig"));

createFinishedButton.addEventListener("click", function()
{

  document.getElementById("listFinished").appendChild(createNewListItem)
   
   createNewListItem.remove
   inputElement.disabled = true;
   createFinishedButton.remove();
})

}
});

