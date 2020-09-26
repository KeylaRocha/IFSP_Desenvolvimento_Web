var useMe = ["Use Me", "2020", "imagens/UseMe2020.jpg"];

var hallucinations = ["Hallucinations", "2019", "imagens/Hallucinations2019.jpg"];

var allWeKnowOfHeavenAllWeNeedFromHell = ["All We Know Of Heaven, All We Need From Hell", "2017", "imagens/AllWeKnowOfHeavenAllWeNeedFromHell2017.jpg"];

var whiteNoise = ["White Noise", "2014", "imagens/WhiteNoise2014.jpg"];

var paris = ["Paris", "2013", "imagens/Paris2013.jpg"];

var albuns = [useMe, hallucinations, allWeKnowOfHeavenAllWeNeedFromHell, whiteNoise, paris];

function trocaAlbum(opcao){
  var index = parseInt(opcao);
  capa.src = albuns[index][2];
  console.log(capa.src);
  capa.alt = albuns[index][0];
  capa.title = albuns[index][0];
  caption.innerHTML = albuns[index][0] + ", " + albuns[index][1];
}

