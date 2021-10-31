export const heroNameBuilder = (name ) =>{

    if(name.length === 0 || name.split(' ').length<2)
        throw new Error(`${name} does not matches the expected firstName lastName template`)
    const firstPart = name.split(' ')[0];
    const secondPart = name.split(' ')[1];
    const firstPartFirstLetter = firstPart.charAt(0);
    const secondPartFirstLetter = secondPart.charAt(0);
    const firstPartRemainingLetters = firstPart.slice(1, firstPart.length);
    const secondPartRemainingLetters= secondPart.slice(1, secondPart.length);
    return {
              firstPart,
              secondPart,
              firstPartFirstLetter, 
              secondPartFirstLetter, 
              firstPartRemainingLetters, 
              secondPartRemainingLetters
    }
  }


