import './SeasonDisplay.css'; 
import React from 'react';

// refactoring the repeated message and properties in seasonDisplay
const seasonConfig = {
  Summer: {
    message: 'Today\'s the beach day!!',
    iconName: 'sun'
  },
  Winter: {
    message: 'It\'s chilly today isn\'t it!',
    iconName: 'snowflake'
  }
};

const getSeason = (latitudeProp, month) => {
  if(month > 2 && month < 9){
    return latitudeProp > 0 ? 'Summer' : 'Winter';
  } else {
    return latitudeProp > 0 ? 'Winter' : 'Summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitudeProp, new Date().getMonth());
  // const message = season === 'Winter' ? 'It\'s Chilly init?' : 'Beach day wohoo!';
  // const icon = season === 'Winter' ? 'snowflake' : 'sun';
  const { message, iconName } = seasonConfig[season];     // Destructuring object and array  

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{message}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
 