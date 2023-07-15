export const authService = (user) => {
  return user.username === "admin" && user.password === "1";
};