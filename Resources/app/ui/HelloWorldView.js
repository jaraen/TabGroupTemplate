
var Mods = require('/ModulePaths');

var Tools = require(Mods.TOOLS),
	$$ = require(Mods.STYLES);

module.exports = function(args) {
	
	var args = args || {};
	
	var msg = args.value || 'Hello'; //assign default value if args.value is not defined
	
	var view = Ti.UI.createView({
		top:0, left:0, right:0, bottom:0,
		backgroundColor:'#fff'
	});
	
	var lbl = Ti.UI.createLabel(Tools.combine($$.Label, {
		text: msg
	}));
	
	view.add(lbl);
	
	return view;
}
