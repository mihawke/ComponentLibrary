
import { useState } from 'react'
import ComponentsNavigation from '../components/ComponentsNavigation'
import ComponentsViewer from '../components/ComponentsViewer'
import ComponentDocumentation from '../components/ComponentDocumentation'

const Components = () => {
    const [currentComponent, setCurrentComponent] = useState('Button')
    return (
        <div className='flex flex-1 flex-col'>
            <h1 className='text-5xl w-full font-bold text-center border p-4'>Components</h1>
            <div className='flex h-full'>
                <ComponentsNavigation currentComponent={currentComponent} onSelect={setCurrentComponent}></ComponentsNavigation>
                <ComponentsViewer currentComponent={currentComponent}></ComponentsViewer>
                <ComponentDocumentation currentComponent={currentComponent}></ComponentDocumentation>
            </div>
        </div>
    )
}

export default Components