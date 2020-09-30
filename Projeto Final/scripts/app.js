var useMe = ["Use Me", "2020", "imagens/UseMe2020.jpg"];

var hallucinations = ["Hallucinations", "2019", "imagens/Hallucinations2019.jpg"];

var allWeKnowOfHeavenAllWeNeedFromHell = ["All We Know Of Heaven, All We Need From Hell", "2017", "imagens/AllWeKnowOfHeavenAllWeNeedFromHell2017.jpg"];

var whiteNoise = ["White Noise", "2014", "imagens/WhiteNoise2014.jpg"];

var paris = ["Paris", "2013", "imagens/Paris2013.jpg"];

var albuns = [useMe, hallucinations, allWeKnowOfHeavenAllWeNeedFromHell, whiteNoise, paris];

var entrevistas = [
                  ["https://www.youtube.com/embed/Fz7zKdDvhHE", "St. Mary's interview"],
                  ["https://www.youtube.com/embed/atoaLG2B_0Q", "Kids interview PVRIS"],
                  ["https://www.youtube.com/embed/4Pl2uTCSGEA", "PVRIS answer your questions"],
                  ["https://www.youtube.com/embed/-UgneWuKvJc", "Lynn Gunn interview"],
                  ["https://www.youtube.com/embed/HpxalOxk0uE", "Lynn Gunn answers fans"],
                  ["https://www.youtube.com/embed/RZNjIM9qcEc", "PVRIS interview with pippies"]
                  ]; 

function trocaAlbum(opcao){
  var index = parseInt(opcao);
  capa.src = albuns[index][2];
  console.log(capa.src);
  capa.alt = albuns[index][0];
  capa.title = albuns[index][0];
  caption.innerHTML = albuns[index][0] + ", " + albuns[index][1];
}

function trocaEntrevista(opcao){
  var index = parseInt(opcao);
  video.src = entrevistas[index][0];
  titulo.innerHTML = entrevistas[index][1];
}
