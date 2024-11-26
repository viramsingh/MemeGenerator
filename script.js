const generateMemeBtn = document.querySelector(
  ".meme-generater .generate-meme-btn"
);
const MemeImg = document.querySelector(".meme-generater img");
const MemeTitle = document.querySelector(".meme-generater .meme-title");
const MemeAuthor = document.querySelector(".meme-generater .meme-author");

const updateDetails = (url, title, author) => {
  MemeImg.setAttribute("src", url);
  MemeTitle.innerHTML = title;
  MemeAuthor.innerHTML = author;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((Response) => Response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);
