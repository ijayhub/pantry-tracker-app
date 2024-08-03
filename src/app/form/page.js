'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { db } from '../../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

const Form = () => {
	const [name, setName] = useState('');
	const [category, setCategory] = useState('');
	const [quantity, setQuantity] = useState('');
	const [unit, setUnit] = useState('');
	const [expiration, setExpiration] = useState('');
	const [storage, setStorage] = useState('');
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const pantryItem = {
				name,
				category,
				quantity: Number(quantity),
				unit,
				expiration,
				storage,
			};

			const docRef = await addDoc(collection(db, 'pantry-items'), pantryItem);
			console.log('Pantry item added with ID:', docRef.id);

			setName('');
			setCategory('');
			setQuantity('');
			setUnit('');
			setExpiration('');
			setStorage('');

			alert('Pantry item added successfully!');
			router.push('/home');
		} catch (error) {
			console.error('Error adding pantry item:', error);
			alert('Error adding pantry item. Please try again.');
		}
	};

	return (
		<div>
			<Link href='/home'>
				<button className='pantryArrow'>
					<FaArrowLeft className='ml-1' />
					Click to go Back Home
				</button>
			</Link>
			<div className='max-w-5xl mx-auto'>
				<h2 className='pantryheading'>Add Pantry Form</h2>
				<form className='formContainer' onSubmit={handleSubmit}>
					<div>
						<label className='formLabel'>Name:</label>
						<input
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className='formInput'
						/>
					</div>
					<div>
						<label className='formLabel'>Category:</label>
						<input
							type='text'
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							required
							className='formInput'
						/>
					</div>
					<div>
						<label className='formLabel'>Quantity:</label>
						<input
							type='number'
							value={quantity}
							onChange={(e) => setQuantity(e.target.value)}
							required
							className='formInput'
						/>
					</div>
					<div>
						<label className='formLabel'>Unit:</label>
						<input
							type='text'
							value={unit}
							onChange={(e) => setUnit(e.target.value)}
							required
							className='formInput'
						/>
					</div>
					<div>
						<label className='formLabel'>Expiration Year:</label>
						<input
							type='text'
							value={expiration}
							onChange={(e) => setExpiration(e.target.value)}
							required
							className='formInput'
						/>
					</div>
					<div>
						<label className='formLabel'>Storage Instructions:</label>
						<input
							type='text'
							value={storage}
							onChange={(e) => setStorage(e.target.value)}
							required
							className='formInput'
						/>
					</div>
					<button type='submit' className='pantryBtn'>
						Add Pantry Item
					</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
