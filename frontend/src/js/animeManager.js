class AnimeManager {
  constructor() {
    this.apiEndpoint = "https://graphql.anilist.co";
  }

  getOptions(query, variables) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };
  }

  getAnimes(page, perPage) {
    const query = `
    query ($page: Int, $perPage: Int) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media {
          id
          type,
          title {
            native,
            english
          }
          coverImage {
            large
          }
        }
      }
    }
    `;

    const variables = {
      page,
      perPage,
    };

    const response = fetch(this.apiEndpoint, this.getOptions(query, variables))
      .then((response) => response.json())
      .then((data) => {
        return data;
      });

    return response;
  }

  getAnimesByName(name) {
    const query = `
    query ($search: String) {
      Page (page: 1, perPage: 25) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (search: $search) {
          id
          type,
          title {
            native,
            english
          }
          coverImage {
            large
          }
        }
      }
    }
    `;

    const variables = {
      search: name,
    };

    const response = fetch(this.apiEndpoint, this.getOptions(query, variables))
      .then((response) => response.json())
      .then((data) => {
        return data;
      });

    return response;
  }
}

export default AnimeManager;
