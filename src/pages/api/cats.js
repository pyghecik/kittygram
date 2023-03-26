import axios from "axios";

export const fetchCats = async () => {
  try {
    const Data = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=10`
    );
    return Data.data;
  } catch (err) {
    console.log(err);
  }
};
