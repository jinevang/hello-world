import React from "react";
import { InterestingBody, StyledIndexPage, StyledInteresting } from "../styled/index.tsx";
import CustomButton from "../components/CustomButton.tsx";

const CafePage = () => {
  return(<StyledInteresting>
      <img src={require('../assets/socialgrounds.jpg')} alt='Social Grounds' title='Social Grounds'/>
      <InterestingBody>
        <h2>
          Cafes & Drink Ratings
        </h2>

        <div>
          <img src={require('../assets/storycafe.jpg')} alt='Story Cafe'/>
          <div>
            <h3>Story Cafe & Tea</h3>
            <h5>Location: Bellevue, WA</h5>
            <span>Studying/Work: 7/7 | Drinks: 7/7 | Food: 5/7</span>
            <p>Egg tart is great, the iced latte is great and not too milky. They had outlets under the bar area very nice!</p>
          </div>
        </div>

        <div>
          <div>
          <h3>You She Coffee 右舍咖啡</h3>
            <h5>Location: Yuanlin, Changhua, TW</h5>
            <span>Studying/Work: 7/7 | Drinks: 7/7 | Food: 6/7</span>
            <p>Great studying view overlooking the Yuanlin park with big windows and great open space vibes, drink and food is great and good for studying or just grabbing a quick snack. Must drink: the Lemon Coffee - it sounds a little strange but its the perfect blend of a nice espresso shot and citrussy taste.</p>
          </div>
          <img src={require('../assets/youshedownstairs.jpg')}/>
        </div>

        <div>
          <img src={require('../assets/socialgrounds.jpg')}/>
          <div>
            <h3>Social Grounds</h3>
            <h5>Location: Bothell, WA</h5>
            <span>Studying/Work: 6/7 | Drinks: 6/7 | Food: 5/7</span>
            <p>Their sit down area is quite nice although a little sparse on outlets; baristas are all very nice, just wish it was open later; parking is pretty tight and sometimes hard to find, great spot for uwb students to go to tho; sometimes their pastries use some kind of alternate flour I think which is fine but sometimes it tastes off it reminds me of when I tried making almond flour pancakes and they sucked</p>
          </div>
        </div>

        <div>
          <div>
            <h3>Our Place Dessert Cafe</h3>
            <h5>Location: Edmonds, WA</h5>
            <span>Studying/Work: 6/7 | Drinks: 6/7 | Food: 5/7</span>
            <p>The cheesecake was good at first but then became rubbery???; I think the studying vibe would be better if they didn't blare their music so loudly or maybe it's just where we were sitting that was right next to the speaker</p>
          </div>
          <img src={require('../assets/ourplace.jpg')}/>
        </div>

          <h3>For more detailed cafe/boba shop ratings & drink ratings, click the following link:</h3>
          <a href="https://bit.ly/drinkratings" target="_blank">the drinks</a>
        </InterestingBody>
  </StyledInteresting>)
}

export default CafePage;