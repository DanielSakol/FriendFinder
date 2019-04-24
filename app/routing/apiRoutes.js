var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.userAnswers);

    // Receive user details (name, photo, userAnswers)
    var user = req.body;

    // parseInt for userAnswers
    for(var i = 0; i < user.userAnswers.length; i++) {
      user.userAnswers[i] = parseInt(user.userAnswers[i]);
    }

    // default friend match is the first friend but result will be whoever has the minimum difference in userAnswers
    var roomateIndex = 0;
    var minimumDifference = 50;

    // in this for-loop, start off with a zero difference and compare the user and the ith friend userAnswers, one set at a time
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].userAnswers.length; j++) {
        var difference = Math.abs(user.userAnswers[j] - friends[i].userAnswers[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        roomateIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // after finding match, add user to friend array
    friends.push(user);

    // send back to browser the best friend match
    res.json(friends[roomateIndex]);
  });
};