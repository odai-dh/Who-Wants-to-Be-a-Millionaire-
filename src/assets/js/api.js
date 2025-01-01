async function getQuestions() {
  const url = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch questions:", error);
    return [];
  }
}
export { getQuestions };