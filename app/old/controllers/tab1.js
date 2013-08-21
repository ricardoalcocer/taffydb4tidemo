var inJSON=[
  {os:'iOS',model:'iPhone',version:'4'},
  {os:'iOS',model:'iPhone',version:'4S'},
  {os:'iOS',model:'iPhone',version:'5'},
  {os:'iOS',model:'iPod',version:'4th Gen'},
  {os:'iOS',model:'iPad',version:'2'},
  {os:'Android',model:'Galaxy S',version:'I'},
  {os:'Android',model:'Galaxy S ',version:'II'},
  {os:'Android',model:'Galaxy S',version:'III'},
  {os:'Android',model:'Galaxy S',version:'IV'}
];

var myhelpers=require('myhelpers');
var taffy = require('taffydb4ti').taffy;

// if the db file does not exists we instantiate the taffy library with initial data
// otherwise we just call it by name and it will get loaded from the file system
if (!myhelpers.taffyFileExists('phonesdb')){
	var my_db = new taffy('phonesdb',{autocommit:true},inJSON);
	my_db.save(); // because it is new
}else{
	var my_db = new taffy('phonesdb',{autocommit:true});
}

var row=null;
var tableRows=[];

// add a two random records every time it loads just to illustrate inserting records and persistency
my_db.insert({os:'iOS',model: myhelpers.getRandomName(),'version':'1'});
my_db.insert({os:'Android',model: myhelpers.getRandomName(),'version':'1'});

// get a recordset with all records
var recordSet=my_db().get();

recordSet.forEach(function(rec){
  row=Alloy.createController('table.row',{rowData:rec.model + ' ' + rec.version + ' - ' + rec.os}).getView();
  tableRows.push(row);
})
$.allrecords.data=tableRows;