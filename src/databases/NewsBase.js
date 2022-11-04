import img1 from '../images/Tshirt.webp';
import img2 from "../images/img13.jpg";
import img3 from '../images/hallow.png';
import { Tshirt, Est, Hallow, HallowEng, TshirtEng, EstEng } from './TextsBase';


export const news = [
 
  
  {
    id: 1,
    title: "Sprzedajemy koszulki z naszym logo",
    img: img1,
    text: <Tshirt/>,
  },
  {
    id: 3,
    title: "Noc pełna strachu!",
    img: img3,
    text: <Hallow/>,
  },
  {
    id: 2,
    title: "Wielkanoc w Propagandzie",
    img: img2,
    text: <Est/>,
  },
];

export const newsEng = [

  {
    id: 1,
    title: 'T-shirts with our logo',
    img: img1,
    text: <TshirtEng/>,
  },
  {
    id: 3,
    title: "Night of horror!",
    img: img3,
    text: <HallowEng/>,
  },
  {
    id: 2,
    title: "Easter in Propaganda",
    img: img2,
    text: <EstEng/>,
  },
];