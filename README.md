// COMP 3612 - ASG 3 - node.js // Name: Ethan Ai // Prof: Randy Connolly
// Date: 12/11/23 // // File: This file defines an Express.js server
that serves as the backend for an art database API. // API Endpoints:
// - /api/paintings // - /api/galleries // - /api/artists // -
/api/painting/:id // - /api/painting/gallery/:id // -
/api/painting/artist/:id // - /api/painting/year/:min/:max // -
/api/painting/title/:text // - /api/painting/color/:name // -
/api/artists/:country // - /api/galleries/:country // // Dependencies:
// - Express.js // - fs module // - path module // // Version: //
node.js v12.16.3

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
GLITCH.COM LINKS
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

https://spectacled-paper-asphalt.glitch.me/api/paintings

https://spectacled-paper-asphalt.glitch.me/api/painting/433

https://spectacled-paper-asphalt.glitch.me/api/painting/43374534856

https://spectacled-paper-asphalt.glitch.me/api/painting/gallery/7

https://spectacled-paper-asphalt.glitch.me/api/painting/gallery/43374534856

https://spectacled-paper-asphalt.glitch.me/api/painting/artist/106

https://spectacled-paper-asphalt.glitch.me/api/painting/artist/43374534856

https://spectacled-paper-asphalt.glitch.me/api/painting/year/1850/1900

https://spectacled-paper-asphalt.glitch.me/api/painting/year/2200/2400

https://spectacled-paper-asphalt.glitch.me/api/painting/title/self

https://spectacled-paper-asphalt.glitch.me/api/painting/title/dfjkghdfkgh

https://spectacled-paper-asphalt.glitch.me/api/painting/color/NAPA

https://spectacled-paper-asphalt.glitch.me/api/painting/color/coffee%20bean

https://spectacled-paper-asphalt.glitch.me/api/painting/color/kcvhvxchbkcj

https://spectacled-paper-asphalt.glitch.me/api/artists

https://spectacled-paper-asphalt.glitch.me/api/artists/Netherlands

https://spectacled-paper-asphalt.glitch.me/api/artists/sdfjjsdf

https://spectacled-paper-asphalt.glitch.me/api/galleries

https://spectacled-paper-asphalt.glitch.me/api/galleries/france

https://spectacled-paper-asphalt.glitch.me/api/galleries/kcvhvxchbkcj
