// //before
// function mystery() {
//     var results =
//       {sanity: 'Hello'};
//     return
//       results;
//   }
//after
function mystery() {
    let results = {
      sanity: 'Hello'
    };
    return results;
  }