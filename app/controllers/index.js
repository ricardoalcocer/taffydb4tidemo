var androidHelper=require('actionbarhelper');

function doOpen(e){
	androidHelper.reloadMenu($.index);
}

function doAddClick(e){
	var w=Alloy.createController('addwin').getView();
	w.addEventListener('close',function(e){
		doLoadData();
	})
	if (OS_IOS){
		w.open({modal:true,modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE})
	}else{
		w.open();
	}
}

function doLoadData(){
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

	// get a recordset with all records
	var recordSet=my_db().get();

	$.maintable.data=[];
	recordSet.forEach(function(rec){
	  row=Alloy.createController('table.row',{model:rec.model + ' ' + rec.version,moredata: rec.os}).getView();
	  tableRows.push(row);
	})
	$.maintable.data=tableRows;	
}

// for debugging
//if (myhelpers.taffyFileExists('phonesdb')){
//	myhelpers.deleteTaffyFile('phonesdb');
//}

doLoadData();

if (OS_IOS){
	$.index.open({modal:true,modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE});
}else{
	$.index.open();
}

