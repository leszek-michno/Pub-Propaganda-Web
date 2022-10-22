import React from 'react';
import { ContactLink, GalleryLink, MenuLink, NewsLink } from '../componens/HomePageLinksEng';

const HomePageEng = () => {
    return (
        <div className="homepage">
          <h2>One of the oldest pubs in Krakow's Kazimierz</h2>
          <div className="icons">
            <NewsLink />
            <MenuLink/>
            <ContactLink/>
            <GalleryLink/>  
          </div>
        </div>
      );
}
 
export default HomePageEng;