import React, { useState } from 'react'

export const CounterApp = () => {
  const [count, setCount] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  })

  const { counter1, counter2, counter3 } = count

  const increment = () =>
    setCount(() => ({
      ...count,
      counter1: count.counter1 + 1,
    }))
  const decrement = () =>
    setCount(() => ({
      ...count,
      counter1: count.counter1 - 1,
    }))

  return (
    <div>
      <div className="card">
        <h5 className="card-header">Normal Counter</h5>
        <div className="card-body">
          <div className="d-flex flex-column">
            <span>counter1 {counter1}</span>
            <span>counter2 {counter2}</span>
            <span>counter3 {counter3}</span>
          </div>
          <div className="d-flex gap-2 flex-wrap">
            <button
              className="btn btn-outline-primary mr-2"
              onClick={increment}
            >
              +1
            </button>
            <button className="btn btn-outline-primary" onClick={decrement}>
              -1
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
