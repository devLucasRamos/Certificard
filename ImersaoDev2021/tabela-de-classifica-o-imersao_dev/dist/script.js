//AFC Leste
var buills = {
  nome: "Bills",
  vitorias: 1,
  empates: 0,
  derrotas: 1,
  pontos: 1
};
var dolphins = {
  nome: "Dolphins",
  vitorias: 1,
  empates: 0,
  derrotas: 1,
  pontos: 1
};
var patriots = {
  nome: "Patriots",
  vitorias: 1,
  empates: 0,
  derrotas: 1,
  pontos: 1
};
var jets = {
  nome: "Jets",
  vitorias: 0,
  empates: 0,
  derrotas: 2,
  pontos: -4
};
//AFC Oeste
var raiders = {
  nome: "Raiders",
  vitorias: 2,
  empates: 0,
  derrotas: 0,
  pontos: 6
};
var broncos = {
  nome: "Broncos",
  vitorias: 2,
  empates: 0,
  derrotas: 0,
  pontos: 6
};
var chiefs = {
  nome: "Chiefs",
  vitorias: 1,
  empates: 0,
  derrotas: 1,
  pontos: 1
};
var charges = {
  nome: "Charges",
  vitorias: 1,
  empates: 0,
  derrotas: 1,
  pontos: 1
};
//AFC Norte
var steelers = {
  nome: "Steelers",
  vitorias: 1,
  empates: 0,
  derrotas: 1,
  pontos: 1
};
var ravens = {
  nome: "Ravens",
  vitorias: 1,
  empates: 0,
  derrotas: 1,
  pontos: 1
};
var browns = {
  nome: "Browns",
  vitorias: 1,
  empates: 0,
  derrotas: 1,
  pontos: 1
};
var bengals = {
  nome: "Bengals",
  vitorias: 1,
  empates: 0,
  derrotas: 1,
  pontos: 1
};
//AFC Sul
var texans = {
  nome: "Texans",
  vitorias: 1,
  empates: 0,
  derrotas: 1,
  pontos: 1
};
var titans = {
  nome: "Titans",
  vitorias: 1,
  empates: 0,
  derrotas: 1,
  pontos: 1
};
var colts = {
  nome: "Colts",
  vitorias: 0,
  empates: 0,
  derrotas: 2,
  pontos: -4
};
var jaguars = {
  nome: "Jaguars",
  vitorias: 0,
  empates: 0,
  derrotas: 2,
  pontos: -4
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates - jogador.derrotas * 2;
  return pontos;
}

var jogadores = [
  buills,
  dolphins,
  patriots,
  jets,
  raiders,
  broncos,
  chiefs,
  charges,
  steelers,
  ravens,
  browns,
  bengals,
  texans,
  titans,
  colts,
  jaguars
];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias * 3 +
      jogadores[i].empates -
      jogadores[i].derrotas * 5;
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

exibeJogadoresNaTela(jogadores);