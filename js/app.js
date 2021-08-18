baguetteBox.run('.gallery');

function imgSearch() {
  let input = document.getElementById('img-search').value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName('image');

  for (i = 0; i < x.length; i++) {
    if( !x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
      } else {
        x[i].style.display = "grid";
      }
    }
}
