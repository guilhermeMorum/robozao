ref = require('../lib/common');
RestUtil = require('../lib/restUtil');

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
    var sendMessages = this.sendMessages;
    var stringElseRandomKey = this.stringElseRandomKey;
    var baseUrl = 'http://localhost:8081/servicos/api/public/comum/robozao';
    var ref1;
    var command = ((ref1 = this.interaction.command) != null ? ref1.toLowerCase() : void 0) || false;;
    switch(command){
      case 'ola':
        RestUtil.get(msg, baseUrl+'/ola', function(data){
    	  sendMessages(stringElseRandomKey(data), msg);
        });
        break;
      case 'adeus':
        RestUtil.get(msg, baseUrl+'/adeus', function(data){
    	  sendMessages(stringElseRandomKey(data), msg);
        });
        break;
    }
    /*var command, ref1;
    this.sendMessages(this.stringElseRandomKey(this.interaction.answer), msg);
    command = ((ref1 = this.interaction.command) != null ? ref1.toLowerCase() : void 0) || false;
    switch (command) {
      case 'transfer':        return null; // faz algo 
    }*/
  };
}

module.exports = Robozao;
