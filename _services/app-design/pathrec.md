---
layout: page
title: PathRec
hideTextGroup: yes
active: Services
image: forest.jpg
carousel:
 - [ phonegap-3-x-hotshot/pathrec/tns/IMG_0542.png, phonegap-3-x-hotshot/pathrec/IMG_0542.png ]
 - [ phonegap-3-x-hotshot/pathrec/splash.png, phonegap-3-x-hotshot/pathrec/splash.png ]
permalink: /services/app-design/pathrec/
weight: -1
---

# PathRec

![Icon]({{ site.baseurl }}/images/phonegap-3-x-hotshot/pathrec/icon.png){: class="zoomable no-fill limit-width-300 right" }

PathRec is an app written for my book, [PhoneGap 3.x Mobile Application Development Hotshot]({{site.baseurl}}/books/phonegap-3-x-hotshot/).
The app allows the user to record their location over a period of time. The user can then display their path at any time.
The app is built on Cordova 3.x, and supports iOS and Android. Plugins used include: Geolocation,
Globalization, Status Bar, and Keyboard.

The icon is to the right, minus the iOS 7 curved borders (these are applied automatically by the
operating system). The icon is meant to symbolize recording (the red dot) the user's location (the cross-hairs in a circle.

###### Main Screen
![Main Screen]({{ site.baseurl}}/images/phonegap-3-x-hotshot/pathrec/IMG_0542.png){: class="zoomable"}

This is a bit more than what the actual screen shows -- technically the view is an off-canvas view (ala Facebook). Therefore,
when the left-hand sidebar is visible, a portion of the right-hand view is cut off. When the entire right-hand view is visible,
the left-hand sidebar is hidden. The user can use the hamburger menu to toggle this state.

The green path in the shot represents a recorded path, and the marker indicates the user's current position.
