export function generateRandomAmount() {
  const randomNumber = Math.floor(Math.random() * 900) + 100;

  const randomString = randomNumber.toString();

  return randomString;
}
