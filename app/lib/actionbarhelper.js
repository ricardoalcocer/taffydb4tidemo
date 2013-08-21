// utility class to work with Android's ActionBar

exports.setActionBarTitle=function(window,title){
	if (OS_ANDROID){
		var activity=window.getActivity();
		if (!activity){
			console.log('Error: Unable to get activity...weird');
		}else{
			if (activity.actionBar){
				activity.actionBar.title=title;		
			}else{
				console.log('Error: I don\'t see an action bar here');
			}	
		}		
	}
}

exports.setBackButton=function(window,isUp,action){
	if (OS_ANDROID){
		var activity=window.getActivity();
		if (!activity){
			console.log('Error: Unable to get activity...weird');
		}else{
			if (activity.actionBar){
				activity.actionBar.displayHomeAsUp=isUp;
				activity.actionBar.onHomeIconItemSelected=action;	
			}else{
				console.log('Error: I don\'t see an action bar here');
			}	
		}		
	}
}

exports.setActionBarBackgroundImage=function(window,image){
	if (OS_ANDROID){
		var activity=window.getActivity();
		if (!activity){
			console.log('Error: Unable to get activity...weird');
		}else{
			if (activity.actionBar){
				activity.actionBar.backgroundImage=image;	
			}else{
				console.log('Error: I don\'t see an action bar here');
			}	
		}		
	}
}

exports.setActionBarIcon=function(window,icon){
	if (OS_ANDROID){
		var activity=window.getActivity();
		if (!activity){
			console.log('Error: Unable to get activity...weird');
		}else{
			if (activity.actionBar){
				activity.actionBar.icon=icon;	
				activity.actionBar.logo=icon;
			}else{
				console.log('Error: I don\'t see an action bar here');
			}	
		}		
	}
}

exports.hideActionBar=function(window){
	if (OS_ANDROID){
		var activity=window.getActivity();
		if (!activity){
			console.log('Error: Unable to get activity...weird');
		}else{
			if (activity.actionBar){
				activity.actionBar.hide();
			}else{
				console.log('Error: I don\'t see an action bar here');
			}	
		}		
	}
}

exports.showActionBar=function(window){
	if (OS_ANDROID){
		var activity=window.getActivity();
		if (!activity){
			console.log('Error: Unable to get activity...weird');
		}else{
			if (activity.actionBar){
				activity.actionBar.show();
			}else{
				console.log('Error: I don\'t see an action bar here');
			}	
		}		
	}
}

exports.reloadMenu=function(window){
	if (OS_ANDROID){
		var activity=window.getActivity();
		if (!activity){
			console.log('Error: Unable to get activity...weird');
		}else{
			activity.invalidateOptionsMenu();
		}		
	}
}