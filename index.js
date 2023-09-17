const PDFDocument = require('pdfkit');
const fs = require('fs');

// Создание первого PDF-файла
const doc1 = new PDFDocument();
doc1.text('Содержимое первого PDF-файла');
doc1.pipe(fs.createWriteStream('file1.pdf'));
doc1.end();

// Создание второго PDF-файла
const doc2 = new PDFDocument();
doc2.text('Содержимое второго PDF-файла');
doc2.pipe(fs.createWriteStream('file2.pdf'));
doc2.end();

// Объединение двух PDF-файлов в один
const mergedDoc = new PDFDocument();
mergedDoc.text('Содержимое объединенного PDF-файла');

// Чтение содержимого первого PDF-файла и добавление его к объединенному файлу
const file1Content = fs.readFileSync('file1.pdf');
mergedDoc.addPage(file1Content);

// Чтение содержимого второго PDF-файла и добавление его к объединенному файлу
const file2Content = fs.readFileSync('file2.pdf');
mergedDoc.addPage(file2Content);

mergedDoc.pipe(fs.createWriteStream('merged.pdf'));
mergedDoc.end();