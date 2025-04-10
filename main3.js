

function updateMode() {
  const mode = document.getElementById("mode").value;
  document.getElementById("D").style.display = "block";
  document.getElementById("P").style.display = (mode === "rate" || mode === "growth") ? "block" : "none";
  document.getElementById("R").style.display = (mode === "price" || mode === "growth") ? "block" : "none";
  document.getElementById("G").style.display = (mode === "price" || mode === "rate") ? "block" : "none";
  document.getElementById("result").innerHTML = "";
}

function calculate() {
  const D = parseFloat(document.getElementById("D").value);
  const P = parseFloat(document.getElementById("P").value);
  const R = parseFloat(document.getElementById("R").value) / 100;
  const G = parseFloat(document.getElementById("G").value) / 100;
  const mode = document.getElementById("mode").value;
  let result = "";

  if (mode === "price") {
    if (!isNaN(D) && !isNaN(R) && !isNaN(G) && R > G) {
      const price = D / (R - G);
      result = `Pₜ = ${D} / (${R.toFixed(2)} - ${G.toFixed(2)}) = <strong>${price.toFixed(2)}</strong>`;
    } else {
      result = "Please enter valid D, R, and g (R must be > g)";
    }
  } else if (mode === "rate") {
    if (!isNaN(D) && !isNaN(P) && !isNaN(G)) {
      const R_calc = ((D) / (P)) + G;
      result = `R = g + (D / P) = ${G.toFixed(2)} + (${D} / ${P}) = <strong>${(R_calc * 100).toFixed(2)}%</strong>`;
    } else {
      result = "Please enter valid D, P, and g";
    }
  } else if (mode === "growth") {
    if (!isNaN(D) && !isNaN(P) && !isNaN(R)) {
      const G_calc = R - ((D) / (P));
      result = `g = R - (D / P) = ${R.toFixed(2)} - (${D} / ${P}) = <strong>${(G_calc * 100).toFixed(2)}%</strong>`;
    } else {
      result = "Please enter valid D, P, and R";
    }
  }

  document.getElementById("result").innerHTML = `<div style="background:#f9f9f9;padding:10px;border-radius:8px;text-align:right;font-size:16px;">${result}</div>`;
}

function reset() {
  ["D", "R", "G", "P"].forEach(id => document.getElementById(id).value = "");
  document.getElementById("result").innerHTML = "";
}
window.onload = updateMode;


function calculateDividend() {
  const D0 = parseFloat(document.getElementById("D0").value);
  const g = parseFloat(document.getElementById("divG").value) / 100;
  const t = parseFloat(document.getElementById("t").value);
  if (isNaN(D0) || isNaN(g) || isNaN(t)) {
    document.getElementById("resultDividend").innerHTML = "<div style='color:red;'>Please enter valid D₀, g, and t.</div>";
    return;
  }
  const Dt = D0 * Math.pow(1 + g, t);
  document.getElementById("resultDividend").innerHTML = "<div style='background:#f9f9f9;padding:10px;border-radius:8px;'>Dₜ = " + D0 + " × (1 + " + g.toFixed(2) + ")^" + t + " = <strong>" + Dt.toFixed(2) + "</strong></div>";
}

function resetDividend() {
  document.getElementById("D0").value = "";
  document.getElementById("divG").value = "";
  document.getElementById("t").value = "";
  document.getElementById("resultDividend").innerHTML = "";
}


   

    function calculategordon() {
      const d = parseFloat(document.getElementById("constD").value);
      const r = parseFloat(document.getElementById("constR").value) / 100;
      if (isNaN(d) || isNaN(r)) {
        document.getElementById("resultgordon").innerHTML = `<div style='color:red;'>Please enter valid D and R.</div>`;
        return;
      }
      const p0 = d / r;
      document.getElementById("resultgordon").innerHTML = `<div style='background:#f9f9f9;padding:10px;border-radius:8px;'>P₀ = ${d} / ${r.toFixed(2)} = <strong>${p0.toFixed(2)}</strong></div>`;
    }

    function resetgordon() {
      document.getElementById("constD").value = "";
      document.getElementById("constR").value = "";
      document.getElementById("resultgordon").innerHTML = "";
    }

    window.onload = () => {
      showSection('gordon');
      updateMode();
    };



function calculateDividend() {
  const D0 = parseFloat(document.getElementById("D0").value);
  const g = parseFloat(document.getElementById("divG").value) / 100;
  const t = parseFloat(document.getElementById("t").value);
  if (isNaN(D0) || isNaN(g) || isNaN(t)) {
    document.getElementById("resultDividend").innerHTML = "<div style='color:red;'>Please enter valid values for D₀, g, and t.</div>";
    return;
  }
  const Dt = D0 * Math.pow(1 + g, t);
  document.getElementById("resultDividend").innerHTML = "<div style='background:#f9f9f9;padding:10px;border-radius:8px;'>Dₜ = " + D0 + " × (1 + " + g.toFixed(2) + ")^" + t + " = <strong>" + Dt.toFixed(2) + "</strong></div>";
}

function resetDividend() {
  document.getElementById("D0").value = "";
  document.getElementById("divG").value = "";
  document.getElementById("t").value = "";
  document.getElementById("resultDividend").innerHTML = "";
}
