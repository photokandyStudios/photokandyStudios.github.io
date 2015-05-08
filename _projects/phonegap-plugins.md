---
layout: page
title: PhoneGap Plugins
hideTitle: yes
hideTextGroup: yes
active: Projects
image: block-code-large.png
frontImage: block-code.png
blurb: "Some plugins I've created while working in PhoneGap / Cordova that make life a little simpler."
backgroundColor: "#622"
permalink: /projects/phonegap-plugins/
weight: 100
---

# PhoneGap / Cordova Plugins

<div class="card right">
<h1>Useful Links</h1>
<ul class="fa-ul">
<li><i class="fa fa-li fa-link"></i><a target="_blank" href="http://plugins.cordova.io/#/search?search=photokandy">Plugins at the Registry</a></li>
<li><i class="fa fa-li fa-code-fork"></i><a target="_blank" href="https://github.com/photokandyStudios/PKNativeControls">PKNativeControls</a></li>
<li><i class="fa fa-li fa-code-fork"></i><a target="_blank" href="https://github.com/photokandyStudios/PKLocalStorage">PKLocalStorage</a></li>
<li><i class="fa fa-li fa-code-fork"></i><a target="_blank" href="https://github.com/photokandyStudios/PKVideoThumbnail">PKVideoThumbnail</a></li>
<li><i class="fa fa-li fa-info"></i><a href="{{ site.baseurl }}/categories/phonegap-plugins/">News and Updates</a></li>
</ul>
</div>

PhoneGap/Cordova is an awesome framework, and the fact that it can be extended makes it even better. These are some of the
plugins that I've authored:

* [PKNativeControls](https://github.com/photokandyStudios/PKNativeControls){: target="_blank"}: Enables the use of several native iOS controls, including native navigation bars, tool bars, buttons, and more. For iOS 7 only, at the moment, but support for iOS 6 is coming.
* [PKLocalStorage](https://github.com/photokandyStudios/PKLocalStorage){: target="_blank"}: On iOS, if you store data to `localStorage` during a `pause` event, the data is not persisted if the app should not resume. This makes it difficult to build solutions that properly handle app backgrounding states. This plugin, though a bit on the hacky side, ensures that `localStorage` is always saved.
* [PKVideoThumbnail](https://github.com/photokandyStudios/PKVideoThumbnail){: target="_blank"}: This plugin lets you easily extract an image from a video file, which can then be turned into a thumbnail.

## License

All the plugins are MIT licensed.

Copyright (c) 2013, 2014 Kerri Shotts, photoKandy Studios LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
