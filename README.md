# anafHomeWebpage
I turned my ANAF web page design from Figma into code using a front-end framework: Angular. The design is made for a desktop size of at least 1200, so please consider this when trying to see it on a portable device other than a laptop that has a wide enough screen.

Short project description: Last August, when I didn't know to code yet, I was learning Figma, Web Design and UI/UX. My first portofolio project was to redesign the currend ANAF web page. ANAF is the financial and fiscal institution of Romanian Government. As you may expect(as it happens with many governamental sites), it looks awfull, the experience on the site is not very good and the page itself is not intuitive.
[Check ANAF page to see its current look](https://www.anaf.ro/anaf/internet/ANAF/acasa/!ut/p/a1/hc6xDoIwEAbgZ2Ho2jtRCHHDhUocxEXoYkpSCgZbUiq8vtU4OCjedn--y3_AoQSuxdQp4TqjRf_ceXxhKxazMAlzZAViEe32pyg7ImYbDyoP8Mek-O_-DHyRYPwGCxU5cNWb-vVulep6nSjgVjbSSkvv1setc8O4JUhwnmcqtGioNQS_-daMDsoPBsOtxGvUT4c0CB5h5prT/dl5/d5/L2dBISEvZ0FBIS9nQSEh/).

The initial design was made in Figma, and now I did code it in HTML, CSS and JS using Angular as a tool. This is my first Angular project I do for my code portofolio.
I will continue with a resume of what I did, how I did it and I will evaluate my work based on some good practices and programming principles and how I implemented them.

## What I did
I transformed the current ANAF webpage in something more easy to follow and understand, by that improving the overall experience of anyone visiting the site. Everything on the site is grouped accordingly to its purpose, so you can find the thing you are interested about. In this way you won't feel lost on the page searching for something that should be in a category, only to find it somewhere else. Everything is intuitively grouped, and each 'big' topic has its own page/section.


## How I did it
After generating the Angular project I made a component for each big section of the page. After that, I went into each component and I created sub-components, trying to break each section in subsections as much as possible, applying the [Separation of Concerns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenseperation_concerns_guidl.htm#:~:text=Separation%20of%20concerns%20is%20a,and%20arrangement%20in%20software%20layers.) principle. In this way I tried to minimise the impact of each subcomponent on the other subcomponents. A change in one of them won't imply or break another one.

Font - font is applied globally in the project in the main css file. It is a sans-serif font. It is easily readable, not overly formal, yet not playfull.
For font, colors and font weights I did some css variables defined globally in the main css file.
For some parts, like sub-titles and buttons I did some shared components. In this way I made some of my code reusable, because it is faster, easier and better to define a standard component(customisable) that can be used again and again when needed.A

## Mistakes I have in the project

The mistakes I did in the project are due to my lack of experience working in a professional environment + the fact that I am still trying to get used with the tools I am using(Angular, components, shared components and all the things Angular comes with).

1. Reusable sub-titles: They were not made from the begining. I did some hard work before implementing a customisable reusable subtitle that I can use everywhere when needed. This lead to less efficiency during work and made my code less readable and efficient.
2. Reusable buttons: Same as above.
3. Because of the first 2 points above, some of my code is messy and not very readable. Not using reusable code leads to more work and less efficiency. Also, it is harder for someone else to evaluate my work and to understand what I did in a certain code block.
4. The design is not responsive. It is made for screens at least 1200 wide. Looking at my project with a device like a cellphone can lead to some serious and crazy behaviors of some, if not all components. The initial design was made for desktops and it didn't include a mobile or tablet version, so please consider this when evaluating and looking at my project.
5. The standardised css variables weren't defined from the begining, leading to problems like in the point 1 and 2 above.

## Last words

Overall, my satisfaction comes from finishing the first project in a web framework. I recognize the flaws it has and I am happy to hear your opinions on mistakes I don't know about yet that are present in this project. I work towards to improve myself and I am excited to do my next project soon. Thank you for checking my project.

Cheers!
