/**
 * The simple brute force solution
 * @param {number[]} ratings
 * @return {number}
 */
const numTeams = (ratings) => {
  let counter = 0;

  for (let i = 0; i < ratings.length - 2; i++) {
    for (let j = i + 1; j < ratings.length - 1; j++) {
      if (ratings[i] < ratings[j]) {
        for (let k = j + 1; k < ratings.length; k++) {
          if (ratings[j] < ratings[k]) {
            counter++;
          }
        }
      } else if (ratings[i] > ratings[j]) {
        for (let k = j + 1; k < ratings.length; k++) {
          if (ratings[j] > ratings[k]) {
            counter++;
          }
        }
      }
    }
  }

  return counter;
};

/**
 * The n^2 brute force solution
 * @param {number[]} ratings
 * @return {number}
 */
const noOfTeams = (ratings) => {
  let counter = 0;
  const lessArray = [];
  const moreArray = [];

  for (let i = 0; i < ratings.length - 2; i++) {
    for (let j = i + 1; j < ratings.length - 1; j++) {
      if (ratings[i] < ratings[j]) {
        lessArray.push(j);
      } else if (ratings[i] > ratings[j]) {
        moreArray.push(j);
      }
    }
  }

  for (let i = 0; i < lessArray.length; i++) {
    const j = lessArray[i];
    for (let k = j + 1; k < ratings.length && j > 0; k++) {
      if (ratings[j] < ratings[k]) {
        counter++;
      }
    }
  }

  for (let i = 0; i < moreArray.length; i++) {
    const j = moreArray[i];
    for (let k = j + 1; k < ratings.length && j > 0; k++) {
      if (ratings[j] > ratings[k]) {
        counter++;
      }
    }
  }

  return counter;
};
