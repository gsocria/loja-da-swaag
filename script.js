
const control = document.querySelectorAll(".control");

let currentItem = 0

const items = document.querySelectorAll(".item");

const maxitem = items.length;

control.forEach((control) => {
    control.addEventListener("click", () => {
      const isleft =
    control.classList.contains("arrow-left");

      if (isleft) {
        currentItem -= 1 ;
      } else {
        currentItem += 1;
      }

      if (currentItem >= maxitem) {
        currentItem = 0;
      }

      if (currentItem < 0) {
        currentItem = maxitem -1;
      }

      items.forEach( item =>
        item.classList.remove('current-item'));

        items[currentItem].scrollIntoView ({
          inline: "center",
          behavior: "smooth"
        })
    });
  });
