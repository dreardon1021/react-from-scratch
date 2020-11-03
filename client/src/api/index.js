import { setCounter, addCounter, subtractCounter } from '../actions'

export const getCounter = () => {
  console.log("fetching");
  return fetch("http://localhost:5000/")
  .then(res => res.json())
};

export const addToCounter = counter => {
  return fetch("http://localhost:5000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ counter: counter + 1, reqType: 'add' })
  })
  .then(res => res.json())
};

export const subtractFromCounter = counter => {
  return fetch("http://localhost:5000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ counter: counter - 1, reqType: 'subtract' })
  })
  .then(res => res.json());
};
