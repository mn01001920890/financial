
    let generalCount = 0;

    

    function addGeneralYear() {
      generalCount++;
      const div = document.createElement("div");
      div.innerHTML = `<label>D${generalCount}:</label><input type="number" id="gd${generalCount}" step="any">`;
      document.getElementById("generalInputs").appendChild(div);
    }

    function calculateGeneral() {
      const r = parseFloat(document.getElementById("generalR").value) / 100;
      if (isNaN(r)) {
        document.getElementById("resultGeneral").innerHTML = `<div style='color: red;'>Please enter required return (R).</div>`;
        return;
      }
      let pv = 0;
      let steps = "<div style='background:#f9f9f9;border:1px solid #ccc;padding:15px;border-radius:8px;'>";
      for (let i = 1; i <= generalCount; i++) {
        const d = parseFloat(document.getElementById(`gd${i}`).value);
        if (isNaN(d)) {
          document.getElementById("resultGeneral").innerHTML = `<div style='color:red;'>Please enter D${i}</div>`;
          return;
        }
        const term = d / Math.pow(1 + r, i);
        pv += term;
        steps += `<div>D${i} / (1 + R)^${i} = ${d} / (1 + ${r.toFixed(2)})^${i} = <strong>${term.toFixed(2)}</strong></div>`;
      }
      steps += `<hr><div style='font-size:16px;margin-top:10px;color:#007b00;'><strong>Total Estimated P₀ = ${pv.toFixed(2)}</strong></div></div>`;
      document.getElementById("resultGeneral").innerHTML = steps;
    }

    function resetGeneral() {
      generalCount = 0;
      document.getElementById("generalInputs").innerHTML = "";
      document.getElementById("generalR").value = "";
      document.getElementById("resultGeneral").innerHTML = "";
    }

    window.onload = () => {
      showSection('general');
      addGeneralYear();
    };
