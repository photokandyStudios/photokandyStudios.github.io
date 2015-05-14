---
layout: page
title: Greek Interlinear Bible
hideTextGroup: "yes"
active: Services
image: forest.jpg
carousel: 
  - - "apps/greek-interlinear-bible/tns/IMG_0543.png"
    - "apps/greek-interlinear-bible/IMG_0543.png"
  - - "apps/greek-interlinear-bible/tns/IMG_0544.png"
    - "apps/greek-interlinear-bible/IMG_0544.png"
  - - "apps/greek-interlinear-bible/tns/IMG_0545.png"
    - "apps/greek-interlinear-bible/IMG_0545.png"
  - - "apps/greek-interlinear-bible/tns/IMG_0546.png"
    - "apps/greek-interlinear-bible/IMG_0546.png"
  - - "apps/greek-interlinear-bible/tns/IMG_0547.png"
    - "apps/greek-interlinear-bible/IMG_0547.png"
  - - "apps/greek-interlinear-bible/tns/IMG_0548.png"
    - "apps/greek-interlinear-bible/IMG_0548.png"
  - - "apps/greek-interlinear-bible/tns/IMG_0549.png"
    - "apps/greek-interlinear-bible/IMG_0549.png"
  - - "apps/greek-interlinear-bible/tns/IMG_0550.png"
    - "apps/greek-interlinear-bible/IMG_0550.png"
  - - "apps/greek-interlinear-bible/tns/IMG_0551.png"
    - "apps/greek-interlinear-bible/IMG_0551.png"
  - - "apps/greek-interlinear-bible/tns/IMG_0552.png"
    - "apps/greek-interlinear-bible/IMG_0552.png"
imageAlign: left
permalink: "/services/app-design/greek-interlinear-bible/"
weight: -1
published: true
---


# Greek Interlinear Bible

![Icon]({{ site.baseurl }}/images/apps/greek-interlinear-bible/icon.png){: class="zoomable no-fill limit-width-300 right" }

The Greek Interlinear Bible is built to permit easy study of the Greek New Testament. It features advanced text layout
that allows for the proper rendering of English text in columns with Greek words, morphology (and more), while remaining
easy to read. It also uses a SQLite database as the underlying engine for storing highlights, notes, and more. It uses
Parse as the back-end to support additional content downloads.

The icon for version 1.3 is to the right, minus the iOS 7 curved borders (these are applied automatically by the
operating system). The greek letters are *gamma*, *iota*, and *beta* -- corresponding roughly to the initials of the
app's name. They are also slightly stylized. The glyph at the bottom is meant to reflect an open book.

###### Main Screen
![Main Screen]({{ site.baseurl}}/images/apps/greek-interlinear-bible/IMG_0543.PNG){: class="zoomable" data-zoom-img=":same:"}

The main screen shows how the text is rendered using the advanced text layout mechanisms. In fact, there's a lot going
on here, even though it doesn't look like it -- the size of each word has to be individually calculated (since the font
can be changed by the user) and it also has to calculate where it should display based on the words around it. Often words
get shifted around by several pixels in order to avoid large holes in the text.

###### Text Layout Controls
![Layout]({{ site.baseurl}}/images/apps/greek-interlinear-bible/IMG_0544.PNG){: class="zoomable no-fill limit-width left" data-zoom-img=":same:"}

The user has quite a bit of control over how the text is rendered. They can select from four color schemes (two for day
reading and two for night reading). They can adjust the font size, and they can also select specific fonts for each side
of the display. They can also control the column widths in addition to the line and verse spacing. Finally, they can
control the brightness of the display.

###### Sidebar
![Sidebar]({{ site.baseurl}}/images/apps/greek-interlinear-bible/IMG_0545.PNG){: class="zoomable no-fill limit-width right" data-zoom-img=":same:"}

The sidebar is where the user can access the books of the New Testament (shown right), their highlights, notes that
they've added to verses, search the Strong's Dictionary and Bible text, and view their recent history.

###### Settings
![Settings]({{ site.baseurl}}/images/apps/greek-interlinear-bible/IMG_0550.PNG){: class="zoomable no-fill limit-width left" data-zoom-img=":same:"}

There are a lot of settings that the user can change. Some duplicate the functionality present on the main window, but most
are distinct. There are controls for further layout adjustments (such as whether or not Greek words are larger than their
surrounding text) as well as options for importing and exporting content.

###### Downloading Content
![Available Content]({{ site.baseurl}}/images/apps/greek-interlinear-bible/IMG_0551.PNG){: class="zoomable" data-zoom-img=":same:"}

![Download Content]({{ site.baseurl}}/images/apps/greek-interlinear-bible/IMG_0552.PNG){: class="zoomable no-fill limit-width right" data-zoom-img=":same:"}

The above window shows the built-in texts (which are always present in the app), any installed texts, and any downloadable
texts. The user can view information about any of the available texts by tapping on the row, which presents the image to
the right. The user can then decide if they want to download the content (or if it is installed, they can remove the content to
free up space).
