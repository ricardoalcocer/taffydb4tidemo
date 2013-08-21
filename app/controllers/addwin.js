var androidHelper=require('actionbarhelper');
var taffy = require('taffydb4ti').taffy;

var _me=$.addwin;

// trap android back button on this screen
_me.addEventListener('android:back',function(e){
	doCancel();
});

function doCancel(e){
	var dialog = Ti.UI.createAlertDialog({
    	cancel: 1,
	    buttonNames: ['Ok', 'Cancel'],
	    message: 'Would you like to cancel?',
	    title: 'Cancel'
  	});

  	dialog.addEventListener('click',function(e){
  		if (e.index !== e.source.cancel){
  			_me.close();
  		}
  	})

  	dialog.show();
}

function doOpen(e){
	androidHelper.setBackButton($.addwin,true,function(e){
		doCancel();
	});
	androidHelper.reloadMenu($.addwin);
}

function doSave(e){
	if ($.txtOS.value !== '' && $.txtModel.value !== '' && $.txtVersion.value !== ''){
		var payload={
			os:$.txtOS.value,
			model:$.txtModel.value,
			version:$.txtVersion.value
		}	
		var my_db = new taffy('phonesdb',{autocommit:true});

		my_db.insert(payload);

		_me.close();
	}else{
		var dialog = Ti.UI.createAlertDialog({
			ok: 'Ok',
		    message: 'You must fill out all the fields',
		    title: 'Error'
	  	}).show();
	}
}
