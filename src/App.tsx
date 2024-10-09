import { BsGithub } from 'react-icons/bs'
import './App.css'
import Button from './components/Button'
import IconButton from './components/IconButton'
import InputField from './components/InputField'
import Badge from './components/Badge'
import { GoDotFill } from 'react-icons/go'
import Dropdown from './components/Dropdown'
import Toggle from './components/Toggle'
import Checkbox from './components/Checkbox'

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
      <div className='flex flex-row gap-2'>
        <InputField
          label='Name'
          placeholder='Enter Name'
          type='text'
          name='name'
        />
        <InputField
          label='Email'
          placeholder='Enter email'
          type='email'
          name='email'
          destructive={true}
          hint='email is not valid'
        />
      </div>
      <div className='flex flex-row gap-2'>
        <Badge >Label</Badge>
        <Badge icon={<GoDotFill />}>Label</Badge>
        <Badge size='md' icon={<BsGithub size={16} />} color='brand'>Label</Badge>
        <Badge size='md' icon={<BsGithub size={16} />} color='warning'>Label</Badge>
        <Badge size='md' icon={<BsGithub size={16} />} color='success'>Label</Badge>
        <Badge size='md' icon={<BsGithub size={16} />} color='gray'>Label</Badge>
        <Badge size='lg' icon={<BsGithub size={16} />} color='error'>Label</Badge>
        <Badge size='lg' iconPosition='only' icon={<BsGithub size={16} />} color='error'>Label</Badge>
      </div>
      <div className='flex flex-row gap-2'>
        <Badge >Label</Badge>
        <Badge iconPosition='right' icon={<GoDotFill />}>Label</Badge>
        <Badge iconPosition='right' size='md' icon={<BsGithub size={16} />} color='brand'>Label</Badge>
        <Badge iconPosition='right' size='md' icon={<BsGithub size={16} />} color='warning'>Label</Badge>
        <Badge iconPosition='right' size='md' icon={<BsGithub size={16} />} color='success'>Label</Badge>
        <Badge iconPosition='right' size='md' icon={<BsGithub size={16} />} color='gray'>Label</Badge>
        <Badge iconPosition='right' size='lg' icon={<BsGithub size={16} />} color='error'>Label</Badge>
        <Badge iconPosition='only' size='lg' icon={<BsGithub size={16} />} color='error'>Label</Badge>
      </div>
      <div className='flex flex-row gap-2'>
        <Dropdown />
      </div>
      <div className='flex flex-row gap-2'>
        <Toggle setState={() => ''}></Toggle>
      </div>
      <div className='flex flex-row gap-2'>
        <Checkbox />
        <Checkbox checked={true} disabled={true} />
        <Checkbox disabled={true} />
      </div>
    </div>
  )
}

export default App
