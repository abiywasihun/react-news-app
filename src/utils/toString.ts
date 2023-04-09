export const toString = (array, type) => {
  console.log(array);
  return array.filter( x => x.attributes.type === type).map(item => item.attributes.name).toString();
};