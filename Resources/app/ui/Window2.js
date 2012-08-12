

module.exports = function(){
	
	var win = Ti.UI.createWindow({
		backgroundColor:'#999',
		title: 'win 2'
	});
	
	
	var lbl = Ti.UI.createLabel({
		text:'This is Window 2',
		color:'#fff'
	});
	
	win.add(lbl);
	
	return win;
	
}
