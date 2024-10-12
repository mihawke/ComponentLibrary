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
import ProgressIndicator from './components/ProgressIndicator'
import { useEffect, useState } from 'react'
import ProgressCircle from './components/ProgressCircle'
import Slider from './components/Slider'
import Tooltip from './components/Tooltip'
import DatePicker from './components/DatePicker'
import Loading from './components/Loading'
import Skeleton from './components/Skeleton'
import Background from './components/Background'
import Link from './components/Link'
import RadioButton from './components/RadioButton'

function App() {

  const [value, setValue] = useState(0)
  const [date, setDate] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    return () => {
    }
  }, [])


  return (
    <div className='flex flex-col p-8 gap-2'>
      <div className='flex flex-row gap-2'>
        <RadioButton/>
      </div>
      <div className='flex flex-row gap-2'>
        <Link href="#">Link</Link>
        <Link href="#" underline='hover'>Link</Link>
        <Link href="#" underline='always'>Link</Link>
      </div>
      <div className='flex flex-row gap-2'>
        <Slider
          min={0}
          max={100}
          id='id'
          value={value}
          name='name'
          onChange={e => setValue(parseInt(e.target.value))}
        />
      </div>
      <div className='flex flex-row gap-2'>
        <Button
          size='sm'
          hierarchy='primary'
          onClick={e => setIsLoading(prev => !prev)}
        >
          {isLoading ? 'Loading...' : 'Start'}
        </Button>
        {isLoading ? <Loading /> : null}
        {isLoading ? <Loading size='md' /> : null}
        {isLoading ? <Loading size='lg' /> : null}
      </div>
      <div className='flex flex-row gap-2'>
        <Skeleton variant='text' fontSize={8} />
        <Skeleton variant='circular' width={50} height={50} />
        <Skeleton variant='reactangular' width={150} height={50} />
        <Skeleton variant='rounded' width={50} height={50} />
      </div>
      <div className='flex flex-row items-center gap-2'>
        <DatePicker
          value={date}
          name='date'
          id='date'
          onChange={(e) => setDate(e.target.value)}
        />
        <DatePicker
          value={date}
          name='date'
          id='date'
          disabled={true}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className='flex flex-row gap-2'>
        <Tooltip position='top-left' label='Tooltip'>
          <Button
            size='sm'
            hierarchy='primary'
          >Top Left</Button>
        </Tooltip>
        <Tooltip position='top-right' label='Tooltip'>
          <Button
            size='sm'
            hierarchy='primary'
          >Top Right</Button>
        </Tooltip>
        <Tooltip position='bottom-left' label='Tooltip'>
          <Button
            size='sm'
            hierarchy='primary'
          >Bottom Left</Button>
        </Tooltip>
        <Tooltip position='bottom-right' label='Tooltip'>
          <Button
            size='sm'
            hierarchy='primary'
          >Bottom Right</Button>
        </Tooltip>
        <Tooltip position='top-center' label='Tooltip'>
          <Button
            size='sm'
            hierarchy='primary'
          >Top Center</Button>
        </Tooltip>
        <Tooltip position='bottom-center' label='Tooltip'>
          <Button
            size='sm'
            hierarchy='primary'
          >Bottom Center</Button>
        </Tooltip>
        <Tooltip position='left' label='Tooltip'>
          <Button
            size='sm'
            hierarchy='primary'
          >Left</Button>
        </Tooltip>

        <Tooltip position='right' label='Tooltip'>
          <Button
            size='sm'
            hierarchy='primary'
          >Right</Button>
        </Tooltip>
      </div>
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
          size='md'
          hierarchy='secondary'>
          <BsGithub fontSize="inherit" ></BsGithub>
        </IconButton>
        <IconButton
          size='lg'
          hierarchy='outlined'>
          <BsGithub fontSize="inherit" ></BsGithub>
        </IconButton>
        <IconButton
          size='2xl'
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
      <div className='flex flex-row gap-2'>
        <ProgressIndicator maxValue={100} value={value} label={true}></ProgressIndicator>
      </div>
      <div className='flex flex-row gap-2 items-center'>
        <ProgressCircle maxValue={100} value={value} size='xxs' label='users' />
        <ProgressCircle maxValue={100} value={value} size='xs' label='active users' />
        <ProgressCircle maxValue={100} value={value} label='active users' />
        <ProgressCircle maxValue={100} value={value} size='md' label='active users' />
        <ProgressCircle maxValue={100} value={value} size='lg' label='active users' />
      </div>
      {/* <div className='flex flex-row gap-2'>
        <Background />
      </div> */}
    </div>
  )
}

export default App
