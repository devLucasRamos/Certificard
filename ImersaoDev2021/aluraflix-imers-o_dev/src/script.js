var moviesList = [
  "https://1.bp.blogspot.com/-szLgSvdAOok/Vr4KKvvq3dI/AAAAAAAADsE/2hU_kWDy6QA/s1600/Prendame_se_for_capaz_01.jpg",
  "https://br.web.img2.acsta.net/r_1280_720/medias/nmedia/18/35/46/30/18868129.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/8/8d/The_Wolf_of_Wall_Street.jpg",
  "https://media.fstatic.com/9rpbTdGWTjizjFmb_H8J_FDaiO4=/210x312/smart/media/movies/covers/2014/08/a-viagem-de-chihiro_t1246_4.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/b/bd/Bridgetoterabithiaposter.jpg",
  "https://media.fstatic.com/klQ8Lgf2Mb_SwJ1BbvS4iG8dlQk=/290x478/smart/media/movies/covers/2011/04/19944734093724a11909a032d85af617.jpg"
];
var moviesLinkList = [
  "https://drive.google.com/file/d/1_4Ma_TcXCmAWygWBYmn9z1uOaq_-t29P/view",
  "https://drive.google.com/file/d/1OnUl6ZSbxa6AkircAX1OscfwElMwnOdV/view",
  "https://drive.google.com/file/d/1t7SkTjj90i1sTugX8cMlHuABUt-njH97/view",
  "https://drive.google.com/file/d/1p9XPVt_3XcrMHoHeeMDjD6Vaii1UO3Hn/view",
  "https://drive.google.com/file/d/1-6kZ39r7Tu-4uD7BnkKHWyhM-McxGLo2/view",
  "https://drive.google.com/file/d/1HNHXOcqXEiPiY8PwlCUEWAgp7ZJZnp6K/view"
];

var length = moviesList.length;

for (var i = 0; i < length; i++) {
  document.write(
    "<a href=" +
      moviesLinkList[i] +
      ' target="_blank"><img src=' +
      moviesList[i] +
      "></a>"
  );
}
