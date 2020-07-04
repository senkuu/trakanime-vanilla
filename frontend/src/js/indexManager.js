class IndexManager {
  constructor(animeManager) {
    this.animeManager = animeManager;
  }

  async init() {
    const animesRequest = await this.animeManager.getAnimes(1, 25);
    const animes = animesRequest.data.Page.media;

    this.generateAnimesCard(animes);

    const searchField = document.getElementById("animeSearch");
    searchField.addEventListener(
      "change",
      async (e) => await this.handleSearch(e)
    );
  }

  async handleSearch(e) {
    const animesRequest = await this.animeManager.getAnimesByName(
      e.target.value
    );
    const animes = animesRequest.data.Page.media;

    this.generateAnimesCard(animes);
  }

  generateAnimesCard(animes) {
    const animeDiv = document.getElementById("animes");
    animeDiv.innerHTML = "";
    animes.forEach((anime) => {
      animeDiv.appendChild(this.generateCard(anime));
    });
  }

  generateCard(anime) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    div.className = "m-6 text-center";
    img.src = anime.coverImage.large;
    img.className = "mx-auto";
    p.textContent = anime.title.english ?? anime.title.native;
    div.appendChild(img);
    div.appendChild(p);
    return div;
  }
}

export default IndexManager;
