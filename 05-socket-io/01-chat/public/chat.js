((d,io) => {
  'use-strict';

  var io = io(),
      chatForm = d.querySelector('#chat-form'),
      messageText = d.querySelector('#message-text'),
      chat = d.querySelector('#chat');

    chatForm.onsubmit = (e) => {
      e.preventDefault();
      io.emit('new message', messageText.value)
      messageText.value = null
      return false;
    }


    io.on('new user', (newUser) => {
        alert(newUser.message)
    })

    io.on('user says', userSays => {
       chat.insertAdjacentHTML('beforeend', `<li>${userSays}</li>`)
    })

    io.on('bye bye user', (info) => {
      alert(info.message)
    })


})(document,io)