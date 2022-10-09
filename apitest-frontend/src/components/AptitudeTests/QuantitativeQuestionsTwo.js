const questions=[
  
  {
    id: "Q1",
    text: `In a market place 7 people sell mangoes, 11 sell bananas while 3 sell both fruits. How many sellers are in the market place?`,
    options: [
      { id: 0, text: "20", isCorrect: false },
      { id: 1, text: "12", isCorrect: false },
      { id: 2, text: "15", isCorrect: true },
      { id: 3, text: "25", isCorrect: false },
    ],
    answer: "15",
  },
  {
    id: "Q2",
    text: `All the 150 pupils in a school learn Igbo or Hausa or both. Given that 100 learn Hausa and 70 learn Igbo. How many learn both languages?`,
    options: [
      { id: 0, text: "20", isCorrect: true },
      { id: 1, text: "12", isCorrect: false },
      { id: 2, text: "15", isCorrect: false },
      { id: 3, text: "25", isCorrect: false },
    ],
    answer: "20",
  },
  {
    id: "Q3",
    text: `How many sides has a regular polygon whose exterior angle is 30°?`,
    options: [
      { id: 0, text: "20", isCorrect: false },
      { id: 1, text: "12", isCorrect: true },
      { id: 2, text: "15", isCorrect: false },
      { id: 3, text: "25", isCorrect: false },
    ],
    answer: "12",
  },
  {
    id: "Q4",
    text: `Which of the following is not a measure of dispersion? (WASSCE)`,
    options: [
      { id: 0, text: "Range", isCorrect: false },
      { id: 1, text: "Mean Deviation", isCorrect: false },
      { id: 2, text: "Mean", isCorrect: true },
      { id: 3, text: "Standard Deviation", isCorrect: false },
    ],
    answer: "Mean",
  },
  {
    id: "Q5",
    text: `Find the mean deviation of the following data 3, 2, 4, 2, 6, 5.`,
    options: [
      { id: 0, text: "1.2", isCorrect: false },
      { id: 1, text: "1.33", isCorrect: true },
      { id: 2, text: "1.4", isCorrect: false },
      { id: 3, text: "1.05", isCorrect: false },
    ],
    answer: "1.33",
  },
  {
    id: "Q6",
    text: `Two numbers are chosen at random from three numbers 1, 3, 6. Find the probability that the sum of the two is not odd. (UME)`,
    options: [
      { id: 0, text: "1/2", isCorrect: false },
      { id: 1, text: "1/5", isCorrect: false },
      { id: 2, text: "1/4", isCorrect: false },
      { id: 3, text: "1/3", isCorrect: true },
    ],
    answer: "1/3",
  },
  {
    id: "Q7",
    text: `Out of 30 candidates applying for a post, 17 have degrees, 15 diplomas and 4 neither degree nor diploma. How many of them have both? [WASSCE]`,
    options: [
      { id: 0, text: "2", isCorrect: false },
      { id: 1, text: "6", isCorrect: true },
      { id: 2, text: "4", isCorrect: false },
      { id: 3, text: "3", isCorrect: false },
    ],
    answer: "6",
  },
  {
    id: "Q8",
    text: `Two sets are disjoint if`,
    options: [
      { id: 0, text: "their union is an empty set", isCorrect: false },
      { id: 1, text: "their intersection is an empty set", isCorrect: true },
      { id: 2, text: "they are both empty", isCorrect: false },
      {
        id: 3,
        text: "One of them is a subset of the other",
        isCorrect: false,
      },
    ],
    answer: "their intersection is an empty set",
  },
  {
    id: "Q9",
    text: `Driving at x km/h, it takes a motorist 5 hours to cover a given distance. If he goes 15km/h faster, he covers the distance 1 hour less. Find x.`,
    options: [
      { id: 0, text: "90km/h", isCorrect: false },
      { id: 1, text: "40km/h", isCorrect: false },
      { id: 2, text: "50km/h", isCorrect: false },
      { id: 3, text: "60km/h", isCorrect: true },
    ],
    answer: "60km/h",
  },
  {
    id: "Q10",
    text: `In a family of 21 people, the average age is 14 years. If age of the grandfather is not counted, the average age drops to 12 years. What is the age of the grandfather? (UME)`,
    options: [
      { id: 0, text: "66", isCorrect: false },
      { id: 1, text: "62", isCorrect: false },
      { id: 2, text: "54", isCorrect: true },
      { id: 3, text: "77", isCorrect: false },
    ],
    answer: "54",
  },
  {
    id: "Q11",
    text: `If two dice are thrown together, what is the probability of obtaining at least a score of 10? (UME)`,
    options: [
      { id: 0, text: "1/6", isCorrect: true },
      { id: 1, text: "1/3", isCorrect: false },
      { id: 2, text: "1/2", isCorrect: false },
      { id: 3, text: "5/6", isCorrect: false },
    ],
    answer: "1/6",
  },
  {
    id: "Q12",
    text: `The variance of the scores 1,2,3, 4,5 is (UME)`,
    options: [
      { id: 0, text: "1", isCorrect: false },
      { id: 1, text: "3", isCorrect: false },
      { id: 2, text: "4", isCorrect: false },
      { id: 3, text: "2", isCorrect: true },
    ],
    answer: "2",
  },
  {
    id: "Q13",
    text: `The angles of a pentagon exceed one another by 10°. Find the least angle`,
    options: [
      { id: 0, text: "86°", isCorrect: false },
      { id: 1, text: "88°", isCorrect: true },
      { id: 2, text: "80°", isCorrect: false },
      { id: 3, text: "82°", isCorrect: false },
    ],
    answer: "88°",
  },
  {
    id: "Q14",
    text: `Find the number of sides of a regular polygon whose interior angle is twice the exterior angle.`,
    options: [
      { id: 0, text: "16", isCorrect: false },
      { id: 1, text: "26", isCorrect: false },
      { id: 2, text: "36", isCorrect: false },
      { id: 3, text: "6", isCorrect: true },
    ],
    answer: "6",
  },
  {
    id: "Q15",
    text: `Find the interest obtainable by saving N5000 at 5% per annum simple interest for 1 year and 6 months.`,
    options: [
      { id: 0, text: "N400", isCorrect: false },
      { id: 1, text: "N375", isCorrect: true },
      { id: 2, text: "N500", isCorrect: false },
      { id: 3, text: "N250", isCorrect: false },
    ],
    answer: "N375",
  },
  {
    id: "Q16",
    text: `Ana, Brenda and Camila share 65 bananas such that Brenda gets twice as many bananas as Ana and one and a half as many bananas as Camila. How many bananas does Brenda get?`,
    options: [
      { id: 0, text: "60", isCorrect: false },
      { id: 1, text: "45", isCorrect: false },
      { id: 2, text: "30", isCorrect: true },
      { id: 3, text: "50", isCorrect: false },
    ],
    answer: "30",
  },
  {
    id: "Q17",
    text: `A shopkeeper sold an item for N4 800, making a profit of 20%. Find the original cost of the item.`,
    options: [
      { id: 0, text: "N4000", isCorrect: true },
      { id: 1, text: "N3600", isCorrect: false },
      { id: 2, text: "N4300", isCorrect: false },
      { id: 3, text: "N4200", isCorrect: false },
    ],
    answer: "N4000",
  },
  {
    id: "Q18",
    text: `Four men do a piece of work in 12 days. How many days do 6 men, working at the same rate, do the work?`,
    options: [
      { id: 0, text: "11 days", isCorrect: false },
      { id: 1, text: "10 days", isCorrect: false },
      { id: 2, text: "8 days", isCorrect: true },
      { id: 3, text: "12 days", isCorrect: false },
    ],
    answer: "8 days",
  },
  {
    id: "Q19",
    text: `The sum of the exterior angles of an n-sided convex polygon is half the sum of its interior angles. Find n.(WASSCE)`,
    options: [
      { id: 0, text: "8", isCorrect: false },
      { id: 1, text: "6", isCorrect: true },
      { id: 2, text: "3", isCorrect: false },
      { id: 3, text: "10", isCorrect: false },
    ],
    answer: "6",
  },
  {
    id: "Q20",
    text: `The fifth term of the sequence 1, 21, 51, 91.... is`,
    options: [
      { id: 0, text: "101", isCorrect: false },
      { id: 1, text: "121", isCorrect: false },
      { id: 2, text: "131", isCorrect: false },
      { id: 3, text: "141", isCorrect: true },
    ],
    answer: "141",
  },
]
  export default questions