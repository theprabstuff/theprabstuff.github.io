document.getElementById('surpriseBtn').addEventListener('click', function() {
  // Creating a sample PDF content (you can use a library like jsPDF for complex PDF creation)
  const pdfContent = 'Here\'s your surprise PDF!';

  // Creating a temporary anchor element to trigger PDF download
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/file/d/1U9qMgRkgsCjVZFd18ah8HS81JrtSxCKf/view?usp=drive_link,' + btoa(pdfContent);
  link.download = 'year end surprise.pdf';
  link.click();
});