const url = "https://picsum.photos/v2/list";
let dataListFull = "";
let dataListSmall = "";
axios.get(url).then((resp) => {
  let name = resp.data;
  for (let i = 0; i < name.length; i++) {
    dataListFull += `<div class="mySlides fade">
                      <img src="${name[i].download_url}" loading="lazy" alt="${name[i].author}">
                      <div class="text">
                      <div class="container">
                            <div class="box">
                                <div class="title">
                                    <span class="block"></span>
                                    <h1>${name[i].author}<span></span></h1>
                                </div>
                                <div class="role">
                                    <div class="block"></div>
                                    <p>Front-End Developer</p>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>`;
  }
  document
    .getElementById("full")
    .insertAdjacentHTML("afterbegin", dataListFull);

  for (let i = 0; i < name.length; i++) {
    dataListSmall += `<div class="row">
                        <div class="column">
                        <img src="https://picsum.photos/id/${name[i].id}/350/350" loading="lazy" alt="${name[i].author}">
                        </div>
                      </div>`;
  }

  document
    .getElementById("small")
    .insertAdjacentHTML("afterbegin", dataListSmall);

  let row = document.querySelectorAll(".row");
  for (let i = 0; i < row.length; i++) {
    if (i == 0) {
      row[i].classList.add("active");
    }
    row[i].addEventListener("click", () => {
      plusSlides(i);

      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      row[i].classList.add("active");
    });
  }
  document.querySelector(".prev").addEventListener("click", () => {
    move(-1);
  });
  document.querySelector(".next").addEventListener("click", () => {
    move(1);
  });

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex = n += 1));
  }
  function move(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
});
