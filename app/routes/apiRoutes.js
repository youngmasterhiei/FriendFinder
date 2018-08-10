


var friendsArray = require("../data/friends");



module.exports = function (app) {






  app.get("/api/friends", function (req, res) {

    res.json(friendsArray);
  });




  app.post("/api/friends", function (req, res) {



    var match = {
      name: "",
      photo: "",
      scoreDifference: Infinity
};

    var newFriend = req.body;
    
    var totalDifference = 0;

    for (var i = 0; i<friendsArray.length; i++) {
      
      totalDifference = 0;
      
      for (var j = 0; j<newFriend.scores.length; j++){
        totalDifference += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friendsArray[i].scores[j]));
      }
      if(totalDifference <= match.scoreDifference){
        match.name = friendsArray[i].name;
        match.photo = friendsArray[i].photo;
        match.scoreDifference = totalDifference;
      }
    }


    friendsArray.push(newFriend);

    res.json(match);




  });

};