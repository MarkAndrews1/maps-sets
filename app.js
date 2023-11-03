//1.
  {1,2,3,4}

//2.
  'ref'

//3.
// 0: {Array(3) => true}
// 1: {Array(3) => false}

//4.
  function hasDuplicate(arr) {
    new Set(arr).size !== arr.length
  }

//5.
   function findVowel(char){
    return 'aeiou'.includes(char)
   }

  function vowelCount(str) {
    const map = new Map()
    let lowerCase = str.toLowerCase()
    for(let letter of str){
        if(findVowel(lowerCase)){
            if(map.has(lowerCase)){
                map.set(lowerCase, map.get(lowerCase) + 1)
            }else {
                map.set(lowerCase, 1)
            }
        }
    }
    return map
  }