const nftImage = document.querySelector(".nft-image > .nft-thumbnail");
const nftHover = document.querySelector(".nft-image > .hover");

nftImage.addEventListener("mouseover", () => {
  nftHover.style.display = "grid";
});

nftImage.addEventListener("mouseout", () => {
  nftHover.style.display = "none";
});
