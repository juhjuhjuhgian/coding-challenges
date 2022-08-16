// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//P the parameter being passed in is an array of 'good' or 'bad'
//R if there are no 'good's then we should return 'Fail!', if there are one or two then we 
  //should return 'Publish!', if more than two then we should return 'I smell a series!'
//E well(['good', 'good', 'bad']) should return 'Publish!'
//P I first created a variable that counted the number of 'good's there are
  //I then used a for loop to iterate through each item in the array.
  //I then used a conditional to see if the element was equal to 'good' and if the counter 
    //was more than two, I would return 'I smell a series!'
  //I would finally use the ternary operator to determine whether or not the count there was a 
    //count. If yes it would have to be 'Publish!', if not then 'Fail!'

    function well(x){
        let count = 0
        
        for(let i = 0; i < x.length; i++){
          if(x[i] === 'good' && ++count > 2){
            return 'I smell a series!'
          }
        }
        return count ? 'Publish!' : 'Fail!'
        }