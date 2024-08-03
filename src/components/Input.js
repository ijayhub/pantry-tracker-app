import { useState } from 'react';

const Input = ({ searchItems }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = () => {
		searchItems(searchTerm);
	};

	return (
		<div className='input-container'>
			<input
				type='search'
				name='search'
				id='search'
				className='input'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<button type='submit' className='btn-input' onClick={handleSearch}>
				Click to search pantry
			</button>
		</div>
	);
};

export default Input;
