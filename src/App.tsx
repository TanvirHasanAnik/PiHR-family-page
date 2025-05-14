import './App.css'
import NavBar from './navbar';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  VKButton,
  VKGroup,
} from "@vivakits/react-components";

function App() {
  return (
    <div>
      <NavBar/>
      <div className='bg-green-100'>
        <div className='title bg-yellow-100-'>title</div>
        <div className='content bg-gray-100'>content</div>
      </div>
    </div>
  )
}

export default App
