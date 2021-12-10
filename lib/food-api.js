const foodAPI = "https://forkify-api.herokuapp.com/api/v2/recipes";

export const getFoodData = async (search, select = false) => {
  const apiStr = select ? `/${search}?` : `?search=${search}&`;
  try {
    const res = await fetch(`${foodAPI}${apiStr}key=${process.env.API_KEY}`);
    const data = await res.json();

    if (!res.ok || (!select && !data.results))
      throw new Error("No data found.");

    return data;
  } catch (e) {
    throw e;
  }
};

export const postFoodData = async (body) => {
  const res = await fetch(`${foodAPI}?key=${process.env.API_KEY}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  if (!res.ok) throw new Error("Could not upload data");

  return data;
};
