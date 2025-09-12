import { CiSearch } from "react-icons/ci";

const HeroSection = ({searchQuery, setSearchQuery}) => {

    return (
        <section className='relative z-10 text-center px-8 pt-20 pb-16'>
            <h1 className='text-5xl lg:text-6xl font-bold mb-8 leading-tight'>Your All-in-One Movie Companion</h1>
            <br />
            <div className='flex text-center items-center justify-center gap-4 text-5xl lg:text-6xl font-bold'>
                <p>with </p>
                <span className='bg-gradient-to-r from-white to-pink-400 bg-clip-text text-transparent'>Spectrum Lab</span>
            </div>

            <p className='text-gray-400 text-lg max-w-3xl mx-auto mb-12 leading-relaxed mt-2'>
                Spectrum Lab is more than a watchlist—it's your personal hub for discovering, organizing,<br />
                and celebrating cinema. Track what you've seen, explore curated picks,<br />
                and find stories that match your mood.
            </p>


            {/* Search bar */}
            <div className='max-w-lg mx-auto mb-20'>
                <div className='relative'>
                    <CiSearch className='absolute left-6 top-1/2 transform -translate-y-1/2 text-white w-5 h-5'></CiSearch>

                    <input type="text" placeholder='Search Movies' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='w-full bg-red-500 text-white placeholder:-white px-16 py-4 rounded-full outline-none text-lg'/>
                </div>
            </div>
            
        </section>
    )
}

export default HeroSection