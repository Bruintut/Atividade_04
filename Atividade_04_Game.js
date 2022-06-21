/*Seu projeto já deve estar ganhando forma e com algumas funções já incrementadas e funcionando:
Controle de status do personagem;
Condições que determinarão mudanças no status e variáveis de controle do jogo;
Um controle de passagem de tempo que determina o começo e o fim de cada ciclo.
Agora podemos começar a organizar tudo isso, e seria bom pensarmos em funções para executar cada uma das tarefas. 
Portanto para hoje nossos objetivos serão:
Determinar quais funções serão usadas (Determinar fim do ciclo? Resetar os status do personagem? Fazer controle da passagem de tempo?);
Determinar quais variáveis serão usadas e alteradas por elas;
Implementar essas funções de maneira eficiente;
Com isso nosso projeto já deve estar bem encaminhado e com todas as funcionalidades implementadas e funcionando adequadamente. 
Veja o que você já tem e o que será possível ainda incrementar com o tempo restante.*/

const prompt = require("prompt-sync")();


var person = {
    name: [],
    health: [20000],
    luck: [],
    arma: [],
    armadura: [],
    acessorio: [],
    vidas: function sum(a) {
      var soma = this.health[0] + a;
      person.health.pop();
      person.health.push(soma);
      
    },  

    habilidade: (a) => {
        var controle = !!person.acessorio.find(() => JSON.stringify('2 - óculos especiais: Revelador de statuse') === JSON.stringify(person.acessorio));
        if (controle == true) {
            console.log(a);


        }

    }






  }
    
  
  
  var time = {
    tempo: [300],
    times: function hora(a) {
      var manipulacao = (this.tempo - a)
      time.tempo.splice(0, 1, manipulacao)
      return manipulacao
      if (manipulacao <= 0) {
        console.log('Infelizmente você não conseguiu completar o objetivo :(')
      }
    }
  };
  
  var armas = ['0 - Espada curta', '1 - arco e flecha', '2 - lança', '3 - espada de mão dupla']
  var armaduras = ['0 - armadura pesada', '1 - armadura média', '2 - armadura leve']
  var acessorios = ['0 - bracelete: Amplificador de sorte', '1 - colar: amplificador de Vida', '2 - óculos especiais: Revelador de status']
  
  
  lable: while ((time.tempo >= 0) || (person.health >= 0)) {
    person.name = prompt('Digite o nome para o personagem!')
    console.log('Olá, ', person.name, ', você esta no papel de um aventureiro.')
    console.log('Em um dia uma certa doença apareceu entre os aldeões, e entre sábios da aldeia há um que conhece a doença e para curá-la, é necessário uma flor que  nasce na dungeon e somente floresce uma vez por ano, e coincidentemente está na epóca para florescer, no entanto, em 5 horas, ela cessara o seu nascimento neste, então apartir deste momento, você terá 300 minutos para conseguir a flor "Jinsei no hana".');
    console.log('Para partir para esta viagem, você vai até p armazem para pegar alguns equipamentos para a jornada.');
    console.log('Tempo restante é', time.tempo)
    console.log('Primeiro escolha uma arma ')
    console.log(person)
    for (i = 0; i < 1; i++) {
      console.log(armas);
      var ChooseArm = +prompt('Digite o número correspondente a arma.')
      switch (ChooseArm) {
        case 0:
          person.arma.push(armas[0])
          console.log(person)
          time.times(10)
          console.log('Tempo restante é', time.tempo)
          break;
        case 1:
          person.arma.push(armas[1])
          console.log(person)
          time.times(10)
          console.log('Tempo restante é', time.tempo)
          break;
        case 2:
          person.arma.push(armas[2])
          console.log(person)
          time.times(10)
          console.log('Tempo restante é', time.tempo)
          break;
        case 3:
          person.arma.push(armas[3])
          console.log(person)
          time.times(10)
          console.log('Tempo restante é', time.tempo)
          break;
  
      }
  
      console.log(armaduras);
      var ChooseArmor = +prompt('Digite o número correspondente a armadura.')
      switch (ChooseArmor) {
        case 0:
          person.armadura.push(armaduras[0])
          console.log(person)
          time.times(10)
          console.log('Tempo restante é', time.tempo)
          break;
        case 1:
          person.armadura.push(armaduras[1])
          console.log(person)
          time.times(10)
          console.log('Tempo restante é', time.tempo)
          break;
        case 2:
          person.armadura.push(armaduras[2])
          console.log(person)
          time.times(10)
          console.log('Tempo restante é', time.tempo)
          break;
      }
      console.log(acessorios);
      var ChooseAccessory = +prompt('Digite o número correspondente ao acessório.')
      switch (ChooseAccessory) {
        case 0:
          person.acessorio.push(acessorios[0])
  
          time.times(10)
          person.luck.push(20)
          console.log(person)
          console.log('Tempo restante é', time.tempo)
          break;
        case 1:
          person.acessorio.push(acessorios[1])
          time.times(10)
          person.vidas(10000)
          console.log(person)
          console.log('Tempo restante é', time.tempo)
        
          break;
        case 2:
          person.acessorio.push(acessorios[2])
          console.log(person)
          time.times(10)
          console.log('Tempo restante é', time.tempo)
          break;
      }
    }
    console.log(person.name, ', você chegou a masmorra no andar inicial, há alguns slimes à frente, voce tem a opção de lutar ou passar pelo canto e sem lutar ')
    var luta1= prompt('Você deseja lutar?').toLowerCase()
    if (luta1 == 'sim') {
      time.times(70)
      console.log('O que parecia ser simples se tornou algo demorado, conforme você ia matando os slimes mais slimes apareciam, isso lhe custou 70 minutos, lhe restando', time.tempo, 'minutos')
      var maxslime = -10000
      var minslime = 0
      const danslime = Math.floor(Math.random() * (maxslime - minslime + 1)) + minslime;
      console.log('Além de custar tempo você acabou tomando danos dos slimes, o qual foi de: ',danslime)
      person.vidas(danslime)
      console.log('Estes são seus status pós luta', person,', e este é se tempo restante para conseguir a flor "Jinsei no hana' )
    }else{
        console.log('Tudo ocorreu bem, você passou desapercebido pelos slimes, em direção ao proximo andar')
        time.times(20)
    }
    console.log('Esses são seus status até aqui', person)
    console.log('Chegando ao segundo andar há ogro, e há apenas um lugar para passar sem lutar');
    
    var ogre = {
        dano: 20000,
        vida: 15000
    }
    person.habilidade(ogre)
    var luta2 = prompt('Você irá lutar?').toLowerCase
    if(luta2 == 'sim'){
        time.times(100)
        console.log('O ogro é forte e isso não será rápido o que custou-lhe', time.tempo, 'minutos')
        var maxogre = -20000
        var minogre = 0
        const danogre = Math.floor(Math.random() * (maxogre - minogre + 1)) + minogre;
        console.log('O ogro aparentemente extremamente forte e acabou causando dano', danogre)
        person.vidas(danogre)
        console.log('Mas nem tudo está perdido havia, uma poção de vida recuperando 5000 pontos de vida')
        person.vidas(5000)
    }else{
        console.log('Tudo ocorreu bem, você passou desapercebido pelos slimes, em direção ao proximo andar')
        time.times(50)  
    }
    console.log('Esses são seus status até aqui', person)
    console.log('Este é o andar mais difícil antes de chegar a "Jinsei no hana", aqui habita um dragão, o que faz a flor tão escassa')
    console.log('Este andar não tem não opções de passagem sem lutar');
    console.log('Há duas opções a luta direta ou por meio de estratégia')
    console.log('Há um penhasco que dá em cima do dragão talvez facilite, mas não há certeza');
    var lutafinal = prompt('Você irá lutar frente à frente?/ SIM ou NAO').toLowerCase;
    if(lutafinal = 'sim'){
        time.times(150)
        console.log('O dragão é adversário formidável, creio que mesmo optando pela luta indireta, não conseguiria poupar tanto tempo, isso me sobrou', time.tempo, 'minutos')
        var maxdragon = -25000
        var mindragon = 0
        const dandragon = Math.floor(Math.random() * (maxdragon - mindragon + 1)) + mindragon;
        console.log('O dragão causa danos desastrosos, por sorte somente tive este dano', dandragon)
        person.vidas(dandragon)

    }else{
        console.log('O ataque indireto me poupou um pouco de dano e tempo, mas não o suficiente para sair ileso,')
        time.times(90)
        var maxdragon = -19000
        var mindragon = 0
        const dandragon = Math.floor(Math.random() * (maxdragon - mindragon + 1)) + mindragon;
        console.log('O dragão causa danos desastrosos, por sorte somente tive este dano', dandragon)
        person.vidas(dandragon)  
    }
  
    if((person.health > 0) & (time.tempo > 0)){
        console.log(person.name, 'Parábens, você conseguiu chegar ao seu objetivo e pegar a flor a tempo')
        console.log('Estes são seus status ao chegar aqui', person)
    }else{
        console.log('Infelizmente você não conseguiu cumprir com o objetivo')
    }
    var regame = prompt('Você deseja jogar novamente?/ SIM ou NAO')
    if (regame == 'sim'){
        console.log('Ok, o jogo será reicinalizado')
        continue lable;
    }else {
        console.log('Ok, o jogo será encerrado, Até mais')
        break lable;
    }
  
  
  
  
  
  
  
  
    
  
  }