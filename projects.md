---
layout: page
title: Projects
active: Projects
image: block-code-large.png
permalink: /projects/
weight: 400
---
I'm involved in all sorts of projects -- here's a few below:

{% assign cardCollection = site.projects | sort: 'weight' %}
{% include card-collection.html %}
