export const data = [
  "experiment",
  "vegetable",
  "have",
  "classify",
  "god",
  "roof",
  "storm",
  "worm",
  "gallery",
  "meal",
  "consumption",
  "fitness",
  "liability",
  "indirect",
  "calm",
  "forecast",
  "hurt",
  "an",
  "start",
  "final",
  "stretch",
  "butterfly",
  "define",
  "greet",
  "bank",
  "beat",
  "heart",
  "deprive",
  "cup",
  "wait",
  "hear",
  "denial",
  "keep",
  "captain",
  "bomber",
  "confusion",
  "bin",
  "thaw",
  "radiation",
  "herd",
  "inflate",
  "anger",
  "public",
  "decisive",
  "spoil",
  "explain",
  "recommendation",
  "sail",
  "cassette",
  "fountain",
  "contain",
  "cabin",
  "crown",
  "cabinet",
  "contribution",
  "control",
  "courage",
  "courageous",
  "courageously",
  "courageousness",
  "fearful",
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export const generateDommyText = () => {
  const newArray = shuffle(data);
  return newArray.join(" ").toString();
};
