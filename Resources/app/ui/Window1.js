

module.exports = function(){
	
	var win = Ti.UI.createWindow({
		backgroundColor:'#fff',
		title: 'win 1'
	});
	
	
	var lbl = Ti.UI.createLabel({
		text:'This is Window 1',
		color:'#333'
	});
	
	win.add(lbl);
	
	return win;
	
}
