const imageContainer = document.getElementById("image-container");
const addButton = document.getElementById("add-button");
const changeButton = document.getElementById("change-button");
const deleteButton = document.getElementById("delete-button");

let images = ["p1.jpeg", "p2.jpeg", "p3.jpeg", "p4.jpeg"];
let selectedIndex = -1;
const maxImages = 4;

function addImage() {
  const newImageIndex = (images.length + 1) % maxImages;
  const newImageUrl = `p${newImageIndex}.jpeg`;
  images.push(newImageUrl);
  renderImages();
}

function changeImage() {
  if (selectedIndex >= 0) {
    images[selectedIndex] = "p2.jpeg";
    renderImages();
  }
}

function deleteImage() {
  if (selectedIndex >= 0) {
    images.splice(selectedIndex, 1);
    selectedIndex = -1;
    renderImages();
  }
}

function renderImages() {
  imageContainer.innerHTML = "";

  images.forEach((imageUrl, index) => {
    const imageItem = document.createElement("div");
    imageItem.classList.add("image-item");
    imageItem.style.backgroundImage = `url(${imageUrl})`;
    imageItem.addEventListener("click", () => {
      selectedIndex = index;
      imageItem.classList.add("selected");
    });
    imageContainer.appendChild(imageItem);
  });
}

addButton.addEventListener("click", addImage);
changeButton.addEventListener("click", changeImage);
deleteButton.addEventListener("click", deleteImage);
renderImages();
