import React from 'react';
import { ContactLink, GalleryLink, MenuLink, NewsLink } from '../componens/HomePageLinksEng';

const HomePageEng = () => {
    return (
        <div className="homepage">
          <h2>Place not for everybody</h2>
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