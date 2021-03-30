const loopyLighthouse = (range, multiples, words) => {

  let start = range[0];
  let end = range[1];

  for (let i = start; i <= end; i++) {
    if(i % multiples[0] === 0 && i % multiples[1] === 0) {  
      console.log(words[0] + words[1]);
    }else if(i % multiples[0] === 0){
      console.log(words[0]);
    }else if(i % multiples[1] === 0){
      console.log(words[1]);
    }else {i % multiples[0] === 2){
      console.log(i);
    }   
  }
}


loopyLighthouse([1,15], [3, 5], ['hi', 'bye']);
