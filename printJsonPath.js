// Example JSON Object
const errorMessages = {
  "post-prov": {
    "service-control": {
      0: {
        target: ["Invalid input."],
        command: ["Invalid input."],
      },
    },
  },
  "pre-prov": {
    "service-control": {
      0: {
        target: ["Invalid input."],
        command: ["Invalid input."],
      },
      1: {
        target: ["Invalid input."],
      },
    },
  },
};

const findPath = (obj) => {
  var allKeys,
    currentKey = "",
    len = 0,
    i = -1,
    key;

  const formatKeys = (entries) => {
    key = entries.length;
    len += entries.length;
    while (key--) entries[key][0] = currentKey + entries[key][0];

    return entries;
  };
  allKeys = formatKeys(Object.entries(obj));

  while (++i !== len)
    if (typeof allKeys[i][1] === "object" && allKeys[i][1] !== null) {
      currentKey = allKeys[i][0] + ".";
      Array.prototype.push.apply(
        allKeys,
        formatKeys(Object.entries(allKeys[i][1]))
      );
    }
  return allKeys;
};

const processErrMessagesObj = (errorMessages) => {
  return findPath(errorMessages)
    .filter((x) => {
      return typeof x[1] !== "object";
    })
    .map((obj) => {
      return obj[0].slice(0, -2) + ": " + obj[1];
    });
};

// Remove Line 53-55 and Line 57 "obj[1]" to print all paths.

// console.log(processErrMessagesObj(errorMessages))
// [
//     "post-prov.service-control.0.target: Invalid input.",
//     "post-prov.service-control.0.command: Invalid input.",
//     "pre-prov.service-control.0.target: Invalid input.",
//     "pre-prov.service-control.0.command: Invalid input.",
//     "pre-prov.service-control.1.target: Invalid input."
// ]

// Use this to print out Error Messages
// {processErrMessagesObj(errorMessages).map((errorMessage, i) => (
//    <li key={i}>{errorMessage}</li>
// ))}
