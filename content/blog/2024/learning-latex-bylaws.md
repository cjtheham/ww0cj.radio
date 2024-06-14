---
title: Learning LaTex - The Bylaws Class
date: 2024-01-07
tags: ['100 Days to Offload', 'LaTeX']
draft: false
---

I was recently elected Secretary of a student organization and was tasked with
re-writing our organization's bylaws. I won't get too into the weeds with why
this was necessary and how I did it (unless readers would like this!) but one
thing I noticed was that editing a document with a committee of people is hard.

If you have 6 people all working off one document, they have a tendency to 
accidentally place text in the wrong spots, or mistakenly edit document styling,
and more. It becomes a pain to keep one document looking consistent and clean 
while also keeping an eye on the content itself. 

In my engineering program, professors really encourage the use of LaTeX for
project reports and papers and some even go to the extent of offering extra
credit for using it. Because of my use of it for classes, I realized how useful
of a tool it can be and realized I have the perfect use-case for it in this
project.

So, without anymore storytelling that you don't want, I present my quite
opinionated bylaws document template and class for LaTeX.

Some key features of the setup include:
- A title page containing your organization's logo, name, the last date of update, 
and a table of contents with clickable links
- An example .tex file containing a setup mimicking the recommended sections
provided by Robert's Rules of Order (with some modifications)
- An item hierarchy required of Article -> Section -> Items, no item exists without
being accompanies by **both** an article and a section
- Roman numerals labeling Articles, and Arabic numerals labeling Sections and Items
- Consistent headers and page numbers throughout the entire document

You can find the template in the [RogueFoam/latex-templates](https://codeberg.org/RogueFoam/latex-resources/src/branch/main/bylaws)
repository on Codeberg.

This setup obviously may not work for all organizations and will take some work to get
in working order, but it was an incredible resource for my org and made the bylaws
rewrite a breeze to get through with 3 people working on it. 

If you have any issues or suggestions, feel free to submit an issue to the repository.
I welcome any additions to the template and any improvements. 

I learned a lot about LaTeX through this project, and have already gained some
ideas on how to continue using it and improving upon it in the future. I'm
excited to share my future template creations with you all as I go along!