//i'm taking in an array of objects containing key value pairs
//what i'm to return is the first name and their contry of the person who's key value is 'Python'
//getFirstPython([
//{firstName: 'gian', lastName: 'carner', language: 'english'} would return there will be no python devs
//okay so i worked on this before typing out the pseudo code, but I used a for in loop, iterating through
//the objects in the array. then i used a conditional stating that if the language in the object of objects was python
//then use a ternary and return the firstname and county
//otherwise return there will be no python devs


function getFirstPython(list) {
    for (let i in list){
      if(list[i].language === 'Python'){
        return `${list[i].firstName}, ${list[i].country}`
      }
    }
    return 'There will be no Python developers'
  }