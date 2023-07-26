import { defineStore } from 'pinia'
import { io } from 'socket.io-client'
import { ref } from 'vue'

const URL = 'http://localhost:3000'

const useMulitPlayStore = defineStore('multiPlayStore', () => {
  const socket = io(URL)

  const connected = ref(false)

  const connect = () => {
    socket.connect()
  }
  const disconnect = () => {
    socket.disconnect()
  }

  const send = () => {
    socket.emit('chat message', 'hihi')
  }

  const getRoomList = () => {}

  const createRoom = () => {}

  socket.on('connect', () => {
    connected.value = true
  })

  socket.on('disconnect', () => {
    connected.value = false
  })

  socket.on('chat message', (msg) => {
    console.log(`emit: ${msg}`)
  })

  return {
    socket,
    connected,

    connect,
    disconnect,
    send,

    getRoomList,
    createRoom,
  }
})

export { useMulitPlayStore }
