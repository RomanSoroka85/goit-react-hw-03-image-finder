import axios from "axios";

const fatchArticlesWithQuery = (searchQuery, page) => {
  console.log(searchQuery, page);
  return axios

    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=18864788-659534fccb4bfac7e1ae65a8e&image_type=photos&orientation=horizontal&per_page=12`
    )

    .then((response) => response.data.hits);
};

export default {
  fatchArticlesWithQuery,
};
