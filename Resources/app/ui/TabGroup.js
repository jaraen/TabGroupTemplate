
var Mods = require('/ModulePaths');		//load module paths

var Window1 = require(Mods.WINDOW1),
	Window2 = require(Mods.WINDOW2),
	Window3 = require(Mods.WINDOW3);

module.exports = function(_args) {
	

	var tabGroup = Ti.UI.createTabGroup();
	
	var win1 = new Window1();
	
	var win2 = new Window2();
	
	var win3 = new Window3();


	var tab1 = Ti.UI.createTab({
		window: win1,
		icon:'KS_nav_ui.png'
	});
	
	var tab2 = Ti.UI.createTab({
		window:  win2,
		icon:'KS_nav_views.png'
	});
	
	var tab3 = Ti.UI.createTab({
		window:  win3,
		icon:'KS_nav_ui.png',
	});
	

	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	tabGroup.addTab(tab3);
		
	
	return tabGroup;
};

