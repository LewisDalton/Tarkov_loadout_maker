// Listen for when a select element is clicked and gets parent id
// e.g helmet
function selectClicked() {
  const selects = document.querySelectorAll("SELECT");

  selects.forEach((select) => {
    select.addEventListener("click", () => {
      const parentId = select.parentNode.id;
      console.log(parentId);

      let swapQuery = `{
        items(categoryNames: ${parentId}) {
            name
            gridImageLink
        }
    }`;

      fetchItems(parentId, swapQuery);
    });
  });
}

function querySelect(parentId) {
  if ((parentId = "helmet")) {
    let swapQuery = `{
    items(categoryNames: ${parentId}) {
        name
        gridImageLink
    }
  }`;
  }
}

function fetchItems(parentId, swapQuery) {
  fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: swapQuery }),
  })
    .then((r) => r.json())
    .then((data) => console.log("data returned:", data));
}

selectClicked();

/*
document
  .getElementById("helmet_select")
  .addEventListener("change", function () {
    const selected_value = this.value;
    const img_element = document.getElementById("helmet_image");
    img_element.src = selected_value;
  });
*/
