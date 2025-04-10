

    function calculateConstant() {
      const d = parseFloat(document.getElementById("constD").value);
      const r = parseFloat(document.getElementById("constR").value) / 100;
      if (isNaN(d) || isNaN(r)) {
        document.getElementById("resultConstant").innerHTML = `<div style='color:red;'>Please enter valid D and R.</div>`;
        return;
      }
      const p0 = d / r;
      document.getElementById("resultConstant").innerHTML = `<div style='background:#f9f9f9;padding:10px;border-radius:8px;'>P₀ = ${d} / ${r.toFixed(2)} = <strong>${p0.toFixed(2)}</strong></div>`;
    }

    function resetConstant() {
      document.getElementById("constD").value = "";
      document.getElementById("constR").value = "";
      document.getElementById("resultConstant").innerHTML = "";
    }

    window.onload = () => {
      showSection('constant');
    };
