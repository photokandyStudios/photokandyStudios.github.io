---
layout: page
title: Mobile Design
active: Services
image: block-mobile-design-large.png
imageAlign: center
caption: "Native and Hybrid; iOS and Android"
permalink: /services/app-design/
blurb: "Whatever your mobile application needs, we can build your dreams. We can build hybrid or native apps, and target iOS and Android."
frontImage: block-mobile-design.png
weight: 0
cards:
 - title: "Greek Interlinear Bible 1.3"
   url: "./greek-interlinear-bible/"
   frontImage: app-gib-block.png
   blurb: "This app runs on iOS and utilizes many different technologies, including SQLite, advanced text layout, and Parse."
   weight: 0
 - title: "Filer"
   url: "./filer/"
   frontImage: book-7925-block-filer.png
   blurb: "This app runs on iOS and Android using Cordova and many different third party plugins. Written for my book, <a href='../../books/phonegap-3-x-hotshot'>PhoneGap 3.x Mobile Application Development Hotshot</a>."
   weight: 100
 - title: "PathRec"
   url: "./pathrec/"
   frontImage: book-7925-block-pathrec.png
   blurb: "This app runs on iOS and Android using Cordova and many different third party plugins. Written for my book, <a href='../../books/phonegap-3-x-hotshot'>PhoneGap 3.x Mobile Application Development Hotshot</a>."
   weight: 200
 - title: "Cave Runner"
   url: "./caverunner/"
   frontImage: book-7925-block-caverunner.png
   blurb: "This app runs on iOS and Android using Cordova and many different third party plugins. Written for my book, <a href='../../books/phonegap-3-x-hotshot'>PhoneGap 3.x Mobile Application Development Hotshot</a>."
   weight: 300
 - title: "Enterprise SOAP App"
   frontImage: block-code.png
   blurb: "This was an enterprise app written for a client running on iOS and Android. The app utilized PhoneGap 2.x and communicated with web services via SOAP."
   weight: 400
 - title: "Coming Soon"
   frontImage: block-code.png
   blurb: "I can't tell you just yet what this app will be, or what it will look like. But it will be <em>awesome</em>!"
   weight: 500
---

# Mobile App Design

<div class="card right">
<h1>Useful Links</h1>
<ul class="fa-ul">
<li><i class="fa fa-li fa-behance"></i><a target="_blank" href="https://www.behance.net/collection/21888919/My-iOS-Apps">Apps on Behance</a></li>
<li><i class="fa fa-li fa-info"></i><a href="{{ site.baseurl }}/categories/apps/">News and Updates</a></li>
<li><i class="fa fa-li fa-envelope"></i><a href="{{ site.baseurl }}/contact/">Contact Me</a></li>
</ul>
</div>

I *love* creating mobile applications! I'm passionate about the experience that these mobile devices can provide, and
look forward to working with *you* to bring your dreams to reality on a mobile device.

I primarily target iOS (iPhone, iPad, iPod Touch) and Android devices using a variety of technologies. These include
native languages (Objective C, Swift, Java) and hybrid technologies (PhoneGap / Cordova). I can build your app based on
a user interface design you might have in mind, or I can create the entire experience. Below are some examples of my
work:

{% assign cardCollection=page.cards %}
{% include card-collection.html %}
