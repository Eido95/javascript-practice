/* http://stackoverflow.com/questions/881515/how-do-i-declare-a-namespace-in-javascript */
(function( index, $, undefined ) {
    /*//Private Property
    var isHot = true;

    //Public Property
    index.ingredient = "Bacon Strips";

    //Public Method
    index.fry = function() {
        var oliveOil;

        addItem( "\t\n Butter \n\t" );
        addItem( oliveOil );
        console.log( "Frying " + index.ingredient );
    };

    //Private Method
    function addItem( item ) {
        if ( item !== undefined ) {
            console.log( "Adding " + $.trim(item) );
        }
    } */
    /**
     * Current page themes collection.
     */
    var themeEnum;
}( window.index = window.index || {}, jQuery ));

window.onload = function() {
  initialize();
}

function initialize() {
  intitializeConstants();
  initializeTheme(index.themeEnum.Light);
}

function initializeTheme(defaultTheme) {
  changeTheme(defaultTheme);
}

function intitializeConstants() {
  index.themeEnum = {
    Light : 0,
    Dark : 1
  }
  Object.freeze(index.themeEnum);
}
/**
 * Changes current page theme.
 * @param  {index.themeEnum} theme New theme.
 * @return {undefined}
 */
function changeTheme(theme) {
  var link = document.querySelector('.index-current-theme');
  var themePath = "assets/css/index/"
  switch(theme) {
    case index.themeEnum.Light:
      link.href = themePath + "light.css";
    break;
    case index.themeEnum.Dark:
      link.href = themePath + "dark.css";
    break;
  }
}
