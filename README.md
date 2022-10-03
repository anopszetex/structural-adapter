# structural-adapter
example structural design pattern that allows objects with incompatible interfaces to collaborate.

## Project Setup
Clone the repository:
```sh
git@github.com:anopszetex/structural-adapter.git
```

Make it your current working directory:
```sh
cd structural-adapter
```

Install dependencies:
```sh
npm i
```

## To start the app
```sh
npm run start
```

Results similiar to:
```sh
$ node src/index.js
┌─────────┬────┬─────────────────────────────┬───────────┬─────────┬──────────────────────────────────────┬───────────┬─────────────────────────────────┬─────────────────────────────────┐
│ (index) │ id │            name             │  status   │ species │                 type                 │  gender   │             origin              │            location             │
├─────────┼────┼─────────────────────────────┼───────────┼─────────┼──────────────────────────────────────┼───────────┼─────────────────────────────────┼─────────────────────────────────┤
│    0    │ 1  │       'Rick Sanchez'        │  'Alive'  │ 'Human' │                  ''                  │  'Male'   │         'Earth (C-137)'         │ 'Earth (Replacement Dimension)' │
│    1    │ 2  │        'Morty Smith'        │  'Alive'  │ 'Human' │                  ''                  │  'Male'   │         'Earth (C-137)'         │ 'Earth (Replacement Dimension)' │
│    2    │ 3  │       'Summer Smith'        │  'Alive'  │ 'Human' │                  ''                  │ 'Female'  │ 'Earth (Replacement Dimension)' │ 'Earth (Replacement Dimension)' │
│    3    │ 4  │        'Beth Smith'         │  'Alive'  │ 'Human' │                  ''                  │ 'Female'  │ 'Earth (Replacement Dimension)' │ 'Earth (Replacement Dimension)' │
│    4    │ 5  │        'Jerry Smith'        │  'Alive'  │ 'Human' │                  ''                  │  'Male'   │ 'Earth (Replacement Dimension)' │ 'Earth (Replacement Dimension)' │
│    5    │ 6  │ 'Abadango Cluster Princess' │  'Alive'  │ 'Alien' │                  ''                  │ 'Female'  │           'Abadango'            │           'Abadango'            │
│    6    │ 7  │     'Abradolf Lincler'      │ 'unknown' │ 'Human' │         'Genetic experiment'         │  'Male'   │ 'Earth (Replacement Dimension)' │  'Testicle Monster Dimension'   │
│    7    │ 8  │     'Adjudicator Rick'      │  'Dead'   │ 'Human' │                  ''                  │  'Male'   │            'unknown'            │       'Citadel of Ricks'        │
│    8    │ 9  │      'Agency Director'      │  'Dead'   │ 'Human' │                  ''                  │  'Male'   │ 'Earth (Replacement Dimension)' │ 'Earth (Replacement Dimension)' │
│    9    │ 10 │        'Alan Rails'         │  'Dead'   │ 'Human' │ 'Superhuman (Ghost trains summoner)' │  'Male'   │            'unknown'            │       "Worldender's lair"       │
│   10    │ 11 │      'Albert Einstein'      │  'Dead'   │ 'Human' │                  ''                  │  'Male'   │         'Earth (C-137)'         │ 'Earth (Replacement Dimension)' │
│   11    │ 12 │         'Alexander'         │  'Dead'   │ 'Human' │                  ''                  │  'Male'   │         'Earth (C-137)'         │         'Anatomy Park'          │
│   12    │ 13 │       'Alien Googah'        │ 'unknown' │ 'Alien' │                  ''                  │ 'unknown' │            'unknown'            │ 'Earth (Replacement Dimension)' │
│   13    │ 14 │        'Alien Morty'        │ 'unknown' │ 'Alien' │                  ''                  │  'Male'   │            'unknown'            │       'Citadel of Ricks'        │
│   14    │ 15 │        'Alien Rick'         │ 'unknown' │ 'Alien' │                  ''                  │  'Male'   │            'unknown'            │       'Citadel of Ricks'        │
│   15    │ 16 │       'Amish Cyborg'        │  'Dead'   │ 'Alien' │              'Parasite'              │  'Male'   │            'unknown'            │ 'Earth (Replacement Dimension)' │
│   16    │ 17 │           'Annie'           │  'Alive'  │ 'Human' │                  ''                  │ 'Female'  │         'Earth (C-137)'         │         'Anatomy Park'          │
│   17    │ 18 │       'Antenna Morty'       │  'Alive'  │ 'Human' │        'Human with antennae'         │  'Male'   │            'unknown'            │       'Citadel of Ricks'        │
│   18    │ 19 │       'Antenna Rick'        │ 'unknown' │ 'Human' │        'Human with antennae'         │  'Male'   │            'unknown'            │            'unknown'            │
│   19    │ 20 │  'Ants in my Eyes Johnson'  │ 'unknown' │ 'Human' │    'Human with ants in his eyes'     │  'Male'   │            'unknown'            │    'Interdimensional Cable'     │
└─────────┴────┴─────────────────────────────┴───────────┴─────────┴──────────────────────────────────────┴───────────┴─────────────────────────────────┴─────────────────────────────────┘
┌─────────┐
│ (index) │
├─────────┤
└─────────┘
```
## To run tests
```sh
# run all tests
npm run test

# run coverage
npm run test:cov
```
