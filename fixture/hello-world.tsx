import { useState } from 'react'

function MyButton({ onClick }: { onClick: () => void }) {
  return <button onClick={onClick}>Click me</button>
}

export default function MyApp() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Welcome to my app</h1>
      {count}
      <MyButton onClick={() => setCount((c) => c + 1)} />
    </div>
  )
}
