$(document).ready(function(){

  var nome = prompt("Olá me diz o seu nome ou nome da sua equipe?");

  var countS = 25;
  $("#session").html(countS);

  var countB = 5;
  $("#break").html(countB);

  var pos = `Olá ${nome}` ;
  var countLama;
  var posLama;
  var count;

  //STATUS INICIAL
  $("#stats").html(pos);

  var clock = $(".timer").FlipClock(0, {
    countdown: true,
    clockFace: 'MinuteCounter',
    autoStart: false,
    language: 'pt',
    callbacks: {
      interval: function(){
        if (clock.getTime() == 0){
          if (pos == "session"){
            clock.setTime(countB*60);
            clock.start();
            pos = "break";
            $("#stats").html("Hora de Descansar!");
          } else if (pos == "break"){
            clock.setTime(countS*60);
            clock.start();
            pos = "session";
            $("#stats").html("De volta ao trabalho! FOCO!");
          }
        }        
      }
    }
  });

  //SESSION
  //Incremento
  $("#sessInc").on("click", function(){
    if ($("#session").html() > 0){
      countS = parseInt($("#session").html());
      countS+=1;
      $("#session").html(countS);
      //clock.setTime(countS*60);
    }
  });

  //Decremento
  $("#sessDec").on("click", function(){
    if ($("#session").html() > 1){
      countS = parseInt($("#session").html());
      countS-=1;
      $("#session").html(countS);
      //clock.setTime(countS*60);
    }
  });

  //BREAK CLICK
  $("#breakInc").on("click", function(){
    if ($("#break").html() > 0){
      countB = parseInt($("#break").html());
      countB+=1;
      $("#break").html(countB);
    }    
  });

  $("#breakDec").on("click", function(){
    if ($("#break").html() > 1){
      countB = parseInt($("#break").html());
      countB-=1;
      $("#break").html(countB);
    }
  });

  //  START CLICK
  $("#start").on("click", function(){
    if (count != countS || clock.getTime()==0){
      clock.setTime(countS*60);
      pos="session";
      $("#stats").html("<h3>Primeiro sprint! Vamos lá!</h3>");
      $("#aviso").html(
          "<ul>" +
          "<li>O tempo de duração de trabalho é de "+countS+" minuto(s);</li>" +
          "<li>O tempo de descanso  é de "+countB+" minuto(s);</li>" +
          "<li>Tente ao máximo evitar distrações;</li>"+
          "<li>Coloque uma boa música e boa produção!</li>"+
          "</ul>"
      );
    } else {
      pos = posLama;
      $("#stats").html(pos);
    }
    count = countS;    
    clock.start();    
  });

  //STOP CLICK
  $("#stop").on("click", function(){
    clock.stop();
    countLama = clock.getTime();
    posLama = $("#stats").html();
    $("#stats").html("<h3>Aconteceu algo? Vai resolver e tenta manter o foco!</h3>");
  });

  //CLEAR CLICK
  $("#clear").on("click", function(){
    clock.stop();
    pos = "<h2>Pomodoro Timer</h2>";
    $("#stats").html(pos);
    clock.setTime(0);
    $("#aviso").html("<p>Timer parado! Pronto para iniciar!</p>");
  });

});