function tGrid() {

    var self = this;

    /* Create method that fixes nested grids, immediately launch it and add event listener to resize. */
    this.fixNestedGrids = function () {

        /* Get all elements that potentially need fixing... */
        var $toExamine = $('.t-col > .t-grid.t-fill');

        /* ...and examine them. */
        $toExamine.each(function () {

            $this = $(this);

            /* Remove height styles added previously to this element. */
            $this.css({
                'height': ''
            });

            /* Check if its height is less than its parent. */
            var parentHeight = $this.closest('.t-col').outerHeight();

            if (parseInt($this.css('height')) < parentHeight) {
                $this.css({
                    'height': parentHeight
                });
            }
        });

    }
    this.fixNestedGrids();
    $(window).resize(this.fixNestedGrids);

}