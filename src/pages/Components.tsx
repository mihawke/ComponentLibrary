import { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { BsGithub } from 'react-icons/bs'
import Button from '../components/Button'
import IconButton from '../components/IconButton'
import InputField from '../components/InputField'
import Badge from '../components/Badge'
import Dropdown from '../components/Dropdown'
import Toggle from '../components/Toggle'
import Checkbox from '../components/Checkbox'
import ProgressIndicator from '../components/ProgressIndicator'
import ProgressCircle from '../components/ProgressCircle'
import Slider from '../components/Slider'
import Tooltip from '../components/Tooltip'
import DatePicker from '../components/DatePicker'
import Loading from '../components/Loading'
import Skeleton from '../components/Skeleton'
import Link from '../components/Link'
import RadioButton from '../components/RadioButton'

const Components = () => {
    const [value, setValue] = useState(0)
    const [date, setDate] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    return (
        <div className='flex flex-col p-8 gap-2'>
            <h1 className='text-5xl font-bold text-center'>Components</h1>
            <section>
                <div className='flex flex-col gap-2'>
                    <h2 className="text-lg font-semibold mb-2">Radio Buttons</h2>
                    <div className="flex gap-2">
                        <RadioButton size='sm' />
                        <RadioButton size='md' />
                        <RadioButton size='lg' />
                        <RadioButton size='xl' />
                        <RadioButton size='2xl' />
                    </div>
                </div>
            </section>
            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Links</h2>
                <div className="flex gap-2">
                    <Link href="#">Default Link</Link>
                    <Link href="#" underline="hover">Underline on Hover</Link>
                    <Link href="#" underline="always">Always Underlined</Link>
                </div>
            </section>

            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Buttons with Loading State</h2>
                <div className="flex flex-row gap-2">
                    <Button
                        size="sm"
                        hierarchy="primary"
                        onClick={() => setIsLoading(prev => !prev)}
                    >
                        {isLoading ? 'Loading...' : 'Start'}
                    </Button>
                    {isLoading && (
                        <>
                            <Loading />
                            <Loading size="md" />
                            <Loading size="lg" />
                        </>
                    )}
                </div>
            </section>

            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Skeletons</h2>
                <div className="flex flex-row gap-2">
                    <Skeleton variant="text" fontSize={8} />
                    <Skeleton variant="circular" width={50} height={50} />
                    <Skeleton variant="rectangular" width={150} height={50} />
                    <Skeleton variant="rounded" width={50} height={50} />
                </div>
            </section>

            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Date Pickers</h2>
                <div className="flex flex-row items-center gap-2">
                    <DatePicker
                        value={date}
                        name="date"
                        id="date"
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <DatePicker
                        value={date}
                        name="date"
                        id="date-disabled"
                        disabled={true}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
            </section>

            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Tooltips with Button</h2>
                <div className="flex flex-row gap-2">
                    <Tooltip position="top-left" label="Tooltip">
                        <Button size="sm" hierarchy="primary">Top Left</Button>
                    </Tooltip>
                    <Tooltip position="top-right" label="Tooltip">
                        <Button size="sm" hierarchy="primary">Top Right</Button>
                    </Tooltip>
                    <Tooltip position="bottom-left" label="Tooltip">
                        <Button size="sm" hierarchy="primary">Bottom Left</Button>
                    </Tooltip>
                    <Tooltip position="bottom-right" label="Tooltip">
                        <Button size="sm" hierarchy="primary">Bottom Right</Button>
                    </Tooltip>
                    <Tooltip position="top-center" label="Tooltip">
                        <Button size="sm" hierarchy="primary">Top Center</Button>
                    </Tooltip>
                    <Tooltip position="bottom-center" label="Tooltip">
                        <Button size="sm" hierarchy="primary">Bottom Center</Button>
                    </Tooltip>
                    <Tooltip position="left" label="Tooltip">
                        <Button size="sm" hierarchy="primary">Left</Button>
                    </Tooltip>
                    <Tooltip position="right" label="Tooltip">
                        <Button size="sm" hierarchy="primary">Right</Button>
                    </Tooltip>
                </div>
            </section>

            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Buttons with Icons</h2>
                <div className="flex flex-row gap-2">
                    <Button size="sm" hierarchy="primary" onClick={() => alert('Hello')} startIcon={<BsGithub size={20} />}>Button</Button>
                    <Button size="sm" hierarchy="secondary" startIcon={<BsGithub size={20} />}>Button</Button>
                    <Button size="sm" hierarchy="outlined" startIcon={<BsGithub size={20} />}>Button</Button>
                    <Button size="sm" hierarchy="tertiary" startIcon={<BsGithub size={20} />}>Button</Button>
                </div>
            </section>
            <section>
                <h2 className="text-lg font-semibold mb-2">Icon Buttons</h2>
                <div className="flex flex-row gap-2">
                    <IconButton size="sm" hierarchy="primary" onClick={() => alert('Hello')}>
                        <BsGithub fontSize="inherit" />
                    </IconButton>
                    <IconButton size="md" hierarchy="secondary">
                        <BsGithub fontSize="inherit" />
                    </IconButton>
                    <IconButton size="lg" hierarchy="outlined">
                        <BsGithub fontSize="inherit" />
                    </IconButton>
                    <IconButton size="2xl" hierarchy="tertiary">
                        <BsGithub fontSize="inherit" />
                    </IconButton>
                </div>
            </section>

            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Input Fields</h2>
                <div className="flex flex-row gap-2">
                    <InputField
                        label="Name"
                        placeholder="Enter Name"
                        type="text"
                        name="name"
                    />
                    <InputField
                        label="Email"
                        placeholder="Enter email"
                        type="email"
                        name="email"
                        destructive={true}
                        hint="email is not valid"
                    />
                </div>
            </section>

            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Badges</h2>
                <div className="flex flex-row gap-2">
                    <Badge>Label</Badge>
                    <Badge icon={<GoDotFill />}>Label</Badge>
                    <Badge size="md" icon={<BsGithub size={16} />} color="brand">Label</Badge>
                    <Badge size="md" icon={<BsGithub size={16} />} color="warning">Label</Badge>
                    <Badge size="md" icon={<BsGithub size={16} />} color="success">Label</Badge>
                    <Badge size="md" icon={<BsGithub size={16} />} color="gray">Label</Badge>
                    <Badge size="lg" icon={<BsGithub size={16} />} color="error">Label</Badge>
                    <Badge size="lg" iconPosition="only" icon={<BsGithub size={16} />} color="error">Label</Badge>
                    <Badge>Label</Badge>
                    <Badge iconPosition="right" icon={<GoDotFill />}>Label</Badge>
                    <Badge iconPosition="right" size="md" icon={<BsGithub size={16} />} color="brand">Label</Badge>
                    <Badge iconPosition="right" size="md" icon={<BsGithub size={16} />} color="warning">Label</Badge>
                    <Badge iconPosition="right" size="md" icon={<BsGithub size={16} />} color="success">Label</Badge>
                    <Badge iconPosition="right" size="md" icon={<BsGithub size={16} />} color="gray">Label</Badge>
                    <Badge iconPosition="right" size="lg" icon={<BsGithub size={16} />} color="error">Label</Badge>
                    <Badge iconPosition="only" size="lg" icon={<BsGithub size={16} />} color="error">Label</Badge>
                </div>
            </section>

            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Dropdown</h2>
                <div className="flex flex-row gap-2">
                    <Dropdown />
                </div>
            </section>

            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Toggle</h2>
                <div className="flex flex-row gap-2">
                    <Toggle setState={() => ''} />
                </div>
            </section>

            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Checkboxes</h2>
                <div className="flex flex-row gap-2">
                    <Checkbox />
                    <Checkbox checked={true} disabled={true} />
                    <Checkbox disabled={true} />
                </div>
            </section>

            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Slider</h2>
                <Slider
                    min={0}
                    max={100}
                    id="slider-id"
                    value={value}
                    name="slider-name"
                    onChange={(e) => setValue(parseInt(e.target.value, 10))}
                />
            </section>

            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Progress Indicator</h2>
                <div className="flex flex-row gap-2">
                    <ProgressIndicator maxValue={100} value={value} label={true} />
                </div>
            </section>

            <hr className='my-5'></hr>
            <section>
                <h2 className="text-lg font-semibold mb-2">Progress Circles</h2>
                <div className="flex flex-row gap-2 items-center">
                    <ProgressCircle maxValue={100} value={value} size="xxs" label="users" />
                    <ProgressCircle maxValue={100} value={value} size="xs" label="active users" />
                    <ProgressCircle maxValue={100} value={value} label="active users" />
                    <ProgressCircle maxValue={100} value={value} size="md" label="active users" />
                    <ProgressCircle maxValue={100} value={value} size="lg" label="active users" />
                </div>
            </section>
        </div>
    )
}

export default Components