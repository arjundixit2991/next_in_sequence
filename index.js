exports.generate = (current_sequence) => {

  let generate_next_in_sequence = (split, number) => {

    if(number > split.length){ return; }

    let char_to_check = split[split.length-number].charCodeAt(0);

    let to_check = 122;
    if(char_to_check >= 48 && char_to_check <= 57){
      to_check = 57;
    }

    if(char_to_check < to_check){
      split[split.length-number] = String.fromCharCode(char_to_check + 1);
    } else if (char_to_check === to_check){
      generate_next_in_sequence(split,(number+1));
    }

  };

  if(typeof current_sequence === 'number'){
    return (current_sequence+1);
  }else if(typeof current_sequence === 'string'){
    let split = current_sequence.split('');
    generate_next_in_sequence(split,1);
    return split.join("");
  }else{
    return current_sequence;
  }

};