const PixabayAPI = {
  getGallery: async (query, page = 1) => {
    const response = await fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=31920249-48aeedfd8265761d2665a6f22&image_type=photo&orientation=horizontal&per_page=12`
    );

    if (!response.ok) {
      throw new Error(response.status);
    }

    const gallery = await response.json();

    return gallery;
  },
};

export default PixabayAPI;
