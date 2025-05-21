// Listen for when a select element is clicked and gets parent id
// e.g helmet
function select_clicked() {
  const selects = document.querySelectorAll("SELECT");

  selects.forEach((select) => {
    select.addEventListener("click", () => {
      let parentId = select.parentNode.id;

      img = select.parentNode.querySelector(".item_image");

      img.src = select.value;

      dropdown_data(parentId);
    });
  });
}

// Query for all wearable items
async function fetch_items() {
  const response = await fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `{
        items(type: wearable) {
            id
            name
            gridImageLink
            category {
              id
              name
            }
        }
      }`,
    }),
  });
  const data = await response.json();
  console.log(data);
  itemsCache = data.data.items; // store in the global variable
  console.log("Items cached:", itemsCache);
}

// categorize items by selected slot
function dropdown_data(parentId) {
  for (i in itemsCache) {
    if (parentId == itemsCache[i].category.name) {
      let item = itemsCache[i];
      let select = document.getElementById(parentId).querySelector("select");

      // create option object
      let option = document.createElement("option");
      option.value = item.gridImageLink;
      option.text = item.name;

      // append option to the select field
      select.appendChild(option);
    }
  }
}

select_clicked();
fetch_items();

/*
document.querySelectorAll("option").addEventListener("change", function () {
  const selected_value = this.value;
  console.log(this);
  const img_element = document.getElementById("helmet_image");
  img_element.src = selected_value;
});
*/
