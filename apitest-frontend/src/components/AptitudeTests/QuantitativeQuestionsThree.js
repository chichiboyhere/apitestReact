
  const questions = [
    
    {
      id: "Q1",
      text: `\\begin{aligned} \\text{Simplify } 2\\frac{5}{12} - 1\\frac{7}{8} \\times \\frac{4}{5}\\end{aligned}`,
      options: [
        { id: 0, text: "1/12", isCorrect: false },
        { id: 1, text: "11/12", isCorrect: true },
        { id: 2, text: "5/12", isCorrect: false },
        { id: 3, text: "7/12", isCorrect: false },
      ],
      answer: "11/12",
    },
    
    {
      id: "Q2",
      text: `\\begin{aligned} \\text{How many multiples of 4 lie between } \\\\ \\text{200 and 600 (inclusive)? } \\end{aligned}`,
      options: [
        { id: 0, text: "121", isCorrect: false },
        { id: 1, text: "98", isCorrect: false },
        { id: 2, text: "101", isCorrect: true },
        { id: 3, text: "100", isCorrect: false },
      ],
      answer: "101",
    },
    {
      id: "Q3",
      text: `\\text{The second term of a geometric series is} \\\\  \\text{ 4 while the fourth term is 16. } \\\\  \\text{Find the sum of the first five terms.} \\\\  \\text{ (WASSCE)}`,
      options: [
        { id: 0, text: "62", isCorrect: true },
        { id: 1, text: "66", isCorrect: false },
        { id: 2, text: "68", isCorrect: false },
        { id: 3, text: "64", isCorrect: false },
      ],
      answer: "62",
    },
    {
      id: "Q4",
      text: `\\text{The 3rd and 6th terms of a G.P are –1} \\\\  \\text{ and } -\\frac{1}{64} \\text{ respectively. Find the G.P}`,
      options: [
        { id: 0, text: `-16, -2, -1/4, -1/32...`, isCorrect: false },
        { id: 1, text: `-16,-8,-4,-2...`, isCorrect: false },
        { id: 2, text: `-16,-4,-1, -1/4...`, isCorrect: true },
        { id: 3, text: `-16, -8/3,-4/9,-2/27...`, isCorrect: false },
      ],
      answer: "-16,-4,-1,-1/4...",
    },
    {
      id: "Q5",
      text: `\\text{If y varies directly as the square root of} \\\\  \\text{ x and y = 3 when x = 16,} \\\\  \\text{ calculate y when x = 64 (UTME)}`,
      options: [
        { id: 0, text: "12", isCorrect: false },
        { id: 1, text: "6", isCorrect: true },
        { id: 2, text: "4", isCorrect: false },
        { id: 3, text: "2", isCorrect: false },
      ],
      answer: "6",
    },
    {
      id: "Q6",
      text: `\\text{y is inversely proportional to x and} \\\\  \\text{y = 4 when x =} \\frac{1}{2} \\text{. Find x when y = 10} \\\\  \\text{ (UTME)}`,
      options: [
        { id: 0, text: "1/2", isCorrect: false },
        { id: 1, text: "1/3", isCorrect: false },
        { id: 2, text: "1/5", isCorrect: true },
        { id: 3, text: "1/4", isCorrect: false },
      ],
      answer: "1/5",
    },
    {
      id: "Q7",
      text: `\\text{p is partly constant and partly varies as} \\\\  \\sqrt{q} \\text{. If p = 15 when q = 25 and p = 19 }\\\\  \\text{  when q = 49, find p when q = 81}.`,
      options: [
        { id: 0, text: "23", isCorrect: true },
        { id: 1, text: "47", isCorrect: false },
        { id: 2, text: "25", isCorrect: false },
        { id: 3, text: "32", isCorrect: false },
      ],
      answer: "23",
    },
    {
      id: "Q8",
      text: `\\text{List all integers satisfying the} \\\\  \\text{inequality -2 < 2x - 8 < 4}`,
      options: [
        { id: 0, text: "3, 4, 5, 6", isCorrect: false },
        { id: 1, text: "3, 4, 5", isCorrect: false },
        { id: 2, text: "4, 5", isCorrect: true },
        { id: 3, text: "3", isCorrect: false },
      ],
      answer: "4, 5",
    },
    {
      id: "Q9",
      text: `\\text{Find the value of x satisfying} \\\\  \\frac{x}{2} - \\frac{1}{3} < \\frac{2x}{5} + \\frac{1}{6} (UME)`,
      options: [
        { id: 0, text: "x > 5", isCorrect: false },
        { id: 1, text: "x < 6", isCorrect: false },
        { id: 2, text: "x > 8", isCorrect: false },
        { id: 3, text: "x < 5", isCorrect: true },
      ],
      answer: "x < 5",
    },
    {
      id: "Q10",
      text:`\\text{Evaluate } \\int_0^\\pi(-2sec^2x)dx`,
      options: [
        { id: 0, text: "- 4", isCorrect: false },
        { id: 1, text: "1", isCorrect: false },
        { id: 2, text: "2", isCorrect: false },
        { id: 3, text: "0", isCorrect: true },
      ],
      answer: "0",
    },
    {
      id: "Q11",
      text:`\\text{Simplify the following surds: } \\\\ \\sqrt{2}- \\sqrt{32} + \\sqrt{128}`,
      options: [
        { id: 0, text: `4\\sqrt{2}`, isCorrect: false },
        { id: 1, text: `8\\sqrt{2}`, isCorrect: false },
        { id: 2, text: `5\\sqrt{2}`, isCorrect: true },
        { id: 3, text: `10\\sqrt{2}`, isCorrect: false },
      ],
      answer: `5\\sqrt{2}`,
    },
    {
      id: "Q12",
      text:`\\text{Simplify } \\frac{3^n - 3^{n-1}}{3^3 \\times 3^n - 27 \\times 3^{n-1}} \\text{(UME )}`,
      options: [
        { id: 0, text: "1", isCorrect: false },
        { id: 1, text: "0", isCorrect: false },
        { id: 2, text: "1/27", isCorrect: true },
        { id: 3, text: "2/27", isCorrect: false },
      ],
      answer: "1/27",
    },
    {
      id: "Q13",
      text:`\\text{If }27^x = 9^y, \\text{find the value of } \\frac{x}{y} \\\\ \\text{(WASSCE)}`,
      options: [
        { id: 0, text: "2/5", isCorrect: false },
        { id: 1, text: "2/3", isCorrect: true },
        { id: 2, text: "3/5", isCorrect: false },
        { id: 3, text: "1/4", isCorrect: false },
      ],
      answer: "2/3",
    },
    {
      id: "Q14",
      text:`\\text{Evaluate }log_38 \\times log_29`,
      options: [
        { id: 0, text: "6", isCorrect: true },
        { id: 1, text: "3", isCorrect: false },
        { id: 2, text: "5", isCorrect: false },
        { id: 3, text: "4", isCorrect: false },
      ],
      answer: "6",
    },
    {
      id: "Q15",
      text:`\\text{If }log_{10}2 = 0.3010 \\text{ and } log_{10}3 = 0.4771, \\\\ \\text{ evaluate without using logarithm tables,} \\\\ log_{10}4.5 \\text{(UME)}.`,
      options: [
        { id: 0, text: "0.6532", isCorrect: true },
        { id: 1, text: "0.9542", isCorrect: false },
        { id: 2, text: "0.6020", isCorrect: false },
        { id: 3, text: "0.3010", isCorrect: false },
      ],
      answer: "0.6532",
    },
    {
      id: "Q16",
      text:`\\text{If } y = 3x^3 - 5x^2 + 7x - 11, \\text{find }\\frac{dy}{dx}.`,
      options: [
        { id: 0, text: `9x^2 - 10x`, isCorrect: false },
        { id: 1, text: `9x^2  + 7`, isCorrect: false },
        { id: 2, text: `9x^2 - 7`, isCorrect: false },
        { id: 3, text: `9x^2 - 10x + 7`, isCorrect: true },
      ],
      answer: `9x^2 - 10x + 7`,
    },
    {
      id: "Q17",
      text:`\\text{The radius r of a circular disc is increasing } \\\\ \\text{at the rate of 0.5 cm/sec. At what rate is } \\\\ \\text{the area of the disc increasing when } \\\\ \\text{its radius is 6cm? (UME)}`,
      options: [
        { id: 0, text: `5\\pi cm^2/s`, isCorrect: false },
        { id: 1, text: `6\\pi cm^2/s`, isCorrect: true },
        { id: 2, text: `4\\pi cm^2/s`, isCorrect: false },
        { id: 3, text: `3\\pi cm^2/s`, isCorrect: false },
      ],
      answer: `6\\pi cm^2/s`,
    },
    {
      id: "Q18",
      text:`\\text{Evaluate } \\int sin3x.dx  (UME)`,
      options: [
        { id: 0, text: "-1/3sin3x + c", isCorrect: false },
        { id: 1, text: "1/3cos3x + c", isCorrect: false },
        { id: 2, text: "-1/3cos3x + c", isCorrect: true },
        { id: 3, text: "1/3sin3x + c", isCorrect: false },
      ],
      answer: "-1/3cos3x + c",
    },
    {
      id: "Q19",
      text:`\\text{Simplify } \\frac{1}{2} +  \\frac{3}{4} \\text{ of }\\frac{24}{9} \\div \\frac{4}{7}-6.`,
      options: [
        { id: 0, text: "0", isCorrect: false },
        { id: 1, text: "1", isCorrect: false },
        { id: 2, text: "-2", isCorrect: true },
        { id: 3, text: "-1", isCorrect: false },
      ],
      answer: "-2",
    },
    {
      id: "Q20",
      text:`\\text{If A = } \\bigl(\\begin{smallmatrix} 2&  4 \\\\0&-11 \\end{smallmatrix}\\bigr) \\text{ and B = } \\bigl(\\begin{smallmatrix} -5&6 \\\\3&-9 \\end{smallmatrix}\\bigr), \\\\ \\text{then} \\left| 2A - B \\right| \\text{ is }`,
      options: [
        { id: 0, text: "111", isCorrect: false },
        { id: 1, text: "-111", isCorrect: true },
        { id: 2, text: "-123", isCorrect: false },
        { id: 3, text: "-123", isCorrect: false },
      ],
      answer: "-111",
    },
  ];
  export default questions