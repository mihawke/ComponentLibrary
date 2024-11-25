import user from './assets/user.png'
import macbook from './assets/macbook.png'
import layers from './assets/layers.png'
import sisyphus from './assets/sisyphus.png'
import quotient from './assets/quotient.png'
import catalog from './assets/catalog.png'
import circooles from './assets/circooles.png'
import Badge from '../../components/Badge'
import { FaArrowRight, FaRegPlayCircle } from 'react-icons/fa'
import Button from '../../components/Button'

const Template7 = () => {
    return (
        <div className="flex flex-1 flex-col items-center">
            <header className='flex w-full items-center border py-5 px-40 border-gray-100'>
                <h2 className="text-2xl font-bold">Pixel Forge</h2>
                <nav className='flex gap-8 items-center text-gray-600 font-semibold ml-10'>
                    <button className=''>Home</button>
                    <button>Products</button>
                    <button>Resources</button>
                    <button>Pricing</button>
                </nav>
                <div className='w-10 h-10 ml-auto'>
                    <img src={user} className='w-full h-full' />
                </div>
            </header>
            <section className='flex flex-col items-center justify-center gap-16 pt-24'>
                <div className='flex flex-col items-center'>
                    <Badge color='brand' size='sm' className='pl-1'><Badge color='brand' size='sm' className='bg-white'>New Feature</Badge> Checkout the team dashboard<FaArrowRight /></Badge>
                    <h2 className='text-[60px] font-bold text-gray-900 mt-4 mb-6'>Beautiful analytics to grow smarter</h2>
                    <p className='text-lg w-[770px] text-center text-gray-600'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                    <div className='flex gap-3 mt-12'>
                        <Button hierarchy='outlined' size='2xl' startIcon={<FaRegPlayCircle size={24} />}>Demo</Button>
                        <Button hierarchy='primary' size='2xl'>Sign up</Button>
                    </div>
                </div>
                <div className='flex flex-1 max-h-[480px] overflow-hidden relative'>
                    <img src={macbook} className='object-cover object-top scale-95' />
                </div>
            </section>
            <hr className='w-[80%]'></hr>
            <section className='w-full px-20 py-24'>
                <p className='text-base text-gray-600 text-center mb-8'>Join 4,000+ companies already growing</p>
                <div className='flex justify-between px-16'>
                    <div className='flex text-xl font-bold text-gray-900 items-center gap-3'><img src={layers} className='w-auto h-10' />Layers</div>
                    <div className='flex text-xl font-bold text-gray-900 items-center gap-3'><img src={sisyphus} className='w-auto h-10' />Sisyphus</div>
                    <div className='flex text-xl font-bold text-gray-900 items-center gap-3'><img src={circooles} className='w-auto h-10' />Circooles</div>
                    <div className='flex text-xl font-bold text-gray-900 items-center gap-3'><img src={catalog} className='w-auto h-10' />Catalog</div>
                    <div className='flex text-xl font-bold text-gray-900 items-center gap-3'><img src={quotient} className='w-auto h-10' />Quotient</div>
                </div>
            </section>
            <hr className='w-[80%]'></hr>
        </div>
    )
}

export default Template7