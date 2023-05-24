import { JobOffer, Est, Hallow, HallowEng, EstEng, Sylwester, NewYear } from './TextsBase';

//polish version

export const news = [

  {
    id: 6,
    title: "Praca w Propagandzie",
    img: process.env.PUBLIC_URL + "/images/redHeads.png",
    text: <JobOffer/>,
  },

  {
    id: 2,
    title: "Wielkanoc w Propagandzie",
    img: process.env.PUBLIC_URL + "/images/img13.jpg",
    text: <Est/>,
  },
  {
    id: 4,
    title: "Sylwester 2022!",
    img: process.env.PUBLIC_URL + '/images/sylwek2022.png',
    text: <Sylwester/>,
  },
  {
    id: 5,
    title: "Święta w Propagandzie",
    img: process.env.PUBLIC_URL + '/images/xmas.png',
  },
  {
    id: 3,
    title: "Noc pełna strachu!",
    img: process.env.PUBLIC_URL + '/images/hallow.png',
    text: <Hallow/>,
  },
 
];


//english version
export const newsEng = [

  {
    id: 2,
    title: "Easter in Propaganda",
    img: process.env.PUBLIC_URL + "/images/img13.jpg",
    text: <EstEng/>,
  },

  {
    id: 4,
    title: "New Year's Eve 2022!",
    img: process.env.PUBLIC_URL + '/images/newyear.png',
    text: <NewYear/>,
  },
  {
    id: 5,
    title: "Christmas at the Propaganda Pub",
    img: process.env.PUBLIC_URL + '/images/xmasEng.png',
  },
  {
    id: 3,
    title: "Night of horror!",
    img: process.env.PUBLIC_URL + '/images/hallow.png',
    text: <HallowEng/>,
  },
 
];