var express 



app.get("/api/friends", function(req, res) {
    var newReservation = req.body;
  
    console.log(newReservation);
  
    reservation.push(newReservation);
  
    res.json(newReservation);
  });



  app.post("/api/friends", function(req, res) {
    var newReservation = req.body;
  
    console.log(newReservation);
  
    reservation.push(newReservation);
  
    res.json(newReservation);
  });