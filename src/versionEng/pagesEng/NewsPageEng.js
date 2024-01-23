import React from 'react';
import { newsEng } from '../../databases/NewsBase';
import '../../styles/NewsPage.scss';
import News from '../../components/News';



const NewsPage = () => {
    return (
      <div className='info'>
        <h1 className="menu_title">News</h1>
        {newsEng.map((item) => <News key={item.id} {...item} />)}
      </div>
    );
  };
  
 export default NewsPage;
