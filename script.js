function generate() {
  let ram = parseInt(document.getElementById("ram").value);
  let style = document.getElementById("style").value;

  let base = 120;
  let ramFactor = ram * 3;
  let styleFactor = 0;

  if (style === "rush") styleFactor = 20;
  if (style === "mid") styleFactor = 10;
  if (style === "sniper") styleFactor = 5;

  let finalSensi = base + ramFactor + styleFactor;

  if (finalSensi > 200) finalSensi = 200;

  document.getElementById("result").innerHTML =
    `Sensibilidade Geral Recomendada: <strong>${finalSensi}</strong>`;
}
