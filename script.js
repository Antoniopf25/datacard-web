
function printPDF() {
  const printContent = document.getElementById('datacard-content').innerHTML;
  const win = window.open('', '', 'width=800,height=1000');
  win.document.write('<html><head><title>Datacard</title>');
  win.document.write('<link rel="stylesheet" href="style.css">');
  win.document.write('</head><body>');
  win.document.write('<h1>Datacard</h1>');
  win.document.write('<div class="datacard-grid">' + printContent + '</div>');
  win.document.write('</body></html>');
  win.document.close();
  win.focus();
  win.print();
  win.close();
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => showPage('datacard'));
