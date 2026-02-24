function generateFree() {
  let ram = parseInt(document.getElementById("ram").value);
  let style = document.getElementById("style").value;

  let base = 120;
  let ramFactor = ram * 3;
  let styleFactor = style === "rush" ? 20 : style === "mid" ? 10 : 5;

  let result = base + ramFactor + styleFactor;
  if (result > 200) result = 200;

  document.getElementById("result").innerHTML =
    "Sensibilidade Recomendada: " + result;
}

function generatePro() {
  let ram = parseInt(document.getElementById("ramPro").value);
  let dpi = parseInt(document.getElementById("dpiPro").value) || 400;
  let style = document.getElementById("stylePro").value;

  let base = 130;
  let ramFactor = ram * 4;
  let dpiFactor = dpi / 50;
  let styleFactor = style === "rush" ? 25 : style === "mid" ? 15 : 8;

  let result = base + ramFactor + dpiFactor + styleFactor;
  if (result > 200) result = 200;

  document.getElementById("resultPro").innerHTML =
    "Sensibilidade PRO Recomendada: " + Math.round(result);
}
