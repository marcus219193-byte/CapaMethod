// Login
function verificarSenha() {
  const senhaCorreta = "capamethod2026";
  const senhaDigitada = document.getElementById("senha").value;
  if (senhaDigitada === senhaCorreta) {
    document.getElementById("login").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
  } else {
    document.getElementById("erro").innerText = "Senha incorreta.";
  }
}

// RAM
const ram = document.getElementById("ram");
const ramValor = document.getElementById("ramValor");
ram.oninput = function() {
  ramValor.innerText = this.value + " GB";
};

// DPI opcional
const dpiOption = document.getElementById("dpiOption");
const dpiContainer = document.getElementById("dpiContainer");
dpiOption.onchange = function() {
  dpiContainer.style.display = this.value === "sim" ? "block" : "none";
};

// Mostrar modelo digitado
function toggleModelo() {
  const modeloInput = document.getElementById("modelo");
  if (modeloInput.type === "text") modeloInput.type = "text"; 
}

// Sugerir DPI
function sugerirDPI(modelo, nivel) {
  let baseDPI;
  if (nivel === "baixa") baseDPI = 400;
  else if (nivel === "media") baseDPI = 480;
  else if (nivel === "alta") baseDPI = 600;

  if (modelo.includes("Galaxy A05")) baseDPI -= 20;
  if (modelo.includes("iPhone")) baseDPI += 20;

  return baseDPI;
}

// Sensibilidade inteira
function calcularSensibilidade(ram, dpi) {
  let base = 120 - (ram * 2);
  if (dpi) base -= dpi / 100;

  return {
    redDot: Math.round(Math.max(base - 5, 45)),
    mira2x: Math.round(Math.max(base - 10, 40)),
    mira4x: Math.round(Math.max(base - 15, 35)),
    awm: Math.round(Math.max(base - 20, 30))
  };
}

// Gerar perfil completo
function gerarPerfil() {
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const ramValue = parseInt(document.getElementById("ram").value);
  const usarDPI = document.getElementById("dpiOption").value;
  const nivelDPI = document.getElementById("dpiLevel").value;

  if (!modelo) { alert("Digite o modelo do celular"); return; }

  const dpiFinal = usarDPI === "sim" ? sugerirDPI(modelo, nivelDPI) : null;
  const sensi = calcularSensibilidade(ramValue, dpiFinal);

  document.getElementById("resultado").innerHTML = `
    <div class="card">
      <h3>Perfil Completo 🕷</h3>
      <p><strong>Dispositivo:</strong> ${marca} ${modelo}</p>
      ${usarDPI === "sim" ? `<p><strong>DPI sugerida:</strong> ${dpiFinal}</p>` : ""}
      <hr>
      <p>Ponto Vermelho: ${sensi.redDot}</p>
      <p>2x: ${sensi.mira2x}</p>
      <p>4x: ${sensi.mira4x}</p>
      <p>AWM: ${sensi.awm}</p>
    </div>
  `;

  const card = document.querySelector(".card");
  setTimeout(() => card.classList.add("show"), 50);
}
