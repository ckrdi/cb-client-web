// Makes HTTP request for JSON file
// then extract JSON data from HTTP response
// then calls utility method 1, passing it the data

fetch("../data/water.json")
.then(response => {
  console.log (response);
  return response.json();
})
.then(sources => {
  addSourceToPage(sources);
});

// Utility method 1:
// iterates over water sources array, passing each
// water sources object to utility method 2. Method 2 returns
// 'li' DOM nodes, which are then appended to the list we created in water.html

function addSourceToPage(sources) {
  const list = document.getElementById("WaterSources");
  for (let i = 0; i < sources.length; i++) {
    let li = createListItem(sources[i]);
    list.appendChild(li);
  }
}

// Utility method 2:
// takes an individual water sources object as an argument
// returns a 'li' DOM node with the data inside

function createListItem(data) {
  const listItem = document.createElement("li");
  listItem.innerHTML = data.name;

  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Discharge (cubic feet per second): " + data.discharge;

  listItem.appendChild(paragraph);
  return listItem;
}
