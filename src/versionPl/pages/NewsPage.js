import React from 'react';
import { news } from '../../databases/NewsBase';
import News from '../componets/News';
import '../../styles/NewsPage.scss';



const NewsPage = () => {
    return (
      <div className='info'>
        <h1 className="menu_title">Aktualności</h1>
        {news.map((item) => <News key={item.id} {...item} />)}
      </div>
    );
  };
  
 export default NewsPage;
