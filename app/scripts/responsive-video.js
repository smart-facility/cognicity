'use strict';

$(function() {
    // Figure out and save aspect ratio for each video
    $('iframe[src^="//player.vimeo.com"]').each(function() {
        $(this).data('aspectRatio', this.height / this.width)
               .removeAttr('height')
               .removeAttr('width');
    });

    // When the window is resized
    $(window).resize(function() {
        // Resize all videos according to their own aspect ratio
        $('iframe[src^="//player.vimeo.com"]').each(function() {
            var $this = $(this);
            var newWidth = $this.parent().width();
            $this.width(newWidth)
               .height(newWidth * $this.data('aspectRatio'));
        });
    }).resize();
});
