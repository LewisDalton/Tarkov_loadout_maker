// Listen for when a select element is clicked and gets parent id
// e.g helmet
function select_clicked() {
  const selects = document.querySelectorAll("SELECT");

  selects.forEach((select) => {
    select.addEventListener("click", () => {
      let parentId = select.parentNode.id;
      console.log(parentId);
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
  console.log("Items cached:", items_cache);
}

// categorize items by selected slot
function dropdown_data(parentId) {
  console.log(itemsCache);
  for i in Range(itemsCache)
  console.log("dropdown", parentId);
}

select_clicked();
fetch_items();

/*
document
  .getElementById("helmet_select")
  .addEventListener("change", function () {
    const selected_value = this.value;
    const img_element = document.getElementById("helmet_image");
    img_element.src = selected_value;
  });
*/
