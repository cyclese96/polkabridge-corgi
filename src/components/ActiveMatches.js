import React, { useEffect } from 'react';
import GameCard from './GameCard';
import { getMatchInfo } from './../actions/SmartActions';
import Loader from './Loader';
import matches from '../data/matches';

export default function ActiveMatches() {
  const [gamesActive, setGamesActive] = React.useState([]);

  const updateMatches = async () => {
    let gameActiveCards = [];
    let data = matches.filter((singleMatch) => {
      let d = new Date();
      let matchDate = new Date(singleMatch.date);
      let endTime = d.getTime() > matchDate.getTime();
      if (endTime) {
        console.log('returning false');

        return false;
      } else {
        let matchInfo = getMatchInfo(singleMatch.id);
        console.log('MatchID:' + singleMatch.id);
        let resultDeclare = parseInt(matchInfo[5]);
        let resultCondition = resultDeclare > 0;
        if (resultCondition) {
          console.log('returning false');

          return false;
        } else {
          console.log('returning true');
          return true;
        }
      }
    });
    console.log(data);
    let dd = Math.ceil(2366237828732.3232);
    setGamesActive(data);
  };

  useEffect(() => {
    updateMatches();
  }, []);
  return (
    <div>
      {gamesActive.length === 0 && <Loader />}
      {gamesActive.length > 0 && (
        <div className="row">
          {gamesActive.map((singleCard) => {
            return (
              <div className="col-md-6">
                <div className="pb-3">
                  <GameCard item={singleCard} index={singleCard.id} key={singleCard.id} tabValue={0} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
