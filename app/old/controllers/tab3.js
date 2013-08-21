var myhelpers=require('myhelpers');
var taffy = require('taffydb4ti').taffy;

// at this point we assume the DB exists so we load it from disk
var my_db = new taffy('phonesdb',{autocommit:true});

var row=null;
var tableRows=[];

// get a recordset with all records
var recordSet=my_db({os:'iOS'}).get();

recordSet.forEach(function(rec){
  row=Alloy.createController('table.row',{rowData:rec.model + ' ' + rec.version + ' - ' + rec.os}).getView();
  tableRows.push(row);
})
$.ios.data=tableRows;