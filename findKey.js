const findKey = (obj, cb) => {
  for (let key in obj) {
    if (cb(obj[key])) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKey;

