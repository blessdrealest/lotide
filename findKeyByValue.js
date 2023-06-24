const findKeyByValue = (obj, value) => {
const keys = Object.keys(obj); 
for (const key of keys) { 
  if (obj[key] === value) { 
    return key;
  }
}
return undefined;
};

module.exports = findKeyByValue;

