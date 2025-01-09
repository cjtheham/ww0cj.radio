---
title: Opinions on Logging Software
date: 2025-01-09
tags: ['Amateur Radio', 'Software']
---

The other day, I attended the [Tulsa Amateur Radio Club](https://w5ias.com)'s monthly "Tech Night" meeting - a casual, informal meeting to answer questions and usually chat about a specified topic in advance. This month was logging software, what you use to track contacts made on the ham bands for awards, contests, and general use.

Chatting about this made me realize that I have some pretty strong opinions on logging software in the hobby. I've had the opportunity to try out a lot of them over the years, and thought I'd share some of my thoughts here based on what we talked about in the meeting.

## as a contester

For amateur radio contesting, genuinely no other piece of software beats out [N1MM](https://n1mmwp.hamdocs.com/). It has almost all major contests preloaded, a file format for adding new contests easily, exports a log that is almost always perfect and ready to submit, and has an interface that allows you to do everything without leaving the keyboard.

Despite it's almost perfection, it falls to the doom that most other ham software does - cross-platform compatibility. N1MM, as well as most other logging software I'll mention here, is Windows only. I'm not sure what language it is programmed in, I assume C++ based on age and compatibility, but you would think over the years cross-platform compatibility would be enough of a desired feature to make it happen. As an M1 Mac user, ham radio software options are incredibly limited for me, and these days my only way to use N1MM is a remote connection to a Windows 10 machine. 

N1MM is a fantastic tool that I would recommend if you're a truly dedicated contester and on a recent version of Windows, but otherwise you're out of luck. On the other hand, I've been following K6GTE's [not1mm](https://github.com/mbridak/not1mm) project - an open-source contest logger that is designed for Linux and built using Python. It appears to have grown a lot in functionality since I last used it, and I think I'll give it a shot when I next attempt a solo contest.

## as a DXer

I also like hunting DX from time to time, especially using FT8. If you're running a big gun station on a popular digital mode like FT8, logs can build up incredibly fast. My QRZ logbook has 2800 FT8 contacts and counting, and I have more QSOs to upload there. I spent a long time looking for a solution to combine logs into one program, keeping up with several remote operating positions around the US and some outside countries. 

Initially, I stumbled upon CloudLog - a web-based log database with statistics, a built-in logging tool, and interfacing capability with online confirmation services (QRZ, LoTW, Clublog). I gave it a shot, but wasn't the biggest fan at the time. Recently, I tried out [Wavelog](https://www.wavelog.org/) - a fork of CloudLog - and I love it! It has capabilities that CloudLog didn't at the time I tried it, such as the ability to link multiple station locations to one logbook, easy switching between station locations, built-in displays for data from Contest Calendar and hams.at, and improved awards screens.

WaveLog is able to run in a Docker container, which means booting it up on my laptop is incredibly easy, and I can use Tailscale to connect to my laptop's containerized version from my phone or tablet as long as it is online. I love this setup, and my only problem to solve now is a good backup solution for the database to make sure I don't lose all of my contacts from days past when I eventually setup a shack and start a fresh logbook at home.

## as a POTA activator

Occasionally, I enjoy attempting POTA activations. My setup isn't very good, so they are often not successful, but when I do I need a good interface for it. As much as I love Wavelog, connecting to my laptop over the internet from my phone and hoping to keep the connection inside a wooded park isn't the greatest option.

When I'm out and about like that, I love using [HAMRS](https://hamrs.app). HAMRS is designed for Parks and Summits on the Air, as well as Field Day (Summer *and* Winter), and has a great interface for logging SSB contacts for POTA. It exports in a clean format that works for uploading straight to the POTA site, and is my favorite option for iPad these days (it does have a one-time fee on iOS devices, but free on Android and desktop). My favorite feature is the map generation - which allows you to connect to the internet, look up callsigns for addresses, and link them to pins on a map to see how far your signal got out.

<img webc:is="eleventy-image" src="/imgs/hamrs_map_example.jpeg" alt="The HAMRS mobile interface, showing a map of a green pin in central Tennessee, with blue pins surrounding it in various other states and lines drawn connecting all blue pins to the green pins. The green pin represents the activator, and the blue pin represents contacts made with other operators.">

HAMRS is my go-to recommendation as well for anyone looking for a simple platform to start out with. It is easy to understand and a clean interface all around - great for beginners! It has encountered some bugs causing data loss in the past, but has not had any major issues for some time, and backing up your log is as easy as exporting the file.

## other mentions

These are my personal favorite tools, but there are a ton of others out there to give a shot if you find these aren't your cup of tea!

N3FJP is a Windows only logging tool with a one-time fee, but has separate programs and interfaces for several popular contests. I've seen several clubs use their Field Day Logger and it works really well - it also has cool features to integrate a telnet DX Cluster, the ability to link together several loggers for a multi-station contesting team, and a cool feature to generate an HTML webpage for live score updates outside your station.

Log4OM is a Windows only program that is fairly popular for DXers - I tried it once and felt the interface was very busy for my liking, but it is very feature filled and constantly under development.

HamRadioPrep has launched a new service recently called World Radio League, which is a web based program for logging. It seems to have some interesting features, such as it's own local DX Cluster for its users to work each other on the air, but it seems to still be building up. It is also a monthly subscription service, which I'm not a fan of for software that manages data like this. I believe you should own your data, and not be beholden to anyone for money to keep your logs in tact.

Ham Radio Deluxe is another Windows only, one-time fee program, but comes with a whole fleet of software. I also think their logging interface is a bit busy for my taste, but their satellite tracking program is amazing and one of the best I've seen. If you like working satellites, definitely give that program a look.

## conclusion

I'd love to hear about what ham radio logging software you use and why you like it! I'm always looking to experiment with new software and am happy to check it out.