/**
* 
* Website Copyright (c) Toxic Development | github.com/TheRealToxicDev
*
*/

const socket = io.connect("https://cordx.lol");

socket.on('userCount', userCount => {
        document.getElementById('connectionCount').innerHTML = userCount;
  })