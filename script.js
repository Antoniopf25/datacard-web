
function printPDF() {
  const content = document.getElementById('print-area').cloneNode(true);
  const win = window.open('', '', 'width=800,height=1000');
  win.document.write('<html><head><title>Datacard</title>');
  win.document.write('<link rel="stylesheet" href="style.css">');
  win.document.write('</head><body>');
  win.document.body.appendChild(content);
  win.document.write('</body></html>');
  win.document.close();
  win.focus();
  win.print();
  win.close();
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
