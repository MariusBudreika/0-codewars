function calculateTip(amount, rating) {
    let tip = 0;
    let a = rating.toLowerCase ();
    if (a === 'terrible') { tip = 0}
    else if (a === 'poor') { tip = amount * 0.05}
    else if (a === 'good') { tip = amount * 0.1}
    else if (a === 'great') {  tip = amount * 0.15}
    else if (a === 'excellent'){  tip = amount * 0.2} 
  else {return "Rating not recognised"}
    return Math.ceil(tip);  
    }

    console.log(calculateTip(20, "Excellent"), 4);
    console.log(calculateTip(26.95, "good"), 3);



    // const TIPS = {
    //     "terrible": 0.0,
    //     "poor": 0.05,
    //     "good": 0.1,
    //     "great": 0.15,
    //     "excellent": 0.2
    //   };
      
    //   const calculateTip = (amount, rating) => {
    //     rating = rating.toLowerCase();
        
    //     return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
    //   };


    // function calculateTip(amount, rating) {
    //     switch(rating.toLowerCase()){
    //       case "terrible":return 0;
    //       case "poor":return Math.ceil(amount * 0.05);
    //       case "good":return Math.ceil(amount * 0.1);
    //       case "great":return Math.ceil(amount * 0.15);
    //       case "excellent":return Math.ceil(amount * 0.2);
    //       default:return "Rating not recognised";
    //     }
    //   }