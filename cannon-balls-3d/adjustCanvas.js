var FamobiSafeArea = {};

FamobiSafeArea.changeSize = function(config) {
    this.safeAreaUpdate({
        ...{
            topPixels: 0,
            bottomPixels: 0,
            leftPixels: 0,
            rightPixels: 0
        },
        ...config
    });
}

FamobiSafeArea.safeAreaUpdate = function (config = {}) {
    let topPixels = config.topPixels;
    let bottomPixels = config.bottomPixels;
    let leftPixels = config.leftPixels;
    let rightPixels = config.rightPixels;
    
    const screenResHeight = window.innerHeight;
    const screenResWidth = window.innerWidth;

    const availableWidth = screenResWidth - leftPixels - rightPixels;
    const availableHeight = screenResHeight - topPixels - bottomPixels;

    /* PLAYCANVAS ADJUSTMENT */
    if(typeof(pc) !== "undefined") {
        console.log("[Adjust Canvas]: PLAYCANVAS");
        
        pc.app.setCanvasResolution(pc.RESOLUTION_FIXED, availableWidth, availableHeight);
        pc.app.graphicsDevice.canvas.style.width = availableWidth + 'px';
        pc.app.graphicsDevice.canvas.style.height = availableHeight + 'px';

        pc.app.graphicsDevice.canvas.style.left = leftPixels + 'px';
        pc.app.graphicsDevice.canvas.style.right = rightPixels + 'px';
        pc.app.graphicsDevice.canvas.style.top = topPixels + 'px';
        pc.app.graphicsDevice.canvas.style.bottom = bottomPixels + 'px';

        pc.app.fire('famobi:resizeCanvas', availableWidth, availableHeight);
    }

    /* OTHER */
    //...
    
    FamobiSafeArea.backgroundColorUpdate();
};

FamobiSafeArea.backgroundColorUpdate = function() {
    document.body.style.backgroundColor = "#000000";
}