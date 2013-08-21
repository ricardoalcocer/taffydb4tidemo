function doOpen(e){
	if (OS_ANDROID){
		var activity=$.index.getActivity();
		if (!activity){
			alert('Unable to get activity...weird');
		}else{
			if (activity.actionBar){
				activity.actionBar.title='The Great TaffyDB4Ti Demo';		
			}else{
				alert('I don\'t see an action bar here');
			}	
		}		
	}
}

$.index.open();
