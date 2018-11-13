ref = require('../lib/common');

class Robozao {

  constructor(interaction) {
    this.interaction = interaction;
    this.sendMessages = ref.sendMessages;
    this.stringElseRandomKey = ref.stringElseRandomKey;
    this.process = this.bind(this.process, this);
  }

  bind(fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  };

  /*
    process(msg) {
      console.log(this.interaction);
      return msg.reply("torta de abóbora");
    }; */


  process(msg) {
    console.info('MENSAGEM: ', msg);
    var command, ref1;
    this.sendMessages(this.stringElseRandomKey(this.interaction.answer), msg);
    command = ((ref1 = this.interaction.command) != null ? ref1.toLowerCase() : void 0) || false;
    switch (command) {
      case 'transfer':
        return null; // faz algo 
    }
  };
}

module.exports = Robozao;