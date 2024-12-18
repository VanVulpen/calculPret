function calculPret() {
  let lat = Number(document.getElementById("latime").value);
  let ina = Number(document.getElementById("inaltime").value);
  let pretM = Number(document.getElementById("pret").value);
  let pretCalculat = lat * ina * pretM * 0.01 * 0.01;
  document.getElementById("ceVrei").innerHTML = `Pretul este ${pretCalculat}`;
}
