jQuery( document ).ready(function( $ ) {
  console.log("test");
  $( "#my-slider" ).sliderPro({
    width: 1200,
    height: 500,
    arrows: true,
    fadeArrows: false,
    buttons: false,
    waitForLayers: true,
    fade: true,
    autoplay: false,
    autoScaleLayers: false,
    thumbnailWidth: 390,
    thumbnailHeight: 84,
    updateHash: true,
    thumbnailTouchSwipe: false,
    // breakpoints: {
    //   800: {
    //     width: 768,
    //     thumbnailWidth: 120,
    //     thumbnailHeight: 50
    //   },
    //   500: {
    //     width: 480
    //   }
    // },
    init: function(  ) {
      $(".sp-thumbnails-container").css("width", "900px");
      if ( $(".sp-selected-thumbnail").is(":first-child")) {
        $( ".sp-thumbnail-container" ).last().addClass( "thumbnail-left" );
        $( ".sp-selected-thumbnail" ).next(".sp-thumbnail-container").addClass( "thumbnail-right" );
      }
    },
    gotoThumbnail: function(  ) {
      $( ".sp-thumbnails" ).css( "transform", "translate3d(-92px, 0px, 0px)" );
      $( ".thumbnail-left" ).removeClass( "thumbnail-left" );
      $( ".thumbnail-right" ).removeClass( "thumbnail-right" );
      $( ".sp-selected-thumbnail" ).prev(".sp-thumbnail-container").addClass( "thumbnail-left" );
      $( ".sp-selected-thumbnail" ).next(".sp-thumbnail-container").addClass( "thumbnail-right" );
      if ( $(".sp-selected-thumbnail").is(":last-child")) {
        $( ".sp-thumbnail-container" ).first().addClass( "thumbnail-right" );
      }
      if ( $(".sp-selected-thumbnail").is(":first-child")) {
        $( ".sp-thumbnail-container" ).last().addClass( "thumbnail-left" );
      }
    }
  });

  // $(window).resize( function() {
  //   var slider = $( '#my-slider' ).data( 'sliderPro' );

  //   slider.width();

  //   slider.update();
  // });


});

