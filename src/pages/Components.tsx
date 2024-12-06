
import { useState } from 'react'
import ComponentsNavigation from '../ComponentsNavigation'
import ComponentsViewer from '../ComponentsViewer'
import ComponentDocumentation from '../ComponentDocumentation'

const Components = () => {
    const [currentComponent, setCurrentComponent] = useState('Button')
    return (
        <div className='flex flex-1 flex-col'>
            <h1 className='text-5xl w-full font-bold text-center border p-4'>Components</h1>
            <div className='flex'>
                <ComponentsNavigation currentComponent={currentComponent} onSelect={setCurrentComponent}></ComponentsNavigation>
                <ComponentsViewer currentComponent={currentComponent}></ComponentsViewer>
                <ComponentDocumentation currentComponent={currentComponent}></ComponentDocumentation>
            </div>
        </div>
    )
}

export default Components