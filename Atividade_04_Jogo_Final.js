/*Seu projeto já deve estar ganhando forma e com algumas funções já incrementadas e funcionando:
Controle de status do personagem;
Condições que determinarão mudanças no status e variáveis de controle do jogo;
Um controle de passagem de tempo que determina o começo e o fim de cada ciclo.
Agora podemos começar a organizar tudo isso, e seria bom pensarmos em funções para executar cada uma das tarefas. Portanto para hoje nossos objetivos serão:
Determinar quais funções serão usadas (Determinar fim do ciclo? Resetar os status do personagem? Fazer controle da passagem de tempo?);
Determinar quais variáveis serão usadas e alteradas por elas;
Implementar essas funções de maneira eficiente;
Com isso nosso projeto já deve estar bem encaminhado e com todas as funcionalidades implementadas e funcionando adequadamente. Veja o que você já tem e o que será possível ainda incrementar com o tempo restante.*/





var PerJonas= {
    itens:[]
  };
  var search1 = {itens:[]}
  var continuacao = true
  
  first: while(continuacao == true){
    ato1()
    carta();
    desafio();
    parque();
    chave();
    RetornoDP();
    JogarNovamente();
  }
  
  
     function ato1(){
      
        console.log('...10:00h')
        console.log('Este é mais um dia aparentemente normal do dia do detetive Jonas, no departamento de polícia.')
        carta()
     }
    
    
    function carta(){
    var SendCard = prompt('Você recebeu uma carta deseja abri-la agora?/ SIM ou NAO').toLowerCase()
      if (SendCard == 'sim'){
        console.log('Conteúdo da Carta: Olá detetive Jonas, estou passando para informar que hoje às 19:00h, haverá uma grande explosão em algum ponto da cidade, e para para-la, depende apenas de você.')
        desafio()
      }else if (SendCard == 'nao'){
        console.log('o seu erro acometeu em uma falha catastrófica, FIM DE JOGO;')
        continuacao = false
        
        
      }  
    }
    
    
    function desafio(){
      console.log('Enigma1: Lugar em que as pessoas adoram se conectar a natureza e fazer um piquenique, com essa dica difícil não acerta o local da primeira pista.');
      console.log('QUAL É O LOCAL DO ENIGMA?')
      console.log('Parque = 1')
      console.log('Shopping = 2')
      console.log('Circo = 3')
      let enigma1 = +prompt('1,2 ou 3') 
      if(enigma1 == 1){
        console.log('resposta correta!')
        console.log('...11:00h')
        console.log('Ao chegar no parque, há uma caixa no mínimo chamativa com cores neon, em cima de um banco e ninguém por perto.')
        parque()
      }else if(enigma1 == 2){
        console.log('Resposta errada')
         continuacao = false
      }else if(enigma1 == 3){
        console.log('Resposta errada')
         continuacao = false
      }
     
    }
    
    
    
    function parque(){
    var thebox = prompt('IR ATÈ A CAIXA E ABRI-LA?/ SIM ou NAO').toLowerCase();
      if(thebox == 'sim'){
        console.log('Ao abrir a caixa ela possui dois itens, uma chave estranha, e uma carta,')
        console.log('Ao abrir a carta continha a seguinte informação: As vezes a imagem é algo que nos engana, aqueles que deveriam teriam o papel de proteção não aqueles que achamos ')
        chave()
      }else if (thebox == 'nao'){
          console.log('Nada mais de estranho foi localizado nas localidades do parque, você retornou ao Departamento de Policia, e às 19:00, ocorreu a explosão. FIM DE JOGO')
           continuacao = false
      }
    }
    
    function chave(){
      console.log()
      var key = prompt('DESEJA PEGAR A CHAVE?/ SIM ou NAO').toLowerCase()
      if(key == 'sim'){
        console.log('A chave foi adicionada a seu inventário;')
        search1.itens.push('Chave')
        PerJonas.itens.push('Chave')
        RetornoDP()
      }else{
        console.log('Nada mais de estranho foi localizado nas localidades do parque, ')
        RetornoDP()
      }  
    }
    
    
    
    
    
    function RetornoDP(){
      console.log('...17:00h')
      console.log('Após ler a carta detetive jonas opta por retornar ao departamento de polícia, e encontra em sua mesa uma carta a qual indica, localidade da bomba, como o saguão, e la contem uma caixa lacrada com um relogio')
       // fim(PerJonas.itens,first)
      var controle = !!PerJonas.itens.find(Chave => JSON.stringify('Chave') === JSON.stringify(PerJonas.itens));
      if(controle == true){
         console.log('Você chegou a tempo de volta ao departamento de polícia e desarmou a bomba.')
         console.log('O grande responsável, é o chefe de polícia, que queria acabar com polícia para esconder seus crimes de corrupção dentro do departamento, quem enviou as cartas, era apenas um sádico que gosta de jogos e também desconhecido, e não se sabe o envolvimento dele nisso.')
      }else if (controle == false){
         console.log('Você não obtém os itens necessários para desarmar a bomba e acabou cometendo seu maior erro.')
      }
      JogarNovamente()
    }
    
    
    
    function JogarNovamente(){
      console.log('Você deseja jogar novamente?/ SIM ou NAO')
       var NewGame = prompt().toLowerCase
       if (NewGame == 'sim'){
         // continue;
       }else{
         continuacao = false
       }
    }
  
  
  