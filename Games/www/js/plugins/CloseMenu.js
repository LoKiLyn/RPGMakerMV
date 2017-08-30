/**
 * Created by xiaobai on 2017/8/28.
 */

// LJAdd----
Window_Selectable.prototype.addCloseSprite = function() {
    var closeButton = new Sprite_Button();
    var buttonWidth = 48;
    var buttonHeight = 48;
    closeButton.bitmap = ImageManager.loadPicture('Button-Jump');
    // closeButton.setFrame(0, 0, buttonWidth, buttonHeight);
    closeButton.setClickHandler(this.processCancel.bind(this));
    this.addChild(closeButton);
};

_alias_window_base_create_ = Window_Selectable.prototype.refresh();

Window_Selectable.prototype.refresh = function() {
    _alias_window_base_create_.call(this);
    this.addCloseSprite();
};