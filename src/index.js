module.exports = function reverse (n) {
	n = Math.abs(n);
  n = n.toString();
  let arr = n.split('');
  let arr1 = '';
  for(let i = 0; i < arr.length; i++)
  {
	  arr1=arr1 + arr[arr.length-1-i];
  }
  return arr1;

}
