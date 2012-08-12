

//avoid initial slash in paths under mobileweb platform

var firstSeparator = (Ti.Platform.name === 'mobileweb') ? '' : '/';

var ui = firstSeparator + 'app/ui/';

module.exports = {
	TABGROUP: ui + 'TabGroup',
	WINDOW1:  ui + 'Window1',
	WINDOW2:  ui + 'Window2',
	WINDOW3:  ui + 'Window3',
	
	STYLES: ui + 'Styles'
	
}
