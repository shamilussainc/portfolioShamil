let element = document.getElementsByClassName("nav-item");
for (let a = 0; a < element.length; a++) {
  element[a].onclick = () => {
    element[a].className = element[a].className + " active";

    for (let b = 0; b < element.length; b++) {
      if (a === b) {
        continue;
      } else {
        element[b].className = "nav-item";
      }
    }
  };
}
