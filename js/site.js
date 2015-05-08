/*****************************************************************************
 *
 * Site-wide code for photoKandy Studios 2014 site
 * (C) Kerri Shotts 2014
 *
 *****************************************************************************/

var APP = {};

APP.displayLightBox = function displayLightBox ()
{
  var o = this,
      backdrop = document.createElement("div"),
      image = document.createElement("img"),
      zoomImage = o.getAttribute("data-zoom-img");

  /* style the backdrop */
  backdrop.className = "lb-backdrop";

  /* figure out what the zoomImage should be */
  if (typeof zoomImage === "undefined" || zoomImage === null || zoomImage === ":same:") {
    zoomImage = o.src; // assume that the image is being compressed by the browser
  }
  /* style the image */
  image.src = zoomImage;

  /* add the image to the backdrop */
  backdrop.appendChild ( image );

  /* add the backdrop to the body */
  document.body.appendChild ( backdrop );

  /* show the backdrop */
  setTimeout ( function () {
    backdrop.style.opacity = "1"; // should have a transition to fade it in.
  },0);

  backdrop.addEventListener ( "click", function onClick ()
  {
    backdrop.removeEventListener ( "click", onClick );
    setTimeout ( function () {
      backdrop.style.opacity = "0";
    }, 0);
    setTimeout ( function () {
      document.body.removeChild ( backdrop );
    }, 500);
  });
};

APP.wireLightBox = function wireLightBox ( o ) {
  o.addEventListener ( "click", APP.displayLightBox );
};

APP.wireAllLightBoxes = function wireAllLightBoxes() {
  var lbs = Array.prototype.slice.call(document.querySelectorAll ( "img.zoomable" ),0);
  lbs.forEach ( APP.wireLightBox );
};

APP.toggleNav = function toggleNav ( evt ) {
  if (typeof evt === "undefined") { evt = window.event; }
  var toggles = [ document.getElementById ("mainNav"),
                 document.getElementById ("toggle"),
                 document.getElementById ("container") ];
  toggles.forEach ( function (e) { e.classList.toggle("navVisible"); } );
  if (evt.preventDefault) { evt.preventDefault(); }
  if (evt.stopImmediatePropagation) { evt.stopImmediatePropagation(); }
  if (evt.returnValue) { evt.returnValue = false; }
  return false;
};

APP.doSlideShowTick = function doSlideShowTick ( parent )
{
  var slides = Array.prototype.slice.call(parent.querySelectorAll ( "div.slide" ),0);
  var currentTick = parent.getAttribute ( "data-tick" );
  var numberSlides = slides.length;

  currentTick = parseInt(currentTick,10) ;

  slides.forEach ( function ( slide, i ) {
    slide.style.opacity = (i<=currentTick) ? "1" : "0";
  });

  currentTick++;
  if (currentTick >= numberSlides ) { currentTick = 0; }
  parent.setAttribute ( "data-tick", currentTick );

  setTimeout ( function() { APP.doSlideShowTick( parent ); }, 10000 );
};

APP.initializeSlideShows = function initializeSlideShow () {
  var slides = document.querySelectorAll ( "#main article header div.slide" );
  if (slides.length > 0) {
    var parent = slides[0].parentNode;
    parent.setAttribute ( "data-tick", 0 );
    setTimeout ( function() { APP.doSlideShowTick (parent); }, 2000 );
  }
};

APP.redirectBasedOnHash = function redirectBasedOnHash () {
  var hash = window.location.hash.substr(1),
      redirect = "",
      baseUrl = window.location.origin;
  switch (hash) {
case "apps": { redirect = "/apps/"; break; }
case "about": { redirect = "/about/"; break; }
case "consulting": { redirect = "/services/consulting/"; break; }
case "design": { redirect = "/services/graphic-design/"; break; }
case "books": { redirect = "/books/"; break; }
case "blog": { redirect = "/blog/"; break; }
case "contact": { redirect = "/contact/"; break; }
case "terms": { redirect = "/terms/"; break; }
  }
  if (redirect !== "") { window.location.replace ( redirect ); }
};

APP.start = function start () {
  // do initialization stuff, like looking for slideshows, initing feeds, and such
  APP.redirectBasedOnHash();
  APP.initializeSlideShows();
  APP.wireAllLightBoxes();
};
