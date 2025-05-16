document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const projectContainer = document.getElementById('project-container');

    icons.forEach(icon => {
        icon.addEventListener('click', function (event) {
            event.preventDefault();
            const project = this.getAttribute('data-project');
            loadProjectContent(project);
        });
    });

    function loadProjectContent(project) {
        let windows = [];

        projectContainer.innerHTML = '';

        if (project === 'MyInfo') {
            windows = [
                { title: 'My Info', content: '<p>NOTE - Some browers take a while to load content, to view full sized images right click and press open image in new tab</p><p>Hi! My name is Harrison, I am 19 and currently a HNC Sound Production Student at Perth UHI. After this year I am hoping to be able to continue onto the degree and complete all 3 years. I have created this portfolio to demonstrate the work I have carried out over the past year while taking part in this course and to try to show how it has been relevant to a career as a studio engineer.</p><img src="images/Drumkit.png" height="200px">' },
                { title: 'My Interest In Audio', content: '<p>From as far back as I can remember I have been surrounded by a wide variety of music thanks to my parents, from Rock to Hip-hop to Electronic there was always music playing. As I have grown older, I have fallen in love with music even more and broadened what I listen to further. When I began my first job as a paperboy I began spending my money on records, both old and new, some of them being the genres from my childhood and others being new to me. I came to love music from many different countries, genres and decades. Music surrounded me for so long that I decided I wanted to try and create some. In the past few years, I have been teaching myself music production using FL Studio and it has become my favorite hobby, a large portion of spare time I have now is spent messing around in my DAW. I enjoy creating all sorts of music based on what I listened to growing up and what I listen to now. Sometimes this can mean creating my own melodies from scratch and other times I will hear an amazing part of an old song that is perfect for sampling. I have fun with both the production and mixing sides, spending time to try and learn how to improve both skills. After spending time creating music on the computer, I decided I wanted to try some hardware synths to try and create music the old-school way ending up with a re-creation of the Roland 909 and Roland TB-303. Creating music with analogue synths was just as fun as using the computer, but it offered an entirely different experience. I then decided I wanted to try and create Hip-hop using the same tech as some of my idols, RZA, J Dilla, DJ Premier, the list goes on, so I acquired a couple of old hardware samplers, the Akai MPC 1000 and the BOSS SP-303, to pair with my turntable to sample old records. Since starting this course I have also started getting into outboard gear and synths, recently upgrading my setup using skills learned on this course. In the past year I have gotten a Roland Juno 6, a Yamaha DX7, a Roland SH-101, a Moog Grandmother, a Yamaha SPX90 and a Alesis 3630. As well as buying all of this I also repair it, such as snapped switches, broken connectors and dead capacitors. Here is what my bedroom studio looks like now:</p><img src="images/Finished Setup.png" width="350px">'},
                { title: 'Research', content: '<p>From the research I have carried out I know that being a studio engineer does not pay amazing nor are the hours great and it is incredibly competitive to get into. Despite all of this it is still a career I would like to pursue as I have found I truly enjoy the work. I am always watching videos from professionals in the industry on places like Mix with the Masters, Tape Notes and Andrew Masters. I like to learn mostly about mixing techniques to find new things to try and I like to see what current trends are in music production. Andrew Masters is an amazing youtube channel that I have seen tours of at least 20 studios which has given me a great idea of how a real studio runs.</p>'},
                { title: 'Various Sessions', content: '<p>Here are photos from various sessions I have taken part in over the past year:</p><img src="images/Ran1.jpeg" width="350px"><img src="images/Ran2.jpeg" width="350px"><img src="images/Ran3.jpeg" width="350px"><img src="images/Ran4.jpeg" width="350px"><img src="images/Ran5.jpeg" width="350px"><img src="images/Ran6.jpeg" width="350px"><img src="images/Ran7.jpeg" width="350px"><img src="images/Ran8.jpeg" width="350px"><img src="images/Ran9.jpeg" width="350px"><img src="images/Ran10.jpeg" width="350px"><img src="images/Ran11.jpeg" width="350px"><img src="images/Ran12.jpeg" width="350px"><img src="images/Ran14.jpeg" width="350px"><img src="images/Ran15.jpeg" width="350px"><img src="images/Ran16.jpeg" width="350px"><img src="images/Ran17.jpeg" width="350px"><img src="images/Ran18.jpeg" width="350px"><img src="images/Ran19.jpeg" width="350px"><img src="images/Ran20.jpeg" width="350px"><img src="images/Ran21.jpeg" width="350px"><img src="images/Ran22.jpeg" width="350px"><img src="images/Ran23.jpeg" width="350px"><img src="images/Ran24.jpeg" width="350px"><img src="images/Ran25.jpeg" width="350px"><img src="images/Ran26.jpeg" width="350px"><img src="images/Ran27.jpeg" width="350px"><img src="images/Ran28.jpeg" width="350px"><img src="images/Ran30.jpeg" width="350px">'}
            ];
        } else if (project === 'Remixing') {
            windows = [
                { title: 'Remix', content: '<p>LO2 for Remixing was the creation of a song remix that had to meet certain criteria and use techniques specific to the chosen genre to develop production/remixing skills. Remixing is something I have spent time doing previously so I had a solid idea of what I was doing. I chose to remix the song "Crazy Train" by Ozzy Osboure into a Eurodance type song. Some of the techniques that needed to be included did not really have a place they fit well within the song such as real time pitch correction, however I am mostly happy with the end result and it meets all of the criteria.</p><p>My remix of Crazy Train - Ozzy Osbourne:</p><audio controls><source src="audio/Crazy Train Remix_Bounce.wav" type="audio/wav"></audio>' },
                { title: 'Essay', content: '<p>LO1 for Creative Music Remixing was writing a short essay to learn and understand the history of remixing. It was split into four parts: Key figures, developments in technology and techniques, genres and target markets and lastly Copyright issues. In my essay I cover all of these points.</p><p>Here is a link to <a href="pdfs/Harrison Maloney Remixing Essay.pdf" target="_blank">My Essay</a></p>' },
                { title: 'Logic Session', content: '<p>The first thing I did was create a synth for the intro melody and rhythm guitar then a reese bass playing the root notes. After that I add a simple 2 step 909 drum pattern and side-chained the kick to the bass so you can hear the bass pumping. From that I knew I was onto something good so decided to use it for this would be my submission.</p><img src="images/Remixing 1.png" height="200px">'},
                { title: 'Logic Session', content: '<p>I then got the isolated vocals and chopped out the parts I needed and quantised them as well as the chopping out the intro shout to use as a percussion element. After that I added the risers and then added all of the time-based effects.</p><img src="images/Remixing 2.png" height="200px">'},
                { title: 'The original', content: '<p>This is the original song:</p><iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252996256&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ozzy-osbourne-official" title="Ozzy Osbourne" target="_blank" style="color: #cccccc; text-decoration: none;">Ozzy Osbourne</a> · <a href="https://soundcloud.com/ozzy-osbourne-official/crazy-train-remastered" title="Crazy Train" target="_blank" style="color: #cccccc; text-decoration: none;">Crazy Train</a></div>'},
                { title: 'Reflection', content: '<p>This module was the first time I used logic and I found it very easily to learn. I think being able to use logic is a really valuable skill as it continues to get used more and more in the industry. As well as learning to use logic I learned a bit more about fine tuning time-based effects such as phasers and delays. I also learned how to use gates creatively. I think that many of the production skills and techniques I learned in this module will carry over to studio sessions and mixes regardless of the DAW.'}
            ];
        } else if (project === 'DAW') {
            windows = [
                { title: 'DAW', content: '<p>The goal of DAW was to learn the basics of production within Pro Tools, a DAW I had no previous experience with. The first task was creating some simple drums with the Boom Drum Machine plugin by recording midi and then doing some basic edits and quantising. The final part of task 1 was creating automation using a modulation wheel on a keyboard.</p><p> The second task was creating a short song using 6 virtual instruments and 6 audio tracks as well as a mixdown and master. It also had to include a reverb and delay aux send and some basic EQ and compression. I found the available instruments and samples to be very limiting, but I am happy enough with the end result. </p><p>Here is my submission for DAW:</p><audio controls><source src="audio/01_Harrison Maloney_Assignment 2_Master_24 Bit_48kHz.wav" type="audio/wav"></audio>' },
                { title: 'Production Session', content: '<p>Here are some of the drum samples I used for some of the required audio tracks:</p><img src="images/DAW 1.png" height="200px">'},
                { title: 'Production Session', content: '<p>This is some of the automation and midi I carried out:</p><img src="images/DAW 2.png" height="200px">'},
                { title: 'Mix Window', content: '<p>This was the first mix I ever did in ProTools and was my first time hearing about auxes:</p><img src="images/DAW 3.png" height="200px">'},
                { title: 'Reflection', content: '<p>Starting this course I had never interacted with ProTools before and it was incredibly intimidating at first. I learned all the basics during this module going from 0 knowledge to being able to create, mix and master basic productions using different types of tracks, editing tools, auxes and more. These are crucial skills to being a studio engineering not just to ensure sessions run smoothly, but ensuring that they even run at all. These skills are also going to be useful going forward for mixing and mastering.'},
            ];
        } else if (project === 'Game') {
            windows = [
                { title: 'Game Audio', content: '<p>Game Audio had two parts. Part one was learning to use Wwise by following lessons created by Wwise, which is an industry standard software for adding sound to games. It allows sound designers to add, modify and edit sounds without the need for complex programming as Wwise handles everything and integrates sounds seamlessly by using events and data send from the game. Part two required adding 6 of my own sounds to replace those that were already there using the skills I had gained in the Wwise software.</p>' },
                { title: 'Demo', content: '<p>I created some of my sounds using a plugin called Dehumaniser 2 and others using a free piece of software called VCV Rack</p><p>Here is demo of sounds I created and added to the game:</p><br><video width="340px" controls><source src="video/Game Audio Demo.mp4" type="video/mp4"></video>' },
                { title: 'Wwise', content: '<p>The main designer window for manipulating the sounds. I learned that within Wwise, and this window, you can do almost anything you could need to the sound. You can do the basics like adjusting volume and pitch, but you can also add effects - reverbs, delays ect, this window also allows you to edit the waveforms and position the audio whether 2D or 3D:</p><img src="images/Game 1.png" height="200px">' },
                { title: 'Wwise', content: '<p>The soundbank window where you send the sounds into the game, one of the most simple yet important windows I learned how to use in Wwise:</p><img src="images/Game 2.png" height="200px">' },
                { title: 'VCV Rack', content: '<p>Here is an image of how I created an explosion sound in VCV Rack, this helped to add to my understanding of sound synthesis and the different components of a synthesiser:</p><img src="images/Game 3.png" height="200px">' },
                { title: 'Reflection', content: '<p>This was my first time even hearing about the Wwise software and what it does, but I now realise the importance of it and the many huge games it helps to make successful. Wwise was fun to learn, however it is not a skill set I think I will use again. Other aspects of this module such as sound design will be useful in music production going forward and I expanded my knowledge of using synthesisers. Another useful area is file handling which is incredibly important going forward for storing sessions and work.</p>' }
            ];
        } else if (project === 'Recording') {
            windows = [
                { title: 'Recording and Mixing LO1', content: '<p>The first part of recording and mixing was to create a plan and carry out a recording session. Together with some other HNC Sound Production students who are musicians, we decided to record a cover of the song Ventura Highway by America. We wanted to changed the genre to indie rock and include a Juno 6 too. In my plan I explained how the session will be carried out and included mic choices with reasons why. The next steps were to create a floor plan and channel sheet. Most of the mic choices and placements were pretty standard as we did not want to go too crazy for our first session alone. My plan can be found <a href="pdfs/RM Plan.pdf" target="_blank">here</a>.</p><p>The next task was to carry out the session, which did not go according to plan, and submit the edited session files - available <a href="https://myuhi-my.sharepoint.com/:u:/g/personal/24015171_uhi_ac_uk/EWp9soipMT9IsfdRclDQhH0Bi_Ml0OOoWmqD5kkeen3BFg?e=5OFT9Z" target="_blank">here</a></p><p>Scroll for more.</p><p>This is my channel sheet for the session. Nothing out of the ordinary here:</p><img src="images/RM Channels.png" height="200px"><p>This is my floor plan for the session, the room was planned in a way to minimise bleed:</p><img src="images/RM Floorplan.png" height="200px">' },
                { title: 'Recording and Mixing LO2', content: '<p>After submitting the session files, we were then tasked with evaluating the session and creating a mix plan. The session went very wrong in many ways which my evaluation goes into detail on. This led to the overall song not sounding as good as planned. I decided to try and create a dreamy, distant, aged tape sounding mix to try and hide the faults of the recording. I took inspiration from people like Mac Demarco and Phoebe Bridgers. My evaluation and mix plan is <a href="pdfs/RM Eval.pdf" target="_blank">here</a>' },
                { title: 'Photos of session', content: '<p>Scroll for photos.</p><p>Finding the centre of the speaker cone to line up the mic, this was done on both guitar amps and the isolated bass amp:</p><img src="images/RM1.jpg" height="200px"><p>The wall box where the mics are connected through to the desk:</p><img src="images/RM2.jpg" height="200px"><p>An SM57 on the snare, both top and bottom, the industry standard:</p><img src="images/RM3.jpg" height="200px"><img src="images/RM4.jpg" height="200px"><p>The plan was to use an NT5 on the hi hat, but we could not find one so used a M5:</p><img src="images/RM5.jpg" height="200px"><p>An MD421 was used on each tom, another standard:</p><img src="images/RM6.jpg" height="200px"><p>RB100 ribbons as overheads, these are an odd mic as they are a ribbon, but need phantom power:</p><img src="images/RM7.jpg" height="200px"><p>Here is the whole drum kit, you can just about see the egg shape of the D112 on the kick:</p><img src="images/RM8.jpg" height="200px">' },
                { title: 'Mixes and master', content: '<p>This is the first mix I submitted, I was not very happy with it:</p></p><audio controls><source src="audio/Ventura First Mix.wav" type="audio/wav"></audio><p>This is my revised mix, one of the guitars is louder, the snare is a bit more snappy and the synth is brighter:</p><audio controls><source src="audio/Ventura Final Mix.wav" type="audio/wav"></audio><p>This is the master I plan to submit:</p><audio controls><source src="audio/Ventura Highway Master.wav" type="audio/wav"></audio><p>Here is my mastering chain, first comes EQ and compression to glue it all together then I like to use I like to use Oxford Inflator and Saturn 2 to add harmonics and increase the perceived loudness, this is something I learned while researching how Discloure mixes. I use Soothe 2 to help just clean up some mud and then end it with the Pro-L 2 limiter.</p><img src="images/Master Chain.png" height="200px">' },
                { title: 'Reflection', content: '<p>Although the session did not go very well, I think I have managed to somewhat salvage the song. It did not end up how I envisioned, but I am happy enough with it. Going through the process of planning, carrying out, editing, mixing and master a whole session made me realise how much time and effort goes into making a song. All of the mistakes that were made in the process were and important learning opportunity and the sessions I have had since have gone smoothly. The session for this module helped me learn a lot about using the equipment in more detail and communicating with musicians. I think my most important take away is to not let stress make you forget important steps in the recording process. </p>'}
            ];
        } else if (project === 'Live') {
            windows = [
                {title: 'Written Component Brief', content: '<p>As well as learning to put together a live setup, there is also a written component to this module. I was given a budget of £12,000 and a brief for a small folk music gig and had to put together a plan for equipment, a stage and venue plan, a channel list, a schematic and a health and safety sheet.</p><img src="images/Live Brief.png" height="170px">'},
                { title: 'Gear List', content: '<p>The first thing I did was put together a gear list starting with a desk. I went for a Midas M32, near identical to the Behringer X32 we used in class, paired with the stage box and a cat-5 cable. Next I picked out my speakers making sure they had a good frequency range and were going to be loud enough as well as choosing appropriate amps to power them and a controller. The final part was picking out microphones and all the cables I would need for the setup. Here is my full list, scroll for more:</p><img src="images/Live Gear1.png" width="350px"><img src="images/Live Gear2.png" width="346px">'},
                { title: 'System Schematic', content: '<p>Here is a connection schematic of my chosen gear:</p><img src="images/Live Schm.png" height="200px">'},
                { title: 'Other Parts', content: '<p>The other parts of my written component can be view in the whole document which can be found <a href="pdfs/Live.pdf" target="_blank">here</a>.</p>'},
                { title: 'Extra Live Work', content: '<p>Outside of the normal live class I took part helping with gigs put on by music students on Monday afternoons. I was the one that collected and tested all of the gear before the first gig, I did it mostly on my own with some help from Mark. The setup included a Midas M32R, 2 Radial DI boxes, 2 cheaper mic, a yamaha amp and 2 yamaha speakers. As well as the initial test I also helped to setup it up in the location it would stay for a few weeks. To top it all off I mixed the first gig which was a vocal and acoustic guitar that was using a DI and helped setup and prepare the second gig. All of this really helped to re-enforce what I had learned in class. Here is are a couple photos of the setup:</p><img src="images/Live1.png" height="200px"><img src="images/Live2.png" height="200px"> '},
                { title: 'Reflection', content: '<p>Live was an area I had not thought about until this module. I have a small bit of experience back in primary school doing sound and lights on old outdated equipment, but other than that none. I think the things I have learned here have a lot of crossover with studio work such as very similar signal flow as well as being able to research gear on my own. Not only will it be useful for studio work, it is highly likely at some point in my career I will take part in live work which all of this will be very useful for.'}
            ]
        } else if (project === 'Audio') {
            windows = [
                { title: 'LO1', content: '<p>LO1 for audios skills was the creation of schematic diagram of Eastlake 1 showing all of the devices and connection types that it takes to get a signal from a microphone into ProTools and back out through the speakers. It is split into two diagrams, the channel path for signal flowing into Pro Tools and the monitor path for listen back. My diagrams are below:</p><img src="images/Chan.png" height="300px"><img src="images/Mon.png" height="300px">'},
                { title: 'LO2', content: '<p>LO2 was the completion of a theory test and a practical ticket to be able to use the studios without supervision. I passed both of these first try with 1 minor on my practical ticket and 75% on the theory.</p><img src="images/Ticket.png" width="350px">'},
                { title: 'Using Audio Skills', content: '<p>I recently put what I had learned in audio skills to the test and planned out a massive upgrade to my bedroom studio. I wanted to have all of my synths, drum machines and samplers plugged in and ready to go when I need them as well as being able to multitrack into a DAW as well as be able to hybrid mix or mix entirely on the desk if track count allows. I decided to achieve this by upgrading my mixer from a Mackie 1402 to a 16 channel Spirit FX combined with a UAD Apollo x16. The reason I picked the Spirit FX as my mixer is because it has direct outs for each channel without breaking the bank. It also features 4 auxes, some built in Lexicon Effects and a submix group. Once I had decided on the desk and converter I planned the patchbay which allowed me to ensure everything would be connected and I could start to figure out what cables I need to get.</p><img src="images/Patchbay.png" width="350px"><p>Once I had everything planned out I started ordering everything and after weeks of waiting it had all arrived. I found the process of connecting everything somewhat stressful, but also fun and I mostly stuck to my plan, however something patches needed to be moved. Here is how things looked while I was connecting everything:</p><img src="images/WIP Bay.png" width="350px"><img src="images/Finished Bay.png" width="350px"><p>After hours of connecting cables and building units, here is the final result:</p><img src="images/Finished Setup.png" width="350px"><p>A recording and mixing studio within my bedroom that lets me record any of my equipment just by patching, allows me to multitrack 16 channels in at once and allows me to hybrid mix or mix on the desk. I would not have gotten this far without the audio skills module.'},
                { title: 'Reflection', content: 'This module has already proven itself incredibly useful to me. It has allowed me to understand signal flow enough create a function recording and mixing studio in my bedroom. Whenever I want to use a bit of gear now I just patch it in and hit record and because of the XLR bay I can record microphones easily too. I really enjoyed this unit and it really helped my understanding of how the studio works and how to solve problems during sessions. This unit is a core foundation that will continue to help me throughout my career.</p>'}
            ]
        } else if (project === 'Multimedia') {
            windows = [
                { title: 'Spot Sheet', content: '<p>The first task in multimedia was to pick a video out of 3 that you wanted to add sound to and create a spot sheet for the sounds that will be needed. I picked the short film that followed a character stuck in a time loop. A portion spot sheet can be seen below and the full thing is <a href="pdfs/Spot Sheet.pdf" target="_blank">here</a>.</p><img src="images/Spot.png" width="350px">'},
                { title: 'Plan', content: '<p>The next step was to create a plan for the approach you planned to take to recording and adding sounds. It also needed to include mention of some of the processing you will do such as topping and tailing clips, panning and adding effects like reverb. My plan can be found </p><a href="pdfs/Plan for Multimedia.pdf" target="_blank">here</a>'},
                { title: 'Video', content: '<p>This project is not due yet so I do not have a finished version, however, I have put together a small selection of clips that show some of the work I have completed:</p><video width="340px" controls><source src="video/Multimedia.mp4" type="video/mp4"></video>'},
                { title: 'Sound Library', content: '<p>Here is a screenshot of the sound library I am creating of sounds I create so that I can keep track of them:</p><img src="images/Library.png" width="200px">'},
                { title: 'Reflection', content: '<p>Although this module is not yet complete, I still have learned a good amount. The main skill that will carry over into my planned career is file management. Multimedia work takes file management to the absolute extreme because you are dealing with so many files. Good file management is key to ensuring a session is saved and stored properly so that it can easily be found and nothing is lost. Just the general Pro Tools skills I have learned while undertaking this task will be very useful too.'}
            ]
        } else if (project === 'Business') {
            windows = [
                { title: 'Essay', content: '<p>Skills for Business was a very important class, although there is not much content, the include content about copyright, contracts and collection agencies will be incredibly useful moving forward in my career. The Copyright, Designs and Patents Act(1988) is a title I will never forget now. The first task in Skill for Business was to write an essay on this subject and do some research for sources. <br><br>My essay is available <a href="pdfs/Skills For Business - Assignment 1-2.pdf" target="_blank">here</a></p>' },
                { title: 'Cost Sheet and Interview', content: '<p>The next task was to create a costing spread sheet in excel for an event that we are given all of the income and expenditure for and find if it made or lost money. This was a short task, but was a great reminder for me on using excel. The 3rd and final assignment was updating my CV to be more geared toward audio engineering, this CV is available <a href="pdfs/CV.pdf" target="_blank">here</a>. After submitting the CV I had to undergo a mock interview which I passed.' },
                { title: 'Costing Sheet', content: '<p>This is my cost spreadsheet breaking down the profits and expenditures of the gig. I worked out the gig was in a profit of £464 which was correct.</p><img src="images/Costing Sheet.png" height="300px">' },
                { title: 'Reflection', content: '<p>The information this module taught me about the legal aspects of audio engineering will be useful for the rest of my career and keep me out of trouble as well as allowing me to earn a fair amount of money for my work. Although not something I will use frequently, it was nice to have a refresher on excel.</p>' }
            ];
        } else if (project === 'History') {
         windows = [
                { title: 'History', content: '<p>The history module covered the development of many key technologies in the audio engineering field from microphones to recording mediums to studio desks. Not only was it interesting to learn about these, it also helped build my knowledge of using some of these technologies.</p>' },
                { title: 'Research Proposal', content: '<p>The first task was to pick a technology within audio engineering that you wished to research the history and development of, as well as some key figures, and create a research proposal in the form of a presentation. I choose to research samplers and their development. I broke it into three sections - analog, digital and software. I included some research on these and my future plans for research further. Here is my proposal:</p><br><br><video width="340px" controls><source src="video/History Research.mp4" type="video/mp4"></video>' },
                { title: 'Research Paper', content: '<p>The next task was going off to complete the research and write it up. It was a small word count to work with, but I feel I covered the main stages and tried to cover multiple genres they were used it which were pop, hip-hop and electronic music.</p><p>My essay can be found <a href="pdfs/History Paper.pdf" target="_blank">Here</a>.</p>' },
                { title: 'Reflection', content: '<p>The things I learnt from the content of this module will be useful for recording and mixing future session such as helping with my choice of microphone. Not only that, the research and presentation skills developed will also be useful going forward not only within audio engineering, but in any area where I may have to do either.</p>'}
            ]
        } else if (project === 'Extra') {
         windows = [
            { title: 'Extra Mixes', content: '<p>I found unedited and unmixed multitracks for some songs I like so I decided to try to edit, mix and master them.</p><p>The first song was Everlong by the Foo Fighters, I wanted to bring out the drums, bass and background vocal more than the original.</p><audio controls><source src="audio/Everlong.wav" type="audio/wav"></audio><p>The next song I did was Take On Me by A-ha, however I wanted to do a very different version. I decided to cut all the drums and leave the vocal very natural rather than the 80s sound it normally has as his voice is incredible.</p><audio controls><source src="audio/Take On Me.wav" type="audio/wav"></audio>'},
            { title: 'Turkey Dinos and the Smiley Faces Recording', content: '<p>Turkey Dinos and the Smiley Faces is a band I had a session with that are from 2nd year music. The session was their first time recording in a studio and overall it went very well. One of the 2 guitarists was sick so was not there, but we still managed to record 2 songs. The only issue we ran into was headphone issues, but it would not be an Eastlake 1 session without headphone issues.</p><p>Since it was only 1 guitarist they could not do the song they wanted to as both have their own parts so they picked another original song called. The first thing we did was get the vocalist to test out 3 microphones as she had never used a proper one before. After singing into a Rode valve mic, an Aston Spirit and an AKG C414 it was very obvious that the Aston Spirit was the perfect mic for her voice.</p><img src="images/Vocal Mics.png" width="350px"><p>After this we moved the Aston Spirit into a vocal booth for isolation while the musicians had a break.</p><img src="images/Booth.png" width="350px"><p>Once they came back they got a take that we were all very happy with on the 2nd attempt. I then explained to them that overdubbing extras would help fill out the song and make it sound better. After 3 overdub recordings we were all very happy with how everything sounded. The guitar microphone was just a single RB100 pointed at the sound hole, but it sounded amazing.</p><img src="images/RB100.png" width="350px"><p>After finishing the first song we still had plenty of time left so they decided to do another original song, however, between takes they started doing a cover of Good Luk Babe by Chappell Roan and it sounded amazing so we decided to pivot and record that instead. For this song we wanted to try stereo recording the guitar with an AKG C414 and a Lewitt SDC.</p><img src="images/Stereo.png" width="350px"><p>I figured since he RB100 was there we should leave it and record it too just to see and it ended up adding so much extra to the guitar sound.</p><p>Here is a comparison of without the RB100:</p><audio controls><source src="audio/No RB100.wav" type="audio/wav"></audio><p>And with the RB100:</p><audio controls><source src="audio/RB100.wav" type="audio/wav"></audio><p>After that it was just adding overdubs and extra parts of guitar.</p>'},
            { title: 'Turkey Dinos and the Smiley Faces Mixing', content: '<p>After the session it was time to edit and Mix the songs.</p><img src="images/Gtr.png" width="350px"><img src="images/Vox.png" width="350px"><p>For the first song I compressed the guitar with a LA-2A and then used the SSL channel EQ, it did not need any reverb. For the vocal I used a de-esser, followed by a API channel compressor just catching the big peaks followed by a 1176 to compress the vocal. For the background vocals I did not compress them at all as I wanted them to be as natural as they could. The only effect on the vocal is a Little Plate from Soundtoys.</p><img src="images/Mix 1.png" width="350px"><p>Here is a final master of it:</p><audio controls><source src="audio/Dont Say Goodbye.wav" type="audio/wav"></audio><p>Approaching the 2nd song, I decided to mix each of the 3 guitar mics for each take down to a bus and compress each bus with a LA-2A. Because of the 3 mics the guitar has a really full sound, to make room for the vocal I have an inverted filter on the centre RB100 track.</p><img src="images/Gtr Bus.png" width="350px"><p>I am still working on the vocal mix, but I have split the vocal into more tracks to help me visualise things better.</p><img src="images/Vox Bus.png" width="350px"><p>Here is the mix I have for the song so far:</p><audio controls><source src="audio/Good Luck Babe.wav" type="audio/wav"></audio>'},
            { title: 'Some More Extra Mixes', content:'<p>Here are a couple more extra mixes of songs I made myself that are different genres from all my other mixes. The first one is a hip hop beat in which I sampled a bossa nova loop I made with midi and a vocal from splice. It is only a mix as it does not have a someone rapping on it.</p><audio controls><source src="audio/Bossa Mix.wav" type="audio/wav"></audio><img src="images/Bossa.png" width="350px"><p>The next one is a drum and bass remix of Chamber of Reflection. The mix is still a work in progress because there are so many drums and loud synths so it is quite a lot of learning as I go to get it to sound just right and I have tried to make it sound as full as possible.</p><audio controls><source src="audio/Chamber.wav" type="audio/wav"></audio></p><img src="images/Chamber.png" width="350px">'}
         ]
        }
        
        windows.forEach((win, index) => {
            let windowElement = document.createElement('div');
            windowElement.classList.add('window');
            windowElement.id = `window-${project}-${index}`;
            windowElement.innerHTML = `
                <div class="window-titlebar">
                    <span class="window-title">${win.title}</span>
                    <div class="window-controls">
                        <span class="close-button">X</span>
                    </div>
                </div>
                <div class="window-content">
                    <p>${win.content}</p>
                </div>
            `;

            const predefinedPositions = projectPositions[project] || [];
            const position = predefinedPositions[index] || { left: 50 + index * 50, top: 50 + index * 50 };

            windowElement.style.position = 'absolute';
            windowElement.style.left = `${position.left}px`;
            windowElement.style.top = `${position.top}px`;

projectContainer.appendChild(windowElement);
        });

        projectContainer.style.display = 'block';

        setTimeout(() => {
            windows.forEach((win, index) => {
                const windowElement = document.getElementById(`window-${project}-${index}`);
                spreadOutWindows(windowElement, index, project);
            });
        }, 50);

        const closeButtons = projectContainer.querySelectorAll('.close-button');
        closeButtons.forEach(button => {
            button.addEventListener('click', closeProject);
        });
    }

    const projectPositions = {
        MyInfo: [
            { left: 80, top: 30 },
            { left: 520, top: 200 },
            { left: 520, top: 10 },
            { left: 950, top: 150 }
        ],
        Remixing: [
            { left: 100, top: 10 },
            { left: 630, top: 0 },
            { left: 70, top: 300 },
            { left: 950, top: 320 },
            { left: 520, top: 200 },
            { left: 950, top: 150 },
        ],
        DAW: [
            { left: 80, top: 0 },
            { left: 20, top: 300 },
            { left: 600, top: 20 },
            { left: 900, top: 350 },
            { left: 460, top: 335}
        ],
        Game: [
            { left: 120, top: 50 },
            { left: 550, top: 0 },
            { left: 50, top: 250 },
            { left: 900, top: 250 },
            { left: 450, top: 350 },
            { left: 1000, top: 20 }
        ],
        Recording: [
            { left: 40, top: 30 },
            { left: 60, top: 470 },
            { left: 470, top: 100 },
            { left: 950, top: 10 },
            { left: 900, top: 450 }
        ],
        Live: [
            { left: 20, top: 0 },
            { left: 450, top: 10 },
            { left: 10, top: 330 },
            { left: 435, top: 470 },
            { left: 1000, top: 0 },
            { left: 900, top: 450 }
        ],
        Audio: [
            { left: 20, top: 0 },
            { left: 450, top: 80 },
            { left: 1000, top: 0 },
            { left: 900, top: 450 }
        ],
        Multimedia: [
            { left: 40, top: 30 },
            { left: 60, top: 470 },
            { left: 470, top: 100 },
            { left: 950, top: 10 },
            { left: 910, top: 380 }
        ],
        Business: [
            { left: 100, top: 40 },
            { left: 60, top: 300 },
            { left: 550, top: 50 },
            { left: 80, top: 500 }
        ],
        History: [
            { left: 120, top: 0 },
            { left: 100, top: 150 },
            { left: 600, top: 20 },
            { left: 550, top: 200 }
        ],
        Extra: [
            { left: 40, top: 0 },
            { left: 60, top: 260 },
            { left: 470, top: 100 },
            { left: 950, top: 10 },
            { left: 900, top: 450 }
        ]
    };

    function spreadOutWindows(window, index, project) {
        const predefinedPositions = projectPositions[project] || [];

        const position = predefinedPositions[index] || { left: 50 + index * 50, top: 50 + index * 50 };

        window.style.position = 'absolute';
        window.style.left = `${position.left}px`;
        window.style.top = `${position.top}px`;

        window.classList.add('active');
    }

    function closeProject(event) {
        const projectContainer = document.getElementById('project-container');
        projectContainer.style.display = 'none';
        projectContainer.innerHTML = '';
    }

    const images = projectContainer.querySelectorAll('img');
images.forEach(img => {
    const link = document.createElement('a');
    link.href = img.src;
    link.target = '_blank';
    img.parentNode.insertBefore(link, img);
    link.appendChild(img);
});
});
