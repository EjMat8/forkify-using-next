const foodAPI = "https://forkify-api.herokuapp.com/api/v2/recipes";

export const getFoodData = async (search, select) => {
  const apiStr = select ? `/recipes/${search}` : `?search=${search}`;
  try {
    const res = await fetch(`${foodAPI}${apiStr}&key=${process.env.API_KEY}`);
    const data = await res.json();

    if (!res.ok || !data.results) throw new Error("No data found.");

    return data;
  } catch (e) {
    throw e;
  }
};
