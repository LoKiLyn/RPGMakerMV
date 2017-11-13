/**
 * Created by xiaobai on 2017/8/28.
 */

// LJAdd---
Window_MenuStatus_Closable_init = Window_MenuStatus.prototype.initialize;
//
// Window_MenuStatus.prototype.addCloseSprite = function() {
//     var closeButton = new Sprite_Button();
//     var buttonWidth = 100;
//     var buttonHeight = 100;
//     closeButton.bitmap = ImageManager.loadPicture('Button-Jump');
//
//     var scaleRate = 0.3;
//     closeButton.scale.x = scaleRate;
//     closeButton.scale.y = scaleRate;
//
//     closeButton.move(this.width - buttonWidth * scaleRate - 10, 10, buttonWidth * scaleRate , buttonHeight * scaleRate);
//     this.addChild(closeButton);
// };
//
// Window_MenuStatus.prototype.initialize = function(x, y, width, height) {
//     Window_MenuStatus_Closable_init.call(this, x, y, width, height);
//     this.addCloseSprite()
// };


// Scene_Menu_Close Extension

Scene_Menu_Close = Scene_Menu.prototype.createStatusWindow;

Scene_Menu.prototype.createStatusWindow = function () {
    Scene_Menu_Close.call(this);
    this.addCloseSprite();
}

Scene_Menu.prototype.addCloseSprite = function () {
    var closeButton = new Sprite_Button();
    var buttonWidth = 100;
    var buttonHeight = 100;
    closeButton.bitmap = ImageManager.loadPicture('Button-Jump');

    var scaleRate = 0.3;
    closeButton.scale.x = scaleRate;
    closeButton.scale.y = scaleRate;

    closeButton.move(this._statusWindow.width - buttonWidth * scaleRate - 10, 10, buttonWidth * scaleRate , buttonHeight * scaleRate);
    closeButton.setClickHandler(this.popScene);
    this._statusWindow.addChild(closeButton);
}