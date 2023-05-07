class simpleMath {
  getInfo() {
    return {
      id: 'simpleMath',
      color1: '#2457b5',
      color2: '#2457b5',
      color3: '#5285e3',
      name: 'Simple-Math',
      blocks: [
        {
          opcode: 'suma',
          text: ' [number] + [number2] ',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            number: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
            },
            number2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "1"
            }
          }
        },
        {
          opcode: 'unir',
          text: ' [s1] unir [s2] ',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            s1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "apple ",
            },
            s2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "banana"
            }
          }
        }
        
      ],
      menus: {
          thing: {
            acceptReporters: true,
            items: [
              {
                text: 'X',
                value: "X"
              },
              {
                text: 'Y',
                value: "Y"
              }
              
            ]
          }
      }
  };
}
  
  suma({ number, number2 }) {

    let res = parseInt(number) + parseInt(number2)
    let reres = res.toString() + "WASAA"
    console.log(reres)
    return reres
    
  }
  
  unir({ s1, s2 }) {

    let conc = s1.toString() + s2.toString()
    console.log(conc)
    return conc
    
  }
  
}

Scratch.extensions.register(new simpleMath());
