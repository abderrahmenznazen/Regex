////////////////ex1//////////////////

/*function haSpace (){
    let c = 'hello, world'
    let esp =/\s/.test(c)
    return esp
}
console.log(haSpace())*/
/*function haSpace(){
    let esp=/\s/.test("hello\nhello,\nworld")
    return esp
}
console.log(haSpace())*/

////////////////ex1-solution//////////////

function haSpace (esp){
    return /\s/i.test(esp)
}
console.log(haSpace("hello\nhello,\nworld"))

//////////////////ex2-solution//////////

function countVowels(ch){
    return ch.match(/[aeoiu]/g).length;
}
console.log (countVowels('celebration'))

///////////////////ex3-solution////////

function replaceVowels(chn){
    return chn.replace((/[aeiou]/g),'#')
}
console.log(replaceVowels('celebration\nabde'))

//////////////////////ex4-solution///////////

function mathExpr (n){

    return (/[0-9\s?][+*-/%][0-9\s?]/).test(n)

  }
  console.log(mathExpr("8-0"))

 //////////////////////ex5-solution////////////////////
  
  function asterisk (c){
 
    return ((/[a][a-z]{0,}[c]{1,}[a-z]{0,}/i).test(c)) 

  }
  console.log(asterisk("bbbccount"))

//////////////////////ex6-solution//////////////////
  
  function Zip(x){
  
    return (/\b\d{5}\b/).test (x)
  
  }
  console.log(Zip("20438"))

