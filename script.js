// Captures all of the elements taht have the square_container or rec_container class
// And then stores their ids in an array
const elements = document.querySelectorAll(".square_container, .rec_container");
const ids = Array.from(elements).map((element) => element.id);
console.log(ids);

for (let i = 0; i < ids.length; i++) {
  console.log(ids[i]);
}

// Fetches all helmet items when the select element is clicked.
document.getElementById("helmet_select").addEventListener("click", function () {
  fetch("https://api.tarkov.dev/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `{
    itemsByType(type: helmet) {
        name
        shortName
        iconLink
    }
}`,
    }),
  })
    .then((r) => r.json())
    .then((data) => console.log("data returned:", data));
});

document
  .getElementById("helmet_select")
  .addEventListener("change", function () {
    const selected_value = this.value;
    const img_element = document.getElementById("helmet_image");
    img_element.src = selected_value;
  });
