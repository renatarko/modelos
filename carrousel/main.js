const btnNext = document.getElementById("next");

let current = 0;

const items = document.querySelectorAll("img");
let maxItems = items.length - 1;
// console.log(maxItems);

function handleClickNext() {
  if (current < maxItems) {
    current += 1;
  } else {
    current = 0;
  }
  console.log(current);

  items.forEach((item) => item.classList.remove("current"));

  items[current].scrollIntoView({
    inline: "center",
    behavior: "smooth",
  });

  items[current].classList.add("current");
}

btnNext.addEventListener("click", handleClickNext);
