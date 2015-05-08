---
layout: post
title:  "Writing a Technical Book"
author: Kerri Shotts
date:   2014-06-08
categories: books technical-writing
active: Blog
image: block-writing-large.png
frontImage: block-writing.png
backgroundColor: "#44CC44"

---

This is part 1 of a series regarding technical writing. [See other related posts]({{site.baseurl}}/categories/technical-writing).

As you may or may not know, I've now written two pretty large technical books (one was the second edition of the first). If you want to know more about those books, [you can see all my books here]({{site.baseurl}}/books/). This post is more about the *process* of writing technical books, and later posts will go into more detail about my experiences with Packt Publishing (the publisher).

<more></more>
	
## You Won't Get Rich Writing Technical Books
First off, let's make something very clear: technical books are mostly *niche* products. They *aren't* going to make you rich, and only a very few writers are going to either have enough name recognition or will have written enough books in order to generate significant income. This is a fact, and you shouldn't approach writing a technical book with "getting rich" in mind. It probably won't happen.

There are several reasons for this fact:

* Technical books often apply to a very narrow audience (by their very nature)
* Technical books are commodities
* Technical books are instantly obsolete 
* Advances, royalties, and e-books

### Technical Books Apply to a Very Narrow Audience

It should be pretty obvious that the very nature of a technical book inherently limits the number of people who will purchase it. It's not like the book you are writing is a fiction book that's going to be the next *Harry Potter* and will sell millions and millions of copies. Even if your book is about a widely used programming language or other well known topic, the number of people who are going to *buy* your book are far less than those who are going to buy typical fiction (or even non-fiction) books. 

### Technical books are Commodities

That is to say that the publisher has no incentive to spend a huge sum of money on a technical book, nor do they have an incentive to take their time with more than a couple editing passes and such. Most of this is due to the next point, but I think you should already understand why this is generally true: technology often moves far too quickly for typical publishing. Technology is *fast*, writing and publishing is *slow*.

Now, this isn't to say that the publisher doesn't want to put a good book on the shelves -- of course they do. But neither do they have any incentive to pay you a large advance for it, nor do they have any incentive to allow you to take three or four years to "make it perfect" (much to the chagrin of perfectionists everywhere). In the first case, there's always someone else willing to do the writing "just for fun" (and that isn't meant to be derogatory -- *I* like writing *just for fun*), and there's always the chance that the technology will quickly move on, leaving you in a perpetual state of editing and playing catch-up.

### Technical Books are Instantly Obsolete

Just to underscore the point, my book was about PhoneGap / Cordova 3.x. By the time the book was done, Cordova was at 3.4, and all the examples had been tested on that version. Two days after publication, Cordova 3.5 was released. Now, as far as I can tell, it broke nothing -- but there were occasions during the writing process where changes were released that *did* break things. And of course, there's still the chance that Cordova 3.6 or a plugins release will *still* break the book. And, of course, being in print, there's no way to fix it, short of submitting *errata* and hoping that readers will look at them.

### Advances, Royalties, and E-books

Now, Packt generally offers a pretty good advance for their technical publishing, especially for first editions. (Later editions get lower advances, because it is assumed one won't have to rewrite the whole thing. Which was not the case for the second edition of my book, but oh well!) Packt's royalty rate is pretty good too, but it comes out to a few dollars per unit. Furthermore, you won't see any royalty payments until your advance is paid off, so if a book sells slowly or poorly, it may be quite some time before you see any more income from your efforts. 

Not that I'm complaining in all of this, *I'm not*. I love writing, and do it *for fun*, so I have no problem with the economies involved here. But if I were to be honest, and I were to *value* the book based on the time it took and the amount I would charge a client, the book would easily have cost between $50,000 and $100,000 (USD). I won't go into what my advance was, or what I expect my royalties to be, but let's be blunt: it won't pay for itself, or even come close. *And I don't care.* But if you were going into this *caring about breaking even or making goodly amounts of money*, you are going to be in a world of hurt.

Furthermore, e-books and retailers add another wrinkle in this. The suggested price for my book is in the $50 range, while the price on Amazon is $33. The e-book price is even lower: $20. Obviously the royalties generated from these purchases are going to be lower. If the rest of the world is anything like me, I buy nearly all my books as e-books, and I suspect most people buying my book would do so as well. Again, *not complaining*, but pointing out the economies involved.

## Writing Technical Books

The process of writing a technical book is... intense. Most publishers will indicate that you can do write a technical book alongside of your full-time job, with only a few additional hours dedicated to the book. O, if that were true. *It isn't*. (Maybe someone can, but not me.)

What's *true* is that you'll be working at least an additional *part-time* job (around 20 hours per week). Now, I'm sure this varies based on the type of book being written, but here's how my process typically went:

* Create the sample application for the chapter.
* Debug the sample application.
* Test the sample application on various devices, and fix any issues.
* Write the first pass of the text, applying special styles as necessary to mark certain parts as keywords, code, URLs, etc.
* Create the necessary graphics for the chapter (diagrams, screenshots, etc.).
* Copy in the code samples from the application for the book, adjust formatting, add useful comments.
* Review the text to ensure that everything makes sense, is in the right order, etc.
* Package the text and code and send it to the publisher.

This was the process for the first few chapters, but after a while, one hears back from the publisher (and other technical reviewers -- life-savers, them!) with comments about the earlier chapters: about what didn't make sense or didn't work, etc. These comments are *invaluable*, and the book wouldn't be half as good without them. But now the process becomes all of the above (for the current chapter), and then add the  following:

* Review comments from publisher / reviewer.
* Revise text accordingly (using best judgement -- there isn't always room to respond to every comment).
* Revise the code and graphics if necessary.
* Update the code and text for the chapter to reflect any breaking changes (and test, again!), especially if the underlying platform has changed since the original writing.
* Repackage code, graphics, and text, and send to the publisher.

Now, all of this goes on *while you are doing your regular job*. Although I'm a consultant that gets to work remotely and gets to manage her time much more flexibly than others, even I found it difficult to manage both my "day job" and my "book job". I'm not sure I could have done it working a 40-60 hour/week job alongside.

Needless to say, there were many coding and writing marathons going on each week: quite often the weekend would receive the brunt of this -- with 10-12 hour days for two or three days in a row to meet the deadline. Of course *during the week* there were often long evenings as well -- it's extremely difficult to write a sample app in a week or two for a book, especially when it usually takes much, much longer to push an app to an app store.

Of course, no one is *perfect*, and so there were inevitably going to be errors in the book that neither me, nor the publisher, nor the reviewers were going to catch. This is a fact of writing books: *we're all human*. Some of these errors were my mistake -- others were issues caused by trying to keep up with the evolving technology stack I was writing about. In the case of this book, it is *absolutely true* when I tell you that I was submitting changes to the text *a couple days before it was to be uploaded to the printers*. 

That's enough for part 1 of this series, I think. In the next section, I want to cover some of the tools I used in writing the book, and then I will go on to get into details regarding working with Packt Publishing and address areas where the process could use improvement, but also address the overall good experience of publishing with Packt.

Until next time, keep writing/coding! 


