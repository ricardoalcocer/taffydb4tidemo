exports.taffyFileExists=function(dbName){
	// this should explain how the data is being saved
	// if your db is called "mydb" then it is saved in 
	// applicationDataDirectory/titaffydb/MYDB
	var exists=false;
	var parent = Ti.Filesystem.applicationDataDirectory;
	var taffFolder = Ti.Filesystem.getFile(parent, 'titaffydb');
	if(taffFolder.exists()){
		var taffFolder = parent + 'titaffydb';			
		var taffyFile = Ti.Filesystem.getFile(taffFolder, dbName.toUpperCase());
		exists=taffyFile.exists();
	}
	return exists;  
}

exports.deleteTaffyFile=function(dbName){
	var parent = Ti.Filesystem.applicationDataDirectory;
	var taffFolder = Ti.Filesystem.getFile(parent, 'titaffydb');
	if(taffFolder.exists()){
		var taffFolder = parent + 'titaffydb';			
		var taffyFile = Ti.Filesystem.getFile(taffFolder, dbName.toUpperCase());
		if (taffyFile.exists()){
			taffyFile.deleteFile();
		}
	}
}