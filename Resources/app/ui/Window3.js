

module.exports = function(){
	
	var win = Ti.UI.createWindow({
		backgroundColor:'#333',
		title: 'win 3'
	});
	
	
	var lbl = Ti.UI.createLabel({
		text:'This is Window 3',
		color:'#bbb'
	});
	
	win.add(lbl);
	
	
	return win;
	
}
