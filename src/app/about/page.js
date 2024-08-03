import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';


const About = () => {
	return (
		<>
		<Navbar/>
		<main>
			<div className='hero'>
				<div className='overlay'>
					<h2 className='hero-text'>Welcome to Pantrify Tracker</h2>
					<p className='hero-para'>Manage your pantry efficiently</p>
				</div>
			</div>
			<div className='bg-white text-black'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
					<div className='text-center mb-12'>
						<h1 className='text-4xl font-bold mb-4'>About Pantrify</h1>
						<p className='text-lg text-gray-600'>
							Your ultimate pantry management solution.
						</p>
					</div>

					<div className='mb-16'>
						<h2 className='text-3xl font-semibold mb-4'>Our Mission</h2>
						<p className='text-gray-700 leading-relaxed'>
							At Pantrify, our mission is to help you manage your pantry
							efficiently. We believe that a well-organized pantry can save you
							time, money, and resources.
						</p>
					</div>

					<div className='mb-16'>
						<h2 className='text-3xl font-semibold mb-4'>Features</h2>
						<ul className='list-disc list-inside text-gray-700 leading-relaxed'>
							<li>Add new pantry items easily.</li>
							<li>Delete items you no longer need.</li>
							<li>Edit existing items for accurate tracking.</li>
							<li>Search for items quickly to find what you need.</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer/>
		</main>
			
		</>
	
	);
};

export default About;
