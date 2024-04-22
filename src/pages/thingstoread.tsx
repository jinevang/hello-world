import React from "react";
import List from "../components/List.tsx";

const thingsToRead = [
  {
    title: 'Mazda 3 Sedan Compare Vehicles',
    link: 'https://www.mazdausa.com/vehicles/mazda3-sedan/compare-vehicle-specs-and-trims'
  },
  {
    title: 'Figma Design Basics',
    link:'https://www.figma.com/resource-library/design-basics/'
  },
  {
    title: 'Notion Careers',
    link: 'https://www.notion.so/careers',
  },
  {
    title: '說好的幸福呢 Sheet Music',
    link: 'https://www.91pu.com.tw/song/2016/0114/2404.html',
  },
  {
    title: 'Bubble Tea + Drink Ratings List',
    link: 'https://bit.ly/bobaratings',
  },
  {
    title: 'Keyboard Shortcuts - W3Schools',
    link: 'https://www.w3schools.com/tags/ref_keyboardshortcuts.asp',
  },
  {
    title: 'Dutch Bros Menu',
    link: 'https://www.dutchbros.com/menu',
  },
  {
    title: 'Album Ratings List',
    link: 'https://bit.ly/albumratings',
  },
  {
    title: 'Mercury\'s Coffee Co Menu',
    link: 'https://mercurys.com/pages/drink-menu-1',
  },
  {
    title: 'Seattle Bouldering Project U District Location Annoucement',
    link: 'https://boulderingproject.com/u-district/'
  }
];

const ThingsToRead = () => {
  return(<>
  <h1>Things to Read</h1>
  <h5>All links will open an external site in a new tab</h5>
  <List items={thingsToRead.map((i) => <a href={i.link} target='_blank'>{i.title}</a>)}/>
  </>)
};

export default ThingsToRead;