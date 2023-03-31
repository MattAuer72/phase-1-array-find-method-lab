const superbowlWin = (record) => {
    const foundYear = record.find(element => element.result === 'W');
    // once W is found, I want to return the year which the W was found
    // foundYear {year: 2015 and result: 'W'}
    // foundYear undefined
    // I want to return the year when there is a W
    // if foundYear is undefined I want to return undefined
  if (foundYear === undefined){
    return undefined
  }

  else {
    return foundYear.year
  }
}




