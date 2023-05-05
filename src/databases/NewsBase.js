// import img1 from '../images/Tshirt.webp';
import img2 from "../images/img13.jpg";
import img3 from '../images/hallow.png';
import img6 from '../images/sylwek2022.png';
import img4 from '../images/newyear.png';
import img5 from '../images/xmas.png';
import img7 from '../images/xmasEng.png';
import img8 from "../images/redHeads.png";
import { JobOffer, Est, Hallow, HallowEng, EstEng, Sylwester, NewYear } from './TextsBase';


//polish version

export const news = [

  {
    id: 6,
    title: "Praca w Propagandzie",
    img: img8,
    text: <JobOffer/>,
  },

  {
    id: 2,
    title: "Wielkanoc w Propagandzie",
    img: img2,
    text: <Est/>,
  },
  // {
  //   id: 1,
  //   title: "Sprzedajemy koszulki z naszym logo",
  //   img: img1,
  //   text: <Tshirt/>,
  // },
  {
    id: 4,
    title: "Sylwester 2022!",
    img: img6,
    text: <Sylwester/>,
  },

  {
    id: 5,
    title: "Święta w Propagandzie",
    img: img5,
  },

  {
    id: 3,
    title: "Noc pełna strachu!",
    img: img3,
    text: <Hallow/>,
  },
 
];


//english version
export const newsEng = [

  {
    id: 2,
    title: "Easter in Propaganda",
    img: img2,
    text: <EstEng/>,
  },
  // {
  //   id: 1,
  //   title: 'T-shirts with our logo',
  //   img: img1,
  //   text: <TshirtEng/>,
  // },
  {
    id: 4,
    title: "New Year's Eve 2022!",
    img: img4,
    text: <NewYear/>,
  },
  {
    id: 5,
    title: "Christmas at the Propaganda Pub",
    img: img7,
  },
  {
    id: 3,
    title: "Night of horror!",
    img: img3,
    text: <HallowEng/>,
  },
 
];