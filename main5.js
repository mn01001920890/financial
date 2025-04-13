
    let yearCount = 0;

    function addYear() {
      yearCount++;
      const container = document.getElementById("cashFlows");
      const div = document.createElement("div");
      div.innerHTML = `<label>CF${yearCount} for Year ${yearCount}:</label><input type="number" id="cf${yearCount}" step="any">`;
      container.appendChild(div);
    }

    function calculatePV() {
      const rInput = parseFloat(document.getElementById("r").value);
      const r = rInput / 100;
      if (isNaN(r)) {
        document.getElementById("result5").innerText = "Please enter the rate of return.";
        return;
      }
      let pv = 0;
      let details = "";
      for (let i = 1; i <= yearCount; i++) {
        const cf = parseFloat(document.getElementById(`cf${i}`).value);
        if (isNaN(cf)) {
          document.getElementById("result5").innerText = `Please enter CF for year ${i}`;
          return;
        }
        const singlePV = cf / Math.pow(1 + r, i);
        pv += singlePV;
        details += `PV${i} = ${cf} / (1 + ${r.toFixed(2)})^${i} = ${singlePV.toFixed(2)}<br>`;
      }
      const resultText = `Total Present Value = ${pv.toFixed(2)}<br>` + details;
      document.getElementById("result5").innerHTML = resultText;
    }

    function calcCF() {
      const d = parseFloat(document.getElementById("dVal").value) || 0;
      const p = parseFloat(document.getElementById("pVal").value) || 0;
      const cf = d + p;
      document.getElementById("cfResult").innerText = `CF Value = ${cf.toFixed(2)} (e.g.: 2 + 14 = 16)`;
    }

    window.onload = addYear;
