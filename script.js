// Login / senha
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

// Barra RAM
const ram = document.getElementById("ram");
const ramValor = document.getElementById("ramValor");
ram.oninput = function() {
  ramValor.innerText = this.value + " GB";
};

// Sistema de DPI
const dpiLevel = document.getElementById("dpiLevel");

function sugerirDPI(modelo, nivel) {
  let baseDPI;

  if (nivel === "baixa") baseDPI = 400;
  else if (nivel === "media") baseDPI = 480;
  else if (nivel === "alta") baseDPI = 600;

  // Ajuste baseado no modelo
  if (modelo.includes("Galaxy A05")) baseDPI -= 20;
  if (modelo.includes("iPhone")) baseDPI += 20;

  return baseDPI;
}

// Calcular sensibilidade
function calcularSensibilidade(ram, dpi) {
  let base = 120 - (ram * 2);
  if (dpi) base -= dpi / 100;

  return {
    geral: Math.max(base, 50),
    redDot: Math.max(base - 5, 45),
    mira2x: Math.max(base - 10, 40),
    mira4x: Math.max(base - 15, 35),
    awm: Math.max(base - 20, 30)
  };
}

// Gerar perfil
function gerarPerfil() {
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const ramValue = parseInt(document.getElementById("ram").value);
  const nivelDPI = document.getElementById("dpiLevel").value;
  const mira = document.getElementById("mira").value;

  if (modelo === "") {
    alert("Digite o modelo do celular");
    return;
  }

  const dpiFinal = sugerirDPI(modelo, nivelDPI);
  const sensi = calcularSensibilidade(ramValue, dpiFinal);

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
    <div class="card">
      <h3>Perfil Personalizado</h3>
      <p><strong>Dispositivo:</strong> ${marca} ${modelo}</p>
      <p><strong>Mira selecionada:</strong> ${mira}</p>
      <p><strong>DPI sugerida:</strong> ${dpiFinal}</p>
      <hr>
      <p>Geral: ${sensi.geral}</p>
      <p>Ponto Vermelho: ${sensi.redDot}</p>
      <p>2x: ${sensi.mira2x}</p>
      <p>4x: ${sensi.mira4x}</p>
      <p>AWM: ${sensi.awm}</p>
    </div>
  `;

  // Animação fade-in
  const card = resultadoDiv.querySelector(".card");
  setTimeout(() => { card.classList.add("show"); }, 50);
}
