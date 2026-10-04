const search = document.querySelector("#search");
const filters = document.querySelectorAll(".filter");
const resources = document.querySelectorAll(".resource");
const emptyState = document.querySelector("#empty-state");
let activeCategory = "all";

function updateResources() {
  const query = search.value.trim().toLocaleLowerCase("es");
  let visible = 0;

  resources.forEach((resource) => {
    const categoryMatches = activeCategory === "all" || resource.dataset.category === activeCategory;
    const searchMatches = resource.dataset.search.includes(query);
    const show = categoryMatches && searchMatches;
    resource.hidden = !show;
    if (show) visible += 1;
  });

  emptyState.hidden = visible !== 0;
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    activeCategory = filter.dataset.filter;
    filters.forEach((button) => button.classList.toggle("is-active", button === filter));
    updateResources();
  });
});

search.addEventListener("input", updateResources);
