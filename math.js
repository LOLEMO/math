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
          opcode: 'resta',
          text: ' [n] - [n2] ',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            n: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
            },
            n2: {
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

    let res = BigInt(number) + BigInt(number2)
    return res.toString()
    
  }
  resta({ n, n2 }) {

    let res = BigInt(n) - BigInt(n2)
    return res.toString()
    
  }
  unir({ s1, s2 }) {

    let conc = s1.toString() + s2.toString()
    return conc
    
  }
  
}

Scratch.extensions.register(new simpleMath());
