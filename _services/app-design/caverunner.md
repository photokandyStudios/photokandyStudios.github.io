---
layout: page
title: Cave Runner
hideTextGroup: yes
active: Services
image: forest.jpg
carousel:
 - [ phonegap-3-x-hotshot/caverunner/tns/IMG_0853.png, phonegap-3-x-hotshot/caverunner/IMG_0853.png ]
 - [ phonegap-3-x-hotshot/caverunner/tns/IMG_0713.png, phonegap-3-x-hotshot/caverunner/IMG_0713.png ]
 - [ phonegap-3-x-hotshot/caverunner/splash.png, phonegap-3-x-hotshot/caverunner/splash.png ]
permalink: /services/app-design/caverunner/
weight: -1
---

# Cave Runner

![Icon]({{ site.baseurl }}/images/phonegap-3-x-hotshot/caverunner/icon.png){: class="zoomable no-fill limit-width-300 right" }

Cave Runner is an app written for my book, [PhoneGap 3.x Mobile Application Development Hotshot]({{site.baseurl}}/books/phonegap-3-x-hotshot/).
The app is a simple arcade game built to demonstrate using the HTML5 `canvas` tag and how to accept input from the accelerometer.
The app is built on Cordova 3.x, and supports iOS and Android. Plugins used include: Geolocation,
Globalization, Status Bar, Device-Motion, and Keyboard.

The icon is to the right, minus the iOS 7 curved borders (these are applied automatically by the
operating system).

###### Main Screen
![Main Screen]({{ site.baseurl}}/images/phonegap-3-x-hotshot/caverunner/IMG_0853.png){: class="zoomable no-fill limit-height left"}

This screenshot is actually from the second version of the app, where we added a global high-scores table using Parse.
The look and feel is intentionally skewed away from any one OS's standard appearance (games often get away with this).

###### Game Play
![Crash!]({{ site.baseurl}}/images/phonegap-3-x-hotshot/caverunner/IMG_0713.png){: class="zoomable limit-height no-fill right"}

Shoot! We crashed. This is an example of what the game looks like: there's a cave that has obstacles in it that the player
must successfully navigate. It's a bit like an endless runner, except the levels actually do end -- but a new one begins
that is even harder than the last.
