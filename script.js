
function calcularIdeal(P, V, n, T, variable) {
  const R = 0.0821;
  switch (variable) {
    case "P": return (n * R * T / V).toFixed(3);
    case "V": return (n * R * T / P).toFixed(3);
    case "n": return (P * V / (R * T)).toFixed(3);
    case "T": return (P * V / (n * R)).toFixed(3);
    default: return "Variable no válida";
  }
}

function calcularCombinada(P1, V1, T1, P2, V2, T2, variable) {
  const left = (P1 * V1) / T1;
  switch (variable) {
    case "P2": return ((left * T2) / V2).toFixed(3);
    case "V2": return ((left * T2) / P2).toFixed(3);
    case "T2": return ((P2 * V2) / left).toFixed(3);
    default: return "Variable no válida";
  }
}

function convertirPresion(valor, de, a) {
  const factores = {
    atm: 1,
    mmHg: 760
  };
  return (valor * factores[de] / factores[a]).toFixed(3);
}
