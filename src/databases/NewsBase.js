import { HandsomeEng, Handsome, JobOffer, Est, Hallow, HallowEng, EstEng, Sylwester, NewYear } from './TextsBase';

//polish version

export const news = [
  
  {
    id: 2,
    title: "Wielkanoc w Propagandzie",
    img: process.env.PUBLIC_URL + "/images/sepia.jpeg",
    text: <Est/>,
  },
  {
    id: 1,
    title: "Live Show w Propagandzie!",
    img: process.env.PUBLIC_URL + '/images/handsome-boys2.png',
    text: <Handsome/>,
  },
  {
    id: 4,
    title: "Sylwester 2023!",
    img: process.env.PUBLIC_URL + '/images/sylwek2022.png',
    text: <Sylwester/>,
  },
  {
    id: 6,
    title: "Praca w Propagandzie",
    img: process.env.PUBLIC_URL + "/images/redHeads.png",
    text: <JobOffer/>,
  },

  
  // {
  //   id: 5,
  //   title: "Święta w Propagandzie",
  //   img: process.env.PUBLIC_URL + '/images/xmas.png',
  // },
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
    img: process.env.PUBLIC_URL + "/images/sepia.jpeg",
    text: <EstEng/>,
  },
  {
    id: 1,
    title: "Live Show in Propaganda Pub!",
    img: process.env.PUBLIC_URL + '/images/handsome-boys2.png',
    text: <HandsomeEng/>,
  },
  {
    id: 4,
    title: "New Year's Eve 2023!",
    img: process.env.PUBLIC_URL + '/images/newyear.png',
    text: <NewYear/>,
  },
  
  // {
  //   id: 5,
  //   title: "Christmas at the Propaganda Pub",
  //   img: process.env.PUBLIC_URL + '/images/xmasEng.png',
  // },
  {
    id: 3,
    title: "Night of horror!",
    img: process.env.PUBLIC_URL + '/images/hallow.png',
    text: <HallowEng/>,
  },
 
];