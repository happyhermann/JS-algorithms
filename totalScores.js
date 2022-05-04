const matchDay = ["2:1", "3:0", "0:0", "0:1", "1:0"];

 

function points(games) {
    // totalPoints will store the accumulated points
    let totalPoints = 0;
      
      // loop through the games array to get the scores
      for(i=0; i<games.length; i++) {
     
       // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
        let home = Number(games[i].charAt(0)); 
        let away = Number(games[i].charAt(2));
        
        // Add points depending on the values ofhome compared to away
        if (home > away) { totalPoints += 3; }
        if (home < away) { totalPoints += 0; }
        if (home === away) { totalPoints += 1; }
      }
      
      return totalPoints;
    }

    points(matchDay);
    console.log(points(matchDay));

    //sedasdfasdfadssadfasfs