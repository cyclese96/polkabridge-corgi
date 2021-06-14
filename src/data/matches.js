const matches = [
  {
    id: 0,
    team1: {
      name: 'Turkey',
      image: 'https://www.countryflags.io/tr/shiny/64.png',
    },
    team2: {
      name: 'Italy',
      image: 'https://www.countryflags.io/it/shiny/64.png',
    },
    date: '11 June, 2021 19:00:00 UTC',
  },
  {
    id: 1,
    team1: {
      name: 'Wales',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Wales_%281959%29.svg/2560px-Flag_of_Wales_%281959%29.svg.png',
    },
    team2: {
      name: 'Switzerland',
      image: 'https://www.countryflags.io/sh/shiny/64.png',
    },
    date: '12 June, 2021 13:00:00 UTC',
  },
  {
    id: 2,
    team1: {
      name: 'Denmark',
      image: 'https://www.countryflags.io/dk/shiny/64.png',
    },
    team2: {
      name: 'Finland',
      image: 'https://www.countryflags.io/fi/shiny/64.png',
    },
    date: '12 June, 2021 16:00:00 UTC',
  },
  {
    id: 3,
    team1: {
      name: 'Belgium',
      image: 'https://www.countryflags.io/be/shiny/64.png',
    },
    team2: {
      name: 'Russia',
      image: 'https://www.countryflags.io/ru/shiny/64.png',
    },
    date: '12 June, 2021 19:00:00 UTC',
  },
  {
    id: 4,
    team1: {
      name: 'England',
      image: 'https://www.countryflags.io/gb/shiny/64.png',
    },
    team2: {
      name: 'Croatia',
      image: 'https://www.countryflags.io/hr/shiny/64.png',
    },
    date: '13 June, 2021 13:00:00 UTC',
  },
  {
    id: 5,
    team1: {
      name: 'Austria',
      image: 'https://www.countryflags.io/at/shiny/64.png',
    },
    team2: {
      name: 'North Macedonia',
      image: 'https://www.countryflags.io/mk/shiny/64.png',
    },
    date: '13 June, 2021 16:00:00 UTC',
  },
  {
    id: 6,
    team1: {
      name: 'Netherlands',
      image: 'https://www.countryflags.io/nl/shiny/64.png',
    },
    team2: {
      name: 'Ukraine',
      image: 'https://www.countryflags.io/ua/shiny/64.png',
    },
    date: '13 June, 2021 19:00:00 UTC',
  },
  {
    id: 7,
    team1: {
      name: 'Scotland',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png',
    },
    team2: {
      name: 'Czech Republic',
      image: 'https://www.countryflags.io/cz/shiny/64.png',
    },
    date: '14 June, 2021 13:00:00 UTC',
  },
  {
    id: 8,
    team1: {
      name: 'Poland',
      image: 'https://www.countryflags.io/pl/shiny/64.png',
    },
    team2: {
      name: 'Slovakia',
      image: 'https://www.countryflags.io/sk/shiny/64.png',
    },
    date: '14 June, 2021 16:00:00 UTC',
  },
  {
    id: 9,
    team1: {
      name: 'Spain',
      image: 'https://www.countryflags.io/es/shiny/64.png',
    },
    team2: {
      name: 'Sweden',
      image: 'https://www.countryflags.io/se/shiny/64.png',
    },
    date: '14 June, 2021 19:00:00 UTC',
  },
  {
    id: 10,
    team1: {
      name: 'Hungary',
      image: 'https://www.countryflags.io/hu/shiny/64.png',
    },
    team2: {
      name: 'Portugal',
      image: 'https://www.countryflags.io/pt/shiny/64.png',
    },
    date: '15 June, 2021 16:00:00 UTC',
  },
  {
    id: 11,
    team1: {
      name: 'France',
      image: 'https://www.countryflags.io/fr/shiny/64.png',
    },
    team2: {
      name: 'Germany',
      image: 'https://www.countryflags.io/de/shiny/64.png',
    },
    date: '15 June, 2021 19:00:00 UTC',
  },
  {
    id: 12,
    team1: {
      name: 'Finland',
      image: 'https://www.countryflags.io/fi/shiny/64.png',
    },
    team2: {
      name: 'Russia',
      image: 'https://www.countryflags.io/ru/shiny/64.png',
    },
    date: '16 June, 2021 13:00:00 UTC',
  },
  {
    id: 13,
    team1: {
      name: 'Turkey',
      image: 'https://www.countryflags.io/tr/shiny/64.png',
    },
    team2: {
      name: 'Wales',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Wales_%281959%29.svg/2560px-Flag_of_Wales_%281959%29.svg.png',
    },
    date: '16 June, 2021 16:00:00 UTC',
  },
  // {
  //   id: 14,
  //   team1: {
  //     name: 'Italy',
  //     image: 'https://www.countryflags.io/it/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Switzerland',
  //     image: 'https://www.countryflags.io/sh/shiny/64.png',
  //   },
  //   date: '16 June, 2021 19:00:00 UTC',
  // },
  // {
  //   id: 15,
  //   team1: {
  //     name: 'Ukraine',
  //     image: 'https://www.countryflags.io/ua/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'North Macedonia',
  //     image: 'https://www.countryflags.io/mk/shiny/64.png',
  //   },
  //   date: '17 June, 2021 13:00:00 UTC',
  // },
  // {
  //   id: 16,
  //   team1: {
  //     name: 'Denmark',
  //     image: 'https://www.countryflags.io/dk/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Belgium',
  //     image: 'https://www.countryflags.io/be/shiny/64.png',
  //   },
  //   date: '17 June, 2021 16:00:00 UTC',
  // },
  // {
  //   id: 17,
  //   team1: {
  //     name: 'Netherlands',
  //     image: 'https://www.countryflags.io/nl/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Austria',
  //     image: 'https://www.countryflags.io/au/shiny/64.png',
  //   },
  //   date: '17 June, 2021 19:00:00 UTC',
  // },
  // {
  //   id: 18,
  //   team1: {
  //     name: 'Sweden',
  //     image: 'https://www.countryflags.io/se/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Slovakia',
  //     image: 'https://www.countryflags.io/sk/shiny/64.png',
  //   },
  //   date: '18 June, 2021 13:00:00 UTC',
  // },
  // {
  //   id: 19,
  //   team1: {
  //     name: 'Croatia',
  //     image: 'https://www.countryflags.io/hr/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Czech Republic',
  //     image: 'https://www.countryflags.io/cz/shiny/64.png',
  //   },
  //   date: '18 June, 2021 16:00:00 UTC',
  // },
  // {
  //   id: 20,
  //   team1: {
  //     name: 'England',
  //     image: 'https://www.countryflags.io/gb/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Scotland',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png',
  //   },
  //   date: '18 June, 2021 19:00:00 UTC',
  // },
  // {
  //   id: 21,
  //   team1: {
  //     name: 'Hungary',
  //     image: 'https://www.countryflags.io/hu/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'France',
  //     image: 'https://www.countryflags.io/fr/shiny/64.png',
  //   },
  //   date: '19 June, 2021 13:00:00 UTC',
  // },
  // {
  //   id: 22,
  //   team1: {
  //     name: 'Portugal',
  //     image: 'https://www.countryflags.io/pt/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Germany',
  //     image: 'https://www.countryflags.io/de/shiny/64.png',
  //   },
  //   date: '19 June, 2021 16:00:00 UTC',
  // },
  // {
  //   id: 23,
  //   team1: {
  //     name: 'Spain',
  //     image: 'https://www.countryflags.io/es/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Poland',
  //     image: 'https://www.countryflags.io/pl/shiny/64.png',
  //   },
  //   date: '19 June, 2021 19:00:00 UTC',
  // },
  // {
  //   id: 24,
  //   team1: {
  //     name: 'Italy',
  //     image: 'https://www.countryflags.io/it/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Wales',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Wales_%281959%29.svg/2560px-Flag_of_Wales_%281959%29.svg.png',
  //   },
  //   date: '20 June, 2021 16:00:00 UTC',
  // },
  // {
  //   id: 25,
  //   team1: {
  //     name: 'Switzerland',
  //     image: 'https://www.countryflags.io/ch/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Turkey',
  //     image: 'https://www.countryflags.io/tr/shiny/64.png',
  //   },
  //   date: '20 June, 2021 16:00:00 UTC',
  // },
  // {
  //   id: 26,
  //   team1: {
  //     name: 'Ukrain',
  //     image: 'https://www.countryflags.io/ua/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Austria',
  //     image: 'https://www.countryflags.io/at/shiny/64.png',
  //   },
  //   date: '21 June, 2021 16:00:00 UTC',
  // },
  // {
  //   id: 27,
  //   team1: {
  //     name: 'North Macedonia',
  //     image: 'https://www.countryflags.io/mk/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Netherlands',
  //     image: 'https://www.countryflags.io/an/shiny/64.png',
  //   },
  //   date: '21 June, 2021 16:00:00 UTC',
  // },
  // {
  //   id: 28,
  //   team1: {
  //     name: 'Russia',
  //     image: 'https://www.countryflags.io/ru/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Denmark',
  //     image: 'https://www.countryflags.io/dk/shiny/64.png',
  //   },
  //   date: '21 June, 2021 19:00:00 UTC',
  // },
  // {
  //   id: 29,
  //   team1: {
  //     name: 'Finland',
  //     image: 'https://www.countryflags.io/fi/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Belgium',
  //     image: 'https://www.countryflags.io/be/shiny/64.png',
  //   },
  //   date: '21 June, 2021 19:00:00 UTC',
  // },
  // {
  //   id: 30,
  //   team1: {
  //     name: 'Croatia',
  //     image: 'https://www.countryflags.io/hr/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Scotland',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png',
  //   },
  //   date: '22 June, 2021 19:00:00 UTC',
  // },
  // {
  //   id: 31,
  //   team1: {
  //     name: 'Czech Republic',
  //     image: 'https://www.countryflags.io/cz/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'England',
  //     image: 'https://www.countryflags.io/gb/shiny/64.png',
  //   },
  //   date: '22 June, 2021 19:00:00 UTC',
  // },
  // {
  //   id: 32,
  //   team1: {
  //     name: 'Sweden',
  //     image: 'https://www.countryflags.io/se/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Poland',
  //     image: 'https://www.countryflags.io/pl/shiny/64.png',
  //   },
  //   date: '23 June, 2021 16:00:00 UTC',
  // },
  // {
  //   id: 33,
  //   team1: {
  //     name: 'Slovakia',
  //     image: 'https://www.countryflags.io/sk/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Spain',
  //     image: 'https://www.countryflags.io/es/shiny/64.png',
  //   },
  //   date: '23 June, 2021 16:00:00 UTC',
  // },
  // {
  //   id: 34,
  //   team1: {
  //     name: 'Portual',
  //     image: 'https://www.countryflags.io/pt/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'France',
  //     image: 'https://www.countryflags.io/fr/shiny/64.png',
  //   },
  //   date: '23 June, 2021 19:00:00 UTC',
  // },
  // {
  //   id: 35,
  //   team1: {
  //     name: 'Germany',
  //     image: 'https://www.countryflags.io/de/shiny/64.png',
  //   },
  //   team2: {
  //     name: 'Hungary',
  //     image: 'https://www.countryflags.io/hu/shiny/64.png',
  //   },
  //   date: '23 June, 2021 19:00:00 UTC',
  // }
];

export default matches;
