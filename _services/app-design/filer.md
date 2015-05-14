---
layout: page
title: Filer
hideTextGroup: "yes"
active: Services
image: forest.jpg
carousel: 
  - - "phonegap-3-x-hotshot/filer/tns/IMG_0677.png"
    - "phonegap-3-x-hotshot/filer/IMG_0677.png"
  - - "phonegap-3-x-hotshot/filer/tns/IMG_0830.png"
    - "phonegap-3-x-hotshot/filer/IMG_0830.png"
  - - "phonegap-3-x-hotshot/filer/tns/IMG_0540.png"
    - "phonegap-3-x-hotshot/filer/IMG_0540.png"
  - - "phonegap-3-x-hotshot/filer/tns/IMG_0541.png"
    - "phonegap-3-x-hotshot/filer/IMG_0541.png"
permalink: "/services/app-design/filer/"
weight: -1
published: true
---


# Filer

![Icon]({{ site.baseurl }}/images/phonegap-3-x-hotshot/filer/icon.png){: class="zoomable no-fill limit-width-300 right" }

Filer is an app written for my book, [PhoneGap 3.x Mobile Application Development Hotshot]({{site.baseurl}}/books/phonegap-3-x-hotshot/).
The app is intended to support many different kinds of media as notes -- such as audio, video, and images (and text, of course).
The app is built on Cordova 3.x, and supports iOS and Android. Plugins used include: Media, Media-Capture, Camera,
Globalization, Keyboard, and a third-party sharing plugin.

The icon is to the right, minus the iOS 7 curved borders (these are applied automatically by the
operating system). The "7" simply represents the version number -- there are seven versions of the project in the book.

###### Main Screen
![Main Screen]({{ site.baseurl}}/images/phonegap-3-x-hotshot/filer/IMG_0677.PNG){: class="zoomable limit-height no-fill left"}

This is the main screen that the app uses. The icons next to each note can vary based upon the type of media. The look and
feel changes according to whether or not the app is running on iOS (shown) or Android (not shown, but uses a light Holo
theme).

###### Audio Notes
![Audio Notes]({{ site.baseurl}}/images/phonegap-3-x-hotshot/filer/IMG_0830.PNG){: class="zoomable limit-height no-fill right"}

The image to the right is an example of one of the editing screens -- this one for an audio note. There are different editing
screens for different note types -- one that's pure text, another for photos, and one for video.

###### Responsive Design
![Responsive Design]({{ site.baseurl}}/images/phonegap-3-x-hotshot/filer/IMG_0540.PNG){: class="zoomable" }

![Responsive Design]({{ site.baseurl}}/images/phonegap-3-x-hotshot/filer/IMG_0541.PNG){: class="zoomable limit-height no-fill right limit-width-300" }

The final version of the app in the book is modified to support multiple form factors -- the above is one of the responses
to the larger screen -- the list view is replaced with a grid pattern where each item looks a bit like a document icon.

The image to the right is another response -- a split view is used instead. Technically, it's not the best example, since
the document grid fits the app better, but we needed to cover multiple methods for responding to a larger screen.
