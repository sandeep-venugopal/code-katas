/**
 * A wildlife study involving ducks is taking place in North America. Researchers are visiting some wetlands in a certain area taking a survey of what they see.
 * The researchers will submit reports that need to be processed by your function.
 * Input
 * The input for your function will be an array with a list of common duck names
 * along with the counts made by the researchers.
 * The names and counts are separated by spaces in one array element.
 * The number of spaces between the name and the count could vary; but, there will always be at least one.
 * A name may be repeated because a report may be a combination of surveys from different locations.
 *
 * Input:
 * ["Redhead 3", "Gadwall 1", "Smew 4", "Greater Scaup 10", "Redhead 3", "Gadwall 9", "Greater Scaup 15", "Common Eider 6"]
 *
 * Processing:
 * Your function should change the names of the ducks to a six-letter code
 * according to given rules (see below). The six-letter code should be in upper case.
 * The counts should be summed for a species if it is repeated.
 *
 * Output:
 * The final data to be returned from your function should be an array
 * sorted by the species codes and the total counts as integers.
 * ["COMEID", 6, "GADWAL", 10, "GRESCA", 25, "REDHEA", 6, "SMEW", 4]
 *
 * SPECIAL NOTE:If someone has "Labrador Duck" in their list,
 * return an array with a single string element in it: "Disqualified data"
 *
 * RULES for converting a common name to a six-letter code:
 *  - Hyphens should be considered as spaces.
 *  - If a name has only one word, use the first six letters of the name.  If that name has less than six letters, use what is there.
 *  - If a name has two words, take the first three letters of each word.
 *  - If a name has three words, take the first two letters of each word.
 *  - If a name has four words, take the first letters from the first two words, and the first two letters from the last two words.
 */
export default function createWaterFowlSurveyReport(ducksList) {
  if (ducksList.some(duck => /^Labrador Duck/.test(duck))) {
    return ['Disqualified data'];
  }
  const ducksCount = ducksList.reduce((acc, curr) => {
    const res = processReport(curr);
    const code = res.split(' ')[0];
    const count = Number(res.split(' ')[1]);
    acc = ((acc[code] = (acc[code] || 0) + count), acc);
    return acc;
  }, {});
  return Object.keys(ducksCount)
    .sort()
    .reduce((acc, curr) => acc.concat(curr, ducksCount[curr]), []);
}

function processReport(duck) {
  const nameParts = duck.replace(/\s+/g, ' ').split(' ');
  const count = nameParts.splice(nameParts.length - 1, 1);
  let pr = nameParts
    .reduce((acc, curr) => {
      const r = curr.split('-');
      return r.length >= 2 ? [].concat(acc, r) : [].concat(acc, curr);
    }, [])
    .map(item => item.toUpperCase());
  let report = '';
  if (pr.length === 1) {
    report = `${pr[0].substr(0, 6)} ${count}`;
  } else if (pr.length === 2) {
    report = `${pr[0].substr(0, 3)}${pr[1].substr(0, 3)} ${count}`;
  } else if (pr.length === 3) {
    report = `${pr[0].substr(0, 2)}${pr[1].substr(0, 2)}${pr[2].substr(0, 2)} ${count}`;
  } else if (pr.length === 4) {
    report = `${pr[0].substr(0, 1)}${pr[1].substr(0, 1)}${pr[2].substr(0, 2)}${pr[3].substr(0, 2)} ${count}`;
  }
  return report;
}

// const sixLetterCode = bird =>
//   bird
//     .split(/[ -]/)
//     .slice(0, 4)
//     .map((word, i, words) => word.slice(0, ~~(6 / words.length) + (i >= words.length - (6 % words.length))))
//     .join('')
//     .toUpperCase();
// function createWaterFowlSurveyReport(sightings) {
//   if (sightings.some(s => /^Labrador Duck/.test(s))) return ['Disqualified data'];
//   let counter = sightings
//     .map(sighting => sighting.match(/^(.*?) +(\d+)$/).slice(1))
//     .map(([name, count]) => [sixLetterCode(name), +count])
//     .reduce((counter, [code, count]) => ((counter[code] = (counter[code] || 0) + count), counter), {});
//   return Object.keys(counter)
//     .map(key => [key, counter[key]])
//     .sort(([code1, _1], [code2, _2]) => code1.localeCompare(code2))
//     .reduce((result, [code, count]) => (result.push(code, count), result), []);
// }
