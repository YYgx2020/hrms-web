/* 
  将表格里面的数据生成 excel 数据然后导出
*/
// 将包导入
import FileSaver from "file-saver";
import * as XLSX from 'xlsx/xlsx.mjs'

export function getExcel(dom, title) {
  // console.log('123');
  var excelTitle = title;
  // console.log(XLSX);
  var wb = XLSX.utils.table_to_book(document.querySelector(dom));
  //  获取二进制字符串作为输出
  var wbout = XLSX.write(wb, {
    bookType: "xlsx",
    bookSST: true,
    type: "array",
  });
  try {
    FileSaver.saveAs(
      new Blob([wbout], {
        type: "application/octet-stream",
      }),
      excelTitle + ".xlsx"
    );
  } catch (e) {
    if (typeof console !== "undefined") {
      console.log(e, wbout);
    }
  }
  return wbout;
}
