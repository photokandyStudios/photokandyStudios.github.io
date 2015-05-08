---
layout: post
title:  "PhoneGap 3.x Mobile Application Development Hotshot Released"
hideTitle: yes
author: Kerri Shotts
date:   2014-06-01 16:13:44
categories: phonegap-3-x-hotshot books
active: Blog
image: book-7925-slide0.jpg
frontImage: book-7925-small.jpg
backgroundColor: "#44CC44"
buttons:
 - text: Buy on Amazon
   url: "http://www.amazon.com/PhoneGap-Mobile-Application-Development-Hotshot-ebook/dp/B00KLAJ5Z0/"
   icon: "fa fa-shopping-cart"
 - text: Buy from Packt
   url: "http://www.packtpub.com/phonegap-3-x-mobile-application-development-hotshot/book"
   icon: "fa fa-shopping-cart"
---

I'm so proud to announce that my new book, *PhoneGap 3.x Mobile Application Development Hotshot* is now available for
purchase. It's an update to my earlier book, and it has been modernized and updated for Cordova 3.x. Although the title
includes "PhoneGap" in the name, it generally uses the Cordova Command Line Interface ("PhoneGap" is more recognizable
in the market).
<more></more>

The book will guide you through the installation of the Cordova and PhoneGap CLIs and will also guide you through the
development of three fully functional and interesting mobile apps. These apps are cross-platform (they work on iOS 6+
and Android 4.x) and support multiple form factors (phone and tablet).

![Filer]({{ site.baseurl }}/images/book-7925-block-filer.png){: alt="Filer" class="zoomable no-fill left limit-width-300" data-zoom-img="{{site.baseurl}}/images/phonegap-3-x-hotshot/filer/IMG_0540.PNG" }

The first app is the most complex and is the one we spend seven chapters with. What starts out as a simple note-taking
app is grown over the course of several chapters into a app that can play and record audio, take photos, and record
video. When we're done, it can also share content to social networks, and it can also adapt to different screen sizes.

![PathRec]({{ site.baseurl }}/images/book-7925-block-pathrec.png){: alt="PathRec" class="zoomable no-fill right limit-width-300" data-zoom-img="{{site.baseurl}}/images/phonegap-3-x-hotshot/pathrec/IMG_0542.PNG" }

The second app focuses on Google Maps and GPS -- it allows the user to record their location over a period of time. This
path then shows up on the map using Google's polylines. There's also an online chapter where we extend the app to use
native controls (for iOS 7 only).

![Cave Runner]({{ site.baseurl }}/images/book-7925-block-caverunner.png){: alt="Cave Runner" class="zoomable no-fill left limit-width-300" data-zoom-img="{{site.baseurl}}/images/phonegap-3-x-hotshot/caverunner/IMG_0713.PNG" }

The final app proves that we can learn *and* have fun doing it, too. The app is a simple arcade-style game that uses the
HTML5 Canvas and the accelerometer. The second version of the app adds support for a high score table (stored using Parse,
a backend-as-a-service).

Throughout the book we also focus on technologies related to mobile application development. We introduce **RequireJS**, which
makes building large, complex apps easier with dependency management. We utilize **Hammer.js** to provide gesture recognition
(for **swipe-to-delete** and **fast touch recognition**). We also utilize **CSS3 transitions and transforms** for smooth animation.

One possibly controversial decision is the use of the YASMF-Next framework in the book. First, I wanted to write a book
*about PhoneGap*, not a book *about a specific framework* like jQuery or Sencha Touch. Unfortunately, although it's possible
to write apps without any framework, one quickly builds up a repository of reusable components that, over time, morph into
a framework themselves. And that's *[YASMF-Next]({{site.baseurl}}/projects/yasmf-next/)* -- a framework I've designed
that meets most of my needs when it comes to creating apps in PhoneGap. It's young and immature, but it is being worked
on heavily. An earlier version of this framework was used in the prior edition of the book, but my coding has grown in the
last several months, and the new version of the framework reflects this. Furthermore, the framework is small -- it's not
terribly complicated, which means that it can be used as a learning tool as well (much as Minix can be used as a learning
tool for operating system design). In addition, the book usually explains how YASMF-Next is accomplishing everything and
shows similar code for accomplishing the tasks if you don't want to use the framework. And, of course, you can always take
the skills learned in the book and apply them to many of the other popular frameworks.

Finally, I wanted to thank all the reviewers who participated in making sure the content going into the book was accurate
(and that it made sense), and Steve Husting in particular who was roped into testing the code (Thanks -- you're a trooper!).
I also wanted to thank all the hard workers at Packt Publishing who put everything together, kept me on task, limited my
ramblings (sometimes to no avail, sorry!), and got this out the door.

So what are you waiting for? Use those "buy" buttons at the top of this post, or visit the following links to purchase the
book! And if you'd be so kind to leave a review, that would be *amazing*!

* Buy the book:
    * [Amazon.com]({{ page.buttons[0].url }})
    * [Packt Publishing]({{ page.buttons[1].url }})
* More information:
    * [PhoneGap 3.x Mobile Application Design Hotshot]({{ site.baseurl }}/books/phonegap-3-x-hotshot/)
