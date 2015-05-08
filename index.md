---
layout: page
title: Home
active: Home
image: home0.jpg
images:
 - home1.jpg
 - home2.jpg
 - home3.jpg
longTitle: We Build Things
caption: "Apps, Graphics, Websites, O My!"
weight: 0
---
<div class="card-collection">
{% for c in site.collections %}
  {% assign collection=c[1] %}
  {% if collection.frontImage %}
<div class="card" onclick='window.location.href="{{ site.baseurl }}{{ collection.url }}"'>
<h1>{{ collection.title }}</h1>
<img src="{{ site.baseurl }}/images/{{ collection.frontImage }}" />
<p>{{ collection.frontPage }} <a href="{{ site.baseurl }}{{ collection.url }}">Learn more...</a></p>
</div>
  {% endif %}
{% endfor %}
</div>

# Welcome

**photoKandy Studios LLC** was formed in 2009, and has since been in the business of building things -- *whatever* those things
might be. I'm a passionate creator, and put those talents to work in many different fields, including
[mobile application development]({{ site.baseurl }}/services/app-design),
[website design]({{ site.baseurl }}/services/website-design/), [graphic design]({{ site.baseurl }}/services/graphic-design/), and
[IT consulting]({{ site.baseurl}}/services/consulting/). If you're interested in what you see, have a burning question,
or just want to chat a bit, [feel free to send a note]({{ site.baseurl }}/contact/).

# Latest News

{% assign post=site.posts[0] %}
<div class="post" style="clear: both">
  <div class="card right">
  {%if post.frontImage %}<img src="{{site.baseurl}}/images/{{post.frontImage}}" />{% endif %}
  <ul class="fa-ul">
    {% if post.date %}<li><i class="fa fa-li fa-calendar"></i> {{ post.date | date: "%b %-d, %Y" }}</li>{% endif %}
    {% if post.author %}<li><i class="fa fa-li fa-user"></i> {{ post.author }}</li>{% endif %}
  </ul>
  </div>
  <h2><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
  {{post.content | summarize: "<more></more>"}}<p><a href="{{ post.url | prepend: site.baseurl }}">Read more...</a></p>
</div>
<div style="clear: both"></div>
