import useWindowSize from "./customHook/useWindowSize"

function App() {
  const {custom_width, custom_height} = useWindowSize();

  return <ul>
    <li>Window width: <span>{custom_width}</span></li>
    <li>Window height: <span>{custom_height}</span></li>
  </ul>
}

export default App
