import axios from 'axios'

const token = '5vb2SwD1x3INx7ucX0xNxZghPU08fvPgNzmd15iFN402d5tAoTY4wnVXNLyf'

const roomRequest = axios.create({
  baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6',
  headers: {
    Authorization: `Bearer ${token}`,
    accept: 'application/json'
  }
})

export const getRooms = () => roomRequest.get('/rooms')
export const getInformation = (id) => roomRequest.get(`/room/${id}`)
export const bookingRoom = (id, data) => roomRequest.post(`/room/${id}`, data)
