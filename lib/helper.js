export const catchAsync = async (fn) => {
  try {
    await fn();
  } catch (e) {
    // alert(e.message);
    console.log(e.message);
  }
};

export const transformUploadData = (formData) => {
  const ingredients = Object.entries(formData)
    .filter((el) => el[0].startsWith("ing") && !!el[1].trim())
    .map((el) => {
      const ing = el[1].trim().split(",");
      if (ing.length < 3) {
        alert("Wrong format");
        return;
      }

      const [quantity, unit, description] = ing;

      return {
        quantity: +quantity || null,
        unit: unit,
        description: description,
      };
    });

  const recipe = {
    title: formData.title,
    source_url: formData.sourceUrl,
    image_url: formData.image,
    publisher: formData.publisher,
    cooking_time: +formData.cookingTime,
    servings: +formData.servings,
    ingredients,
  };
  return recipe;
};
