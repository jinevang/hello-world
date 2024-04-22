import React, { useState } from "react";
import List from "../components/List.tsx";
import CustomButton from "../components/CustomButton.tsx";
import { StyledIndexPage } from "../styled/index.tsx";

const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const IndexPage = () => {

  const [list, randomizeList] = useState(['Bouldering', 'TP Tea', 'Dune', 'Music', 'Tennis', 'Piano', 'Hiking']);

  return(
  <StyledIndexPage>
    <h1>Hello World</h1>
    <h4>Hi, I'm Evan. This is for CSS 480.</h4>
    <h5>Here are some nice pictures I like</h5>
    <div tabIndex={0}>
      <img src={require('../assets/chunshuitang.jpg')} alt='Chunshuitang Boba' title='春水堂 珍珠奶茶'/>
      <img src={require('../assets/zaizaipiano.jpg')} alt='teaching my cousin how to play piano?' title='teaching my cousin how to play piano???'/>
      <img src={require('../assets/taipei101.JPG')} alt='taipei 101' title='台北101'/>
      <img src={require('../assets/ibhfc.jpg')} alt='making some music' title='making some music'/>
      <img src={require('../assets/lukang.jpg')} alt='lukang township near my hometown' title='鹿港 township near my hometown'/>
      <img src={require('../assets/circlepic.jpg')} alt='circular mirror' title='circular mirror'/>
      <img src={require('../assets/greenmountain.jpg')} alt='green mountain hike' title='green mountain hike'/>
      <img src={require('../assets/lemon.jpg')} alt='lemon boulder' title='lemon shaped boulder'/>
    </div>
      <CustomButton display='Resort favorite things (best to worst???)' onClick={(e) => {
        e.preventDefault();
        let newList = [...list];
        shuffle(newList);
        randomizeList(newList);
      }}/>
      <List items={list}/>
    </StyledIndexPage>
  );
}

export default IndexPage;