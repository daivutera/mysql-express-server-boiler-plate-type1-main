function checkBody(dataToCheck) {
  const mustBeKeys = ['title', 'image', 'price', 'number_plates'];
  const values = Object.values(dataToCheck);
  const valuesBool = values.map((val) => !!val).filter((val) => val === false);
  const ourKeys = Object.keys(dataToCheck);
  const allKeys = mustBeKeys.filter((mustKey) => ourKeys.includes(mustKey));
  if (valuesBool.length > 0 || allKeys.length > 0) {
    console.log('yra neuzpildytu lauku');
    return true;
  }
  return false;
}
