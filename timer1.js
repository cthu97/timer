const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } = require("constants")

let times = process.argv.splice(2)
  for (let time of times){
    if (time >= 0 && typeof(time) !== NaN){
      setTimeout(() => {process.stdout.write('\x07')}, time * 1000)
    }
  };



