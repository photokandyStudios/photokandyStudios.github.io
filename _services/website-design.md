---
layout: page
title: Website Design
active: Services
image: "block-website-design-large.png"
imageAlign: center
caption: Every organization needs a beautiful website.
permalink: "/services/website-design/"
blurb: "Need a website fast? Done. We use the latest web technologies and target all the various devices for the perfect experience."
frontImage: "block-website-design.png"
backgroundColor: "#4444CC"
weight: 100
sites: 
  - title: "SM&C"
    frontImage: websites/smc.png
    class: zoomable
    blurb: Simple design for a client; the text has yet to be finalized in this version.
    weight: 200
  - title: NDBT
    frontImage: websites/ndbt.png
    class: zoomable
    blurb: "This was a simple design for a portal where churches could report useful information. Although this isn't a terribly exciting page, it does give an example of the design."
    weight: 300
  - title: photoKandy 2014
    frontImage: websites/photokandy2014.jpg
    class: zoomable
    blurb: Design for photoKandy Studios LLC for 2014. Fully responsive and modern. Generated using Jekyll.
    weight: 0
  - title: photoKandy 2013
    frontImage: websites/photokandy2013.png
    class: zoomable
    blurb: "Design for photoKandy Studios LLC for 2013. Fully responsive, embracing flat design. A single page site."
    weight: 100
  - title: photoKandy 2010
    frontImage: websites/photokandy2010.png
    class: zoomable
    blurb: Design for photoKandy Studios LLC for 2010.
    weight: 400
  - title: KaNDyDesigns Theme 1
    frontImage: "websites/knddesigns-theme1.png"
    class: zoomable
    blurb: "Design for a website I owned back in 2008. Ignore the logo (gag!), but this was a themeable site. This is the first of three themes."
    weight: 500
  - title: KaNDyDesigns Theme 2
    frontImage: "websites/knddesigns-theme2.png"
    class: zoomable
    blurb: "Design for a website I owned back in 2008. Ignore the logo (gag!), but this was a themeable site. This is the second of three themes."
    weight: 600
  - title: KaNDyDesigns Theme 3
    frontImage: "websites/knddesigns-theme3.png"
    class: zoomable
    blurb: "Design for a website I owned back in 2008. Ignore the logo (gag!), but this was a themeable site. This is the third of three themes."
    weight: 700
published: true
---


<div class="card right">
<h1>Useful Links</h1>
<ul class="fa-ul">
<li><i class="fa fa-li fa-behance"></i><a target="_blank" href="https://www.behance.net/collection/21890489/My-Websites">Websites on Behance</a></li>
<li><i class="fa fa-li fa-envelope"></i><a href="{{ site.baseurl }}/contact/">Contact Me</a></li>
</ul>
</div>

We truly believe that every organization should have a beautiful website. Some of our work is below. If you like what you see,
[please contact us]({{site.baseurl}}/contact/).

{% assign cardCollection=page.sites %}
{% include card-collection.html %}
