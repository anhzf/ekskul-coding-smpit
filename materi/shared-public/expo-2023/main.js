import { parse } from 'https://esm.run/csv-parse@5.4.0/browser/esm/sync';

/**
 * @type {import('./types').Siswa[]}
 */
const data = await getData();

/**
 * @type {HTMLInputElement}
 */
const ELM_SEARCH = document.getElementById('search');
const ELM_LIST_RESULT = document.getElementById('list-result');
const ELM_RESULT = document.getElementById('result');

ELM_SEARCH.addEventListener('input', (e) => {
  const keyword = e.target.value.toUpperCase();

  if (keyword.length >= 3) {
    const results = data.filter((siswa) => JSON.stringify(siswa).includes(keyword.toUpperCase()));
    ELM_LIST_RESULT.innerHTML = results.map((siswa) => listItemResultTemplate(siswa)).join('');
  } else {
    ELM_LIST_RESULT.innerHTML = '';
  }
});

/**
 * @param {import('./types').Siswa} siswa
 */
function listItemResultTemplate(siswa) {
  return `<li>
  <button onclick="showSiswa('${siswa.NISN}')">${siswa.NAMA}</button>
  </li>`;
}

/**
 * @param {import('./types').Siswa} siswa
 */
function siswaCardTemplate(siswa) {
  const rows = Object.entries(siswa).map(([key, value]) => {
    return `<tr>
  <th>${key}:</th>
  <td>${value}</td>
</tr>`;
  });


  return `<div class="card">
  <div class="card-header">
    <h2>${siswa.NAMA}</h2>
  </div>
  <div class="card-body">
    <table>
      <tbody>
        ${rows.join('')}
      </tbody>
    </table>
  </div>
</div>`;
}

function showSiswa(nisn) {
  ELM_SEARCH.value = '';
  ELM_LIST_RESULT.innerHTML = '';
  const siswa = data.find((siswa) => siswa.NISN === nisn);
  ELM_RESULT.innerHTML = siswaCardTemplate(siswa);
}

async function getData() {
  const resp = await fetch('./siswa-2022.csv');
  const data = await resp.text();

  return parse(data.toUpperCase(), { columns: true, delimiter: ';' });
};

Object.assign(globalThis, {
  showSiswa,
});