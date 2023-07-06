import excel from 'exceljs';
describe("Read data form excel",()=>
{
    it('READ it',async()=>
    {
        const book=new excel.Workbook();
        await book.xlsx.readFile('C:/Users/Piyusha Chipare/Desktop/TY JavaScript/Ujetix/TestData.xlsx');
        const sheet=book.getWorksheet('NewSheet');
        const row=sheet.getRow(1);
        const cell=row.getCell(1).toString();
        console.log('@@@@@@@@@@Data to read@@@@@@@@@'+cell);
    })

    it.skip('WRITE it',async()=>
    {
        const book=new excel.Workbook();
        // await book.xlsx.readFile('C:/Users/Piyusha Chipare/Desktop/TY JavaScript/Ujetix/TestData.xlsx');
        const sheet=book.addWorksheet('NewSheet');
        sheet.addRow(1).getCell(1).value='JAVASCRIPT';
        await book.xlsx.writeFile('C:/Users/Piyusha Chipare/Desktop/TY JavaScript/Ujetix/TestData.xlsx');

    })
})