import axios from '../../src/'

axios({
  method: 'GET',
  url: '/base/get',
  params: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'GET',
  url: '/base/get',
  params: {
    a: {
      a1: 1,
      a2: 2,
      a3: 3
    },
    b: '江户川'
  }
})

axios({
  method: 'GET',
  url: '/base/get',
  params: {
    foo: [1,2]
  }
})

axios({
  method: 'GET',
  url: '/base/get',
  params: {
    date: new Date()
  }
})

axios({
  method: 'GET',
  url: '/base/get',
  params: {
    specialChar: '@~!'
  }
})

axios({
  method: 'POST',
  url: '/base/get',
  data: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'POST',
  url: '/base/get',
  data: {
    a: {
      a1: 1,
      a2: 2,
      a3: 3
    },
    b: [1,2]
  }
})

axios({
  method: 'POST',
  url: '/base/get',
  data: [1,2]
})

axios({
  method: 'POST',
  url: '/base/get',
  data: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'POST',
  url: '/base/get',
  headers: {
    'content-type': 'application/json;charset=utf-8',
    'Accept': 'application/json, text/plain, */*'
  },
  data: {
    a: 1,
    b: 2,
    c: '张朱磊'
  }
})

