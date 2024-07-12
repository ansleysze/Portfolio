function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    menu.classList.toggle("open");

  }

  function openModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");
  
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }