# anafHomeWebpage
I turned my ANAF web page design from Figma into code using a front-end framework: Angular.

Short project description: Last August, when I didn't know to code yet, I was learning Figma, Web Design and UI/UX. My first portofolio project was to redesign the currend ANAF web page. ANAF is the financial and fiscal institution of Romanian Government. As you may expect(as it happens with many governamental sites), it looks awfull, the experience on the site is not very good and the page itself is not intuitive.
[Check ANAF page to see its current look](https://www.anaf.ro/anaf/internet/ANAF/acasa/!ut/p/a1/hc6xDoIwEAbgZ2Ho2jtRCHHDhUocxEXoYkpSCgZbUiq8vtU4OCjedn--y3_AoQSuxdQp4TqjRf_ceXxhKxazMAlzZAViEe32pyg7ImYbDyoP8Mek-O_-DHyRYPwGCxU5cNWb-vVulep6nSjgVjbSSkvv1setc8O4JUhwnmcqtGioNQS_-daMDsoPBsOtxGvUT4c0CB5h5prT/dl5/d5/L2dBISEvZ0FBIS9nQSEh/).

The initial design was made in Figma, and now I did code it in HTML, CSS and JS using Angular as a tool. This is my first Angular project I do for my code portofolio.
I will continue with a resume of what I did, how I did it and I will evaluate my work based on some good practices and programming principles and how I implemented them.

## What I did
I transformed the current ANAF webpage in something more easy to follow and understand, by that improving the overall experience of anyone visiting the site. Everything on the site is grouped accordingly to its purpose, so you can find the thing you are interested about. In this way you won't feel lost on the page searching for something that should be in a category, only to find it somewhere else. Everything is intuitively grouped, and each 'big' topic has its own page/section.


## How I did it
After generating the Angular project I made a component for each big section of the page. After that, I went into each component and I created sub-components, trying to break each section in subsections as much as possible, applying the [Separation of Concerns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenseperation_concerns_guidl.htm#:~:text=Separation%20of%20concerns%20is%20a,and%20arrangement%20in%20software%20layers.) principle. In this way I tried to minimise the impact of each subcomponent on the other subcomponents. A change in one of them won't imply or break another one.
