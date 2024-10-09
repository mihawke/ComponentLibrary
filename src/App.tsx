import { BsGithub } from 'react-icons/bs'
import './App.css'
import Button from './components/Button'
import IconButton from './components/IconButton'

function App() {

  return (
    <div className='flex flex-col p-8 gap-2'>
      <div className='flex flex-row gap-2'>
        <Button
          size='sm'
          hierarchy='primary'
          onClick={() => alert('Hello')}
          startIcon={<BsGithub size={20} />}
        >Button</Button>
        <Button
          size='sm'
          hierarchy='secondary'
          startIcon={<BsGithub size={20} />}
        >Button</Button>
        <Button
          size='sm'
          startIcon={<BsGithub size={20} />}
          hierarchy='outlined'
        >Button</Button>
        <Button
          size='sm'
          startIcon={<BsGithub size={20} />}
          hierarchy='tertiary'
        >Button</Button>
      </div>
      <div className='flex flex-row gap-2'>
        <IconButton
          onClick={() => alert('Hello')}
          size='sm'
          hierarchy='primary'>
          <BsGithub fontSize="inherit" ></BsGithub>
        </IconButton>
        <IconButton
          size='sm'
          hierarchy='secondary'>
          <BsGithub fontSize="inherit" ></BsGithub>
        </IconButton>
        <IconButton
          size='sm'
          hierarchy='outlined'>
          <BsGithub fontSize="inherit" ></BsGithub>
        </IconButton>
        <IconButton
          size='sm'
          hierarchy='tertiary'>
          <BsGithub fontSize="inherit" ></BsGithub>
        </IconButton>
      </div>
    </div>
  )
}

export default App
