
  const questions = [
    {
      id: "Q1",
      text: `What is the average of the first six multiples of 14?`,
      options: [
        { id: 0, text: "49", isCorrect: true },
        { id: 1, text: "56", isCorrect: false },
        { id: 2, text: "28", isCorrect: false },
        { id: 3, text: "42", isCorrect: false },
      ],
      answer: "49",
    },
    {
      id: "Q2",
      text: `What is the difference in the place values of 2 in the number 15324628?`,
      options: [
        { id: 0, text: "19980", isCorrect: true },
        { id: 1, text: "20020", isCorrect: false },
        { id: 2, text: "20000", isCorrect: false },
        { id: 3, text: "19800", isCorrect: false },
      ],
      answer: "19980",
    },
    {
      id: "Q3",
      text: `How much simple interest accrues on a sum of N50 000 saved at a rate of 2% per annum for 4 years?`,
      options: [
        { id: 0, text: "N2500", isCorrect: false },
        { id: 1, text: "N4000", isCorrect: true },
        { id: 2, text: "N5000", isCorrect: false },
        { id: 3, text: "N3000", isCorrect: false },
      ],
      answer: "N4000",
    },
    {
      id: "Q4",
      text: `Sade bought 60 oranges for N800 and sold them in heaps of 3 at N50 per heap. Calculate her percentage profit or loss.`,
      options: [
        { id: 0, text: "20%", isCorrect: false },
        { id: 1, text: "25%", isCorrect: true },
        { id: 2, text: "15%", isCorrect: false },
        { id: 3, text: "30%", isCorrect: false },
      ],
      answer: "25%",
    },
    {
      id: "Q5",
      text: `Sonny is twice as old as Wale. Four years ago, he was four times as old as Wale. When will the sum of their ages be 66? [WASSCE]`,
      options: [
        { id: 0, text: "28 years", isCorrect: false },
        { id: 1, text: "15 years", isCorrect: false },
        { id: 2, text: "22 years", isCorrect: false },
        { id: 3, text: "24 years", isCorrect: true },
      ],
      answer: "24 years",
    },
   
    
    {
      id: "Q6",
      text: `If a:b = 3:2 and b:c = 3:1, find a:c`,
      options: [
        { id: 0, text: "5:2", isCorrect: false },
        { id: 1, text: "9:2", isCorrect: true },
        { id: 2, text: "3:2", isCorrect: false },
        { id: 3, text: "7:2", isCorrect: false },
      ],
      answer: "9:2",
    },
    {
      id: "Q7",
      text: `A rectangle whose length and breath are 6m and 5m respectively, is mistakenly measured as 5.9m by 4.9m. What is the percentage error in the measurement of the area of the rectangle?`,
      options: [
        { id: 0, text: "3.33 %", isCorrect: false },
        { id: 1, text: "3.63 %", isCorrect: true },
        { id: 2, text: "3.00 %", isCorrect: false },
        { id: 3, text: "3.13 %", isCorrect: false },
      ],
      answer: "3.63 %",
    },
    {
      id: "Q8",
      text: `The sum of the series 1+7+13+19+.... to 28 terms`,
      options: [
        { id: 0, text: "4592", isCorrect: false },
        { id: 1, text: "2296", isCorrect: true },
        { id: 2, text: "2268", isCorrect: false },
        { id: 3, text: "1968", isCorrect: false },
      ],
      answer: "2296",
    },  
    {
      id: "Q9",
      text: `Write down the number 0.0052032, correct to three significant figures`,
      options: [
        { id: 0, text: "520", isCorrect: false },
        { id: 1, text: "0.00520", isCorrect: true },
        { id: 2, text: "0.005", isCorrect: false },
        { id: 3, text: "0.00530", isCorrect: false },
      ],
      answer: "0.00520",
    },

    { id: "Q10",
  text: `A 50m high pole is between two points A and B such that the foot F of the pole is horizontally level with A and B. The angle of depression of A from the top of the pole is 30°. The distance
       between A and B is 115.5m. Find the angle of depression of B from T.`,
  options: [
    { id: 0, text: "60°", isCorrect: true },
    { id: 1, text: "30°", isCorrect: false },
    { id: 2, text: "90°", isCorrect: false },
    { id: 3, text: "50°", isCorrect: false },
  ],
  answer: "60°",
},
   
  {
    id: "Q11",
    text: `Two points A and B, 27.4m apart are on the same horizontal level with the foot F of a pole.The angles of elevation of the top T of the pole
         from A and B are 30° and 45° respectively. If the pole is somewhere between the points A and B, find its height.`,
    options: [
      { id: 0, text: "10m", isCorrect: true },
      { id: 1, text: "17m", isCorrect: false },
      { id: 2, text: "20m", isCorrect: false },
      { id: 3, text: "22m", isCorrect: false },
    ],
    answer: "10m",
  },
  {
    id: "Q12",
    text: `Two ships leave the same port. One ship sails 350km on a bearing of 150°. The other ship sails 400km on a bearing of 240°. The distance between the ships, correct to 1 d.p, is...`,
    options: [
      { id: 0, text: "500.5km", isCorrect: false },
      { id: 1, text: "100.5km", isCorrect: false },
      { id: 2, text: "531.5km", isCorrect: true },
      { id: 3, text: "231.5km", isCorrect: false },
    ],
    answer: "531.5km",
  },
  {
    id: "Q13",
    text: `The bearings of the Infirmary and Gym from Kalu’s home are 055° and 015°. Kalu jugs from his home to the Infirmary and then jugs to the
         Gym on a bearing of 275°, covering a total distance of 805m. How far is his home from the Gym correct to the nearest metre?`,
    options: [
      { id: 0, text: "300m", isCorrect: false },
      { id: 1, text: "330m", isCorrect: false },
      { id: 2, text: "320m", isCorrect: false },
      { id: 3, text: "318m", isCorrect: true },
    ],
    answer: "318m",
  },
  {
    id: "Q14",
    text: `Tinuke drives a distance of 100m downhill thereby losing a height of 60m. What is the slope of the hill to the horizontal? (Express your answer in degrees
         and minutes).`,
    options: [
      { id: 0, text: "56°55'", isCorrect: false },
      { id: 1, text: "16°53'", isCorrect: false },
      { id: 2, text: "26°5'", isCorrect: false },
      { id: 3, text: "36°53'", isCorrect: true },
    ],
    answer: "36°53'",
  },
  {
    id: "Q15",
    text: `A bag contains 16 red and 20 blue balls only. How many white balls must be added to the bag so that the probability of randomly picking a red ball is equal to 2/5?`,
    options: [
      { id: 0, text: "4", isCorrect: true },
      { id: 1, text: "8", isCorrect: false },
      { id: 2, text: "12", isCorrect: false },
      { id: 3, text: "6", isCorrect: false },
    ],
    answer: "4",
  },
  {
    id: "Q16",
    text: `Find the probability that a number picked at random from the set {43, 44, 45, ... 60} is a prime number. (UTME)`,
    options: [
      { id: 0, text: "1/9", isCorrect: false },
      { id: 1, text: "5/9", isCorrect: false },
      { id: 2, text: "1/9", isCorrect: false },
      { id: 3, text: "2/9", isCorrect: true },
    ],
    answer: "2/9",
  },
  {
    id: "Q17",
    text: `The mean and range of the set of numbers 1.20, 1.50, 1.20, 0.90, 1.40, 1.30, 0.70 and 1.40 are m and r respectively. find m + r.`,
    options: [
      { id: 0, text: "2.2", isCorrect: false },
      { id: 1, text: "0.8", isCorrect: false },
      { id: 2, text: "2.0", isCorrect: true },
      { id: 3, text: "1.2", isCorrect: false },
    ],
    answer: "2.0",
  },
  {
    id: "Q18",
    text: `The variance of the numbers 2, 3, 4, 5, 6 is ...`,
    options: [
      { id: 0, text: "1", isCorrect: false },
      { id: 1, text: "5", isCorrect: false },
      { id: 2, text: "3", isCorrect: false },
      { id: 3, text: "2", isCorrect: true },
    ],
    answer: "2",
  },
  {
    id: "Q19",
    text: `A thread is tightly wound round a square stick whose cross-sectional area is 4 sq.cm. Suppose the thread goes
         round the stick 20 complete times, calculate the length of the thread.`,
    options: [
      { id: 0, text: "140cm", isCorrect: false },
      { id: 1, text: "120cm", isCorrect: false },
      { id: 2, text: "150cm", isCorrect: false },
      { id: 3, text: "160cm", isCorrect: true },
    ],
    answer: "160cm",
  },
  {
    id: "Q20",
    text: `A circle is inscribed in a square of side 7cm. By how much does the area of the square exceed the area of the circle? (Take p = 22/7)`,
    options: [
      { id: 0, text: "12.4 sq.cm", isCorrect: false },
      { id: 1, text: "7.5 sq.cm", isCorrect: false },
      { id: 2, text: "11.5 sq.cm", isCorrect: false },
      { id: 3, text: "10.5 sq.cm", isCorrect: true },
    ],
    answer: "10.5 sq.cm",
  },
    
  ];
  export default questions