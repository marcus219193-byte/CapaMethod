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

// Mostrar campo DPI
const dpiOption = document.getElementById("dpiOption");
const dpiContainer = document.getElementById("dpiContainer");

dpiOption.onchange = function() {
  dpiContainer.style.display = this.value === "sim" ? "block" : "none";
};

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
  const usarDPI = document.getElementById("dpiOption").value;
  const dpi = usarDPI === "sim" ? parseInt(document.getElementById("dpi").value) : null;
  const mira = document.getElementById("mira").value;

  if (modelo === "") {
    alert("Digite o modelo do celular");
    return;
  }

  const sensi = calcularSensibilidade(ramValue, dpi);

  document.getElementById("resultado").innerHTML = `
    <div class="card">
      <h3>Perfil Personalizado</h3>
      <p><strong>Dispositivo:</strong> ${marca} ${modelo}</p>
      <p><strong>Mira selecionada:</strong> ${mira}</p>
      <hr>
      <p>Geral: ${sensi.geral}</p>
      <p>Ponto Vermelho: ${sensi.redDot}</p>
      <p>2x: ${sensi.mira2x}</p>
      <p>4x: ${sensi.mira4x}</p>
      <p>AWM: ${sensi.awm}</p>
    </div>
  `;
}
