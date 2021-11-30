export const catchAsync = async (fn) => {
  try {
    await fn();
  } catch (e) {
    alert(e.message);
  }
};
