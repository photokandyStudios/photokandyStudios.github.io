---
layout: page
title: Books
active: Books
backgroundColor: "#44CC44"
image: book-7925-slide0.jpg
images:
 - book-7925-slide0.jpg
 - book-9403-slide0.jpg
 - book-6289-slide0.jpg
imageAlign: top
permalink: /books/
weight: 300
---
I *love* to write about all sorts of things, but especially technology. Below are my most recent books.

{% assign cardCollection = site.books | sort: 'weight' %}
{% include card-collection.html %}
