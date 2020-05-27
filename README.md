# Grace Bobber's Website!

This is a secret repo for Grace's website ;)

## TODO

- [ ] Think of a better way to handle news posts
- [x] Make the footer work properly
- [x] Hook up contact form somehow
- [x] Generate all content
- [x] Find way to host audio
- [ ] Find way to interact with the instagram API?
- [ ] Make sure every page has a title (esp after meta tag commit)
- [x] fix gallery image hack
- [ ] Get grace's email as endpoint for the form
- [ ] take away mute button if video can't load

> Cool note to self: !A && !B === A || B. I'm sure this was in a math textbook somewhere and I forgot it, but it's nice to remember for the future!

## Video Procedure

1. Get video
2. Make sure subject is centered using keyframes if need be
3. Convert to webm using vp9 encoder and a small mp4
4. Further compress webm using ffmpeg. I used `ffmpeg -i splash-video.webm -c:v libvpx-vp9 -b:v 500k -minrate 300k -maxrate 1000k -crf 10 -c:a libvorbis output2.webm`
