

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 pb-4'>
				<div className='flex flex-col md:flex-row justify-between items-center'>
					<div className='mb-8 md:mb-0'>
						<h2 className='footer-head'>Pantrify</h2>
					</div>
					<div className='text-center md:text-right'>
						<h2 className='lg:text-lg font-semibold mb-4'>Contact Us</h2>
						<ul>
							<li className='mb-2'>
								<a href='mailto:info@example.com' className='hover:text-white'>
									Pantrify@example.com
								</a>
							</li>
							<li className='mb-2'>
								<a href='tel:+1234567890' className='hover:text-white'>
									+123 456 7890
								</a>
							</li>
							<li className='mb-2'>
								<address className='not-italic'>Lagos, Nigeria</address>
							</li>
						</ul>
						<ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4'>
							<li>
								<a href='#' className='hover:text-white'>
									Privacy Policy
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white'>
									Terms of Service
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white'>
									FAQ
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='flex justify-center items-center bg-black p-4'>
				<p className='mt-4 md:mt-0'>
					&copy; 2024 pantrify. All rights reserved. Coded and Built by{' '}
					<a href='https://github.com/ijayhub' className="cursor-pointer border-b-2 border-white">Ijeoma</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
