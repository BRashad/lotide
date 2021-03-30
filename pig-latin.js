const pigLatin = (str) => {
  for (let i = 0; i < str.length; i++){
      let a = str[0];
      let c = str.slice(1);
      let b =  c + a + "ay";
      return b;
  }
}

console.log(pigLatin('Pig'));