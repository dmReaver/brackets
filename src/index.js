module.exports = function check(str, bracketsConfig) {
  let st = str.split('');
  let stack = Array();
  let open_bra = Array();
  let close_bra = Array();
  let spec_bra = Array();
  let flag = 'result';

  bracketsConfig.forEach(bra => {
    if(bra[0] != bra[1]){
      open_bra.push(bra[0]);
      close_bra.push(bra[1]);
    } else {
      spec_bra.push(bra[0]);
    }
  });
  
  st.forEach(char => {
    if( spec_bra.indexOf(char) > -1 && stack.length == 0){
      stack.push(char);
    } else if(spec_bra.indexOf(char) > -1) {
      let open_bra_val = stack.pop();
      if(open_bra_val != char){
        stack.push(open_bra_val);
        stack.push(char);
      }
    }else if(open_bra.indexOf(char) > -1){
      stack.push(char);
    } else if(close_bra.indexOf(char) > -1){
      let open_bra_val = stack.pop()
      if( close_bra.indexOf(char) != open_bra.indexOf(open_bra_val) ){
        flag = false;
      } else {
        
      }

    }
  });
  if(flag == false){
    return false;
  }
  if(stack.length == 0){
    return true;
  } else {
    return false;
  }
}


// check('|(|)', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]);