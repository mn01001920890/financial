
function calcPt() {
  let Dt1 = parseFloat(document.getElementById('Dt1').value);
  let R = parseFloat(document.getElementById('R_sub').value) / 100;
  let g = parseFloat(document.getElementById('g').value) / 100;
  if (R <= g) {
    alert("R must be greater than g"); return;
  }
  let Pt = Dt1 / (R - g);
  document.getElementById('PtResult').innerText = `Pt = ${Dt1} / (${R} - ${g}) = ${Pt.toFixed(2)}`;
}

function resetPt() {
  document.getElementById('Dt1').value = '';
  document.getElementById('R_sub').value = '';
  document.getElementById('g').value = '';
  document.getElementById('PtResult').innerText = '';
}

function addDividend() {
  const input = document.createElement('input');
  input.type = 'number';
  input.placeholder = `D${document.getElementsByClassName('dividend').length + 1}`;
  input.className = 'dividend';
  document.getElementById('dividends').appendChild(input);
}

function calcP0() {
  const dividends = document.getElementsByClassName('dividend');
  let R = parseFloat(document.getElementById('R_main').value) / 100;
  let Pt = parseFloat(document.getElementById('Pt').value);
  if (isNaN(R) || isNaN(Pt)) {
    alert('Enter all values correctly'); return;
  }
  let P0 = 0;
  let formulaDetails = '';
  for (let i = 0; i < dividends.length; i++) {
    let D = parseFloat(dividends[i].value);
    if (isNaN(D)) { alert('Enter all dividends'); return; }
    let term = D / Math.pow(1 + R, i + 1);
    P0 += term;
    formulaDetails += `D${i+1}/(1+${R})^${i+1} = ${term.toFixed(2)} + `;
  }
  let Pt_term = Pt / Math.pow(1 + R, dividends.length);
  P0 += Pt_term;
  formulaDetails += `Pt/(1+${R})^${dividends.length} = ${Pt_term.toFixed(2)}`;
  document.getElementById('P0Result').innerText = formulaDetails + ` = ${P0.toFixed(2)}`;
}

function resetP0() {
  const fields = document.querySelectorAll('.dividend, #Pt, #R_main');
  fields.forEach(el => el.value = '');
  document.getElementById('P0Result').innerText = '';
}
