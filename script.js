document
  .getElementById("helmet_select")
  .addEventListener("change", function () {
    const selected_value = this.value;
    const img_element = document.getElementById("helmet_image");
    img_element.src = selected_value;
  });

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
