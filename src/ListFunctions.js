import axios from 'axios'

export const getList = () => {
  return axios
    .get('/api/hotdogs', {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => {
      return res.data
    })
}

export const addToList = term => {
  return axios
    .post(
      '/api/hotdog',
      {
        HotDogName: term
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    .then(function(response) {
      //console.log(response)
    })
}

export const deleteItem = term => {
  return axios
    .delete(`/api/hotdog/${term}`, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(function(response) {
      //console.log(response)
    })
    .catch(function(error) {
      //console.log(error)
    })
}

export const updateItem = (term, id) => {
  return axios
    .put(
      `/api/hotdog/${id}`,
      {
        HotDogName: term
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    .then(function(response) {
      //console.log(response)
    })
}
