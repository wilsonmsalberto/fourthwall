const awardList = [
  {
    id: 1,
    title: 'Best Picture',
    nominees: [
      {
        id: 284054,
        type: 'movie',
      },
      {
        id: 487558,
        type: 'movie',
      },
      {
        id: 424694,
        type: 'movie',
      },
      {
        id: 375262,
        type: 'movie',
      },
      {
        id: 490132,
        type: 'movie',
      },
      {
        id: 426426,
        type: 'movie',
      },
      {
        id: 332562,
        type: 'movie',
      },
      {
        id: 429197,
        type: 'movie',
      },
    ],
  },
  {
    id: 2,
    title: 'Actor in a Leading Role',
    nominees: [
      {
        id: 3894,
        type: 'person',
        movie: 429197,
      },
      {
        id: 51329,
        type: 'person',
        movie: 332562,
      },
      {
        id: 5293,
        type: 'person',
        movie: 491472,
      },
      {
        id: 17838,
        type: 'person',
        movie: 424694,
      },
      {
        id: 110,
        type: 'person',
        movie: 490132,
      },
    ],
  },
  {
    id: 3,
    title: 'Actress in a Leading Role',
    nominees: [
      {
        id: 1775557,
        type: 'person',
        movie: 426426,
      },
      {
        id: 515,
        type: 'person',
        movie: 340613,
      },
      {
        id: 39187,
        type: 'person',
        movie: 375262,
      },
      {
        id: 237405,
        type: 'person',
        movie: 332562,
      },
      {
        id: 55536,
        type: 'person',
        movie: 401847,
      },
    ],
  },
  {
    id: 4,
    title: 'Actress in a Supporting Role',
    nominees: [
      {
        id: 9273,
        type: 'person',
        movie: 429197,
      },
      {
        id: 78883,
        type: 'person',
        movie: 426426,
      },
      {
        id: 9788,
        type: 'person',
        movie: 465914,
      },
      {
        id: 54693,
        type: 'person',
        movie: 375262,
      },
      {
        id: 3293,
        type: 'person',
        movie: 375262,
      },
    ],
  },
  {
    id: 5,
    title: 'Actor in a Supporting Role',
    nominees: [
      {
        id: 932967,
        type: 'person',
        movie: 490132,
      },
      {
        id: 1023139,
        type: 'person',
        movie: 487558,
      },
      {
        id: 16431,
        type: 'person',
        movie: 332562,
      },
      {
        id: 20766,
        type: 'person',
        movie: 401847,
      },
      {
        id: 6807,
        type: 'person',
        movie: 429197,
      },
    ],
  },
  {
    id: 6,
    title: 'Directing',
    nominees: [
      {
        id: 5281,
        type: 'person',
        movie: 487558,
      },
      {
        id: 64194,
        type: 'person',
        movie: 440298,
      },
      {
        id: 122423,
        type: 'person',
        movie: 375262,
      },
      {
        id: 11218,
        type: 'person',
        movie: 426426,
      },
      {
        id: 55710,
        type: 'person',
        movie: 429197,
      },
    ],
  },
  // {
  //   id: 7,
  //   title: 'Adapted Screenplay',
  //   nominees: [],
  // },
  // {
  //   id: 8,
  //   title: 'Original Screenplay',
  //   nominees: [],
  // },
  // {
  //   id: 9,
  //   title: 'Foreign Language Film',
  //   nominees: [],
  // },
  {
    id: 10,
    title: 'Animated Feature',
    nominees: [
      {
        id: 260513,
        type: 'movie',
      },
      {
        id: 399174,
        type: 'movie',
      },
      {
        id: 475215,
        type: 'movie',
      },
      {
        id: 404368,
        type: 'movie',
      },
      {
        id: 324857,
        type: 'movie',
      },
    ],
  },
  {
    id: 11,
    title: 'Original Score',
    nominees: [
      {
        id: 284054,
        type: 'movie',
      },
      {
        id: 487558,
        type: 'movie',
      },
      {
        id: 465914,
        type: 'movie',
      },
      {
        id: 399174,
        type: 'movie',
      },
      {
        id: 400650,
        type: 'movie',
      },
    ],
  },
  // {
  //   id: 12,
  //   title: 'Original Song',
  //   nominees: [],
  // },
  {
    id: 13,
    title: 'Documentary Short',
    nominees: [
      {
        id: 543803,
        type: 'movie',
      },
      {
        id: 510258,
        type: 'movie',
      },
      {
        id: 543809,
        type: 'movie',
      },
      {
        id: 480429,
        type: 'movie',
      },
      {
        id: 524288,
        type: 'movie',
      },
    ],
  },
  // {
  //   id: 14,
  //   title: 'Cinematography',
  //   nominees: [],
  // },
  {
    id: 15,
    title: 'Best Documentary Feature',
    nominees: [
      {
        id: 515042,
        type: 'movie',
      },
      {
        id: 490785,
        type: 'movie',
      },
      {
        id: 489985,
        type: 'movie',
      },
      {
        id: 488740,
        type: 'movie',
      },
      {
        id: 493099,
        type: 'movie',
      },
    ],
  },
  {
    id: 16,
    title: 'Production Design',
    nominees: [
      {
        id: 284054,
        type: 'movie',
      },
      {
        id: 375262,
        type: 'movie',
      },
      {
        id: 369972,
        type: 'movie',
      },
      {
        id: 400650,
        type: 'movie',
      },
      {
        id: 426426,
        type: 'movie',
      },
    ],
  },
  {
    id: 17,
    title: 'Sound Mixing',
    nominees: [
      {
        id: 284054,
        type: 'movie',
      },
      {
        id: 424694,
        type: 'movie',
      },
      {
        id: 369972,
        type: 'movie',
      },
      {
        id: 426426,
        type: 'movie',
      },
      {
        id: 332562,
        type: 'movie',
      },
    ],
  },
  {
    id: 18,
    title: 'Costume Design',
    nominees: [
      {
        id: 537996,
        type: 'movie',
      },
      {
        id: 284054,
        type: 'movie',
      },
      {
        id: 375262,
        type: 'movie',
      },
      {
        id: 400650,
        type: 'movie',
      },
      {
        id: 457136,
        type: 'movie',
      },
    ],
  },
  {
    id: 19,
    title: 'Film Editing',
    nominees: [
      {
        id: 487558,
        type: 'movie',
      },
      {
        id: 424694,
        type: 'movie',
      },
      {
        id: 375262,
        type: 'movie',
      },
      {
        id: 490132,
        type: 'movie',
      },
      {
        id: 429197,
        type: 'movie',
      },
    ],
  },
  {
    id: 20,
    title: 'Sound Editing',
    nominees: [
      {
        id: 284054,
        type: 'movie',
      },
      {
        id: 424694,
        type: 'movie',
      },
      {
        id: 369972,
        type: 'movie',
      },
      {
        id: 447332,
        type: 'movie',
      },
      {
        id: 426426,
        type: 'movie',
      },
    ],
  },
  // {
  //   id: 21,
  //   title: 'Animated Short Film',
  //   nominees: [],
  // },
  {
    id: 22,
    title: 'Live Action Short',
    nominees: [
      {
        id: 569499,
        type: 'movie',
      },
      {
        id: 504969,
        type: 'movie',
      },
      {
        id: 352157,
        type: 'movie',
      },
      {
        id: 466874,
        type: 'movie',
      },
      {
        id: 542417,
        type: 'movie',
      },
    ],
  },
  {
    id: 23,
    title: 'Makeup and Hairstyle',
    nominees: [
      {
        id: 517839,
        type: 'movie',
      },
      {
        id: 457136,
        type: 'movie',
      },
      {
        id: 429197,
        type: 'movie',
      },
    ],
  },
  {
    id: 24,
    title: 'Visual Effects',
    nominees: [
      {
        id: 299536,
        type: 'movie',
      },
      {
        id: 420814,
        type: 'movie',
      },
      {
        id: 369972,
        type: 'movie',
      },
      {
        id: 333339,
        type: 'movie',
      },
      {
        id: 348350,
        type: 'movie',
      },
    ],
  },
];

export default awardList;
