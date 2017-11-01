var listItems = ["Go out", "Come back" , "Buy food" , "Eat food"];


function addListItem(value) {
  var item = document.createElement("li");
  var text = document.createTextNode(listItems[i]);
  item.appendChild(text);
  document.getElementById("list").appendChild(item);

}

// write append loop here
for (var i = 0; i < listItems.length; i++) {
  if (i % 2 === 0){
    li.classList.add('even');
    addListItem();
  } 
}

// write the class loop here

// for (var i = 0;) i < listItems.length; i ++) {
//   if (i % 2 === 0) {
//     li.classList.add('even');
//   }
// }

console.log(document.body);
