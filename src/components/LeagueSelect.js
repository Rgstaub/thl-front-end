//eslint-disable import/first
import React from 'react';
import PropTypes from 'prop-types';
// import ('./LeagueSelect.css');
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

function LeagueSelect(props) {
  //const { currentLeague, allLeagues, handleLeagueSelection } = props;

  // const leaguesArr = allLeagues.map( league => {
  //   if (league.id !== currentLeague.id) {
  //     return(
  //       <a
  //         value={league.id} 
  //         key={league.id}
  //         name={league.name}
  //         onClick={console.log("wha?")}
  //       >
  //         {league.name}</a>
  //     )
  //   } else return('')
  // }); 

  const handleClick = (e) => {
    e.preventDefault();
    console.log('CLICK');
  }

  return (
    <div>

      <p
        //value={currentLeague.id} 
        //key={currentLeague.id}
        onClick={console.log("FUCK")}

      >
        {"Current League"}</p>
        {/* {leaguesArr} */}

    </div>
  );
}

LeagueSelect.propTypes = {
  selectedLeague: PropTypes.object,
  otherLeagues: PropTypes.object,
  selectLeague: PropTypes.func
};

export default LeagueSelect;