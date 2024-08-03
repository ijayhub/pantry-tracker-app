'use client';

import { useEffect, useState } from 'react';
import { db } from '../../../config/firebase';
import {
	getDocs,
	collection,
	query,
	where,
	deleteDoc,
	doc,
	updateDoc,
} from 'firebase/firestore';
import Navbar from '../../components/Navbar';
import Template from '../../components/Template';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

const Home = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [editedItem, setEditedItem] = useState({ id: null, fields: {} });

	const pantryCollectionRef = collection(db, 'pantry-items');

	useEffect(() => {
		const getItems = async () => {
			try {
				const data = await getDocs(pantryCollectionRef);
				const itemsList = data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));
				setItems(itemsList);
			} catch (err) {
				setError('Failed to fetch items.');
				console.error('Error fetching items:', err);
			} finally {
				setLoading(false);
			}
		};

		getItems();
	}, []);

	const deleteItem = async (id) => {
		try {
			const itemRef = doc(db, 'pantry-items', id);
			await deleteDoc(itemRef);
			setItems((prevItems) => prevItems.filter((item) => item.id !== id));
			alert('Item deleted successfully!');
		} catch (err) {
			console.error('Error deleting item:', err);
		}
	};

	const updateItem = async (id) => {
		const itemRef = doc(db, 'pantry-items', id);
		await updateDoc(itemRef, editedItem.fields);
		setItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, ...editedItem.fields } : item
			)
		);
		setEditedItem({ id: null, fields: {} });
	};

	const handleEditChange = (e) => {
		const { name, value } = e.target;
		setEditedItem((prev) => ({
			...prev,
			fields: {
				...prev.fields,
				[name]: value,
			},
		}));
	};

	const startEditing = (item) => {
		setEditedItem({ id: item.id, fields: { ...item } });
	};

	const searchItems = async (searchTerm) => {
		setLoading(true);
		setError(null);
		try {
			const q = query(
				pantryCollectionRef,
				where('name', '>=', searchTerm),
				where('name', '<=', searchTerm + '\uf8ff')
			);
			const data = await getDocs(q);
			const itemsList = data.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setItems(itemsList);
		} catch (err) {
			setError('Failed to search items.');
			console.error('Error searching items:', err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Navbar />
			<main>
				<div className='hero'>
					<div className='overlay'>
						<h2 className='hero-text'>Welcome to Pantrify Tracker</h2>
						<p className='hero-para'>Manage your pantry efficiently</p>
						<Input searchItems={searchItems} />
					</div>
				</div>
				<div className='max-w-5xl mx-auto p-4'>
					<h2 className='TemplateHeading'>Items We Have At Pantry</h2>
					{loading ? (
						<p className='lg:text-2xl font-bold'>Loading...</p>
					) : error ? (
						<p className='text-red-700 font-bold text-2xl'>{error}</p>
					) : (
						<Template
							items={items}
							deleteItem={deleteItem}
							updateItem={updateItem}
							editedItem={editedItem}
							handleEditChange={handleEditChange}
							startEditing={startEditing}
						/>
					)}
				</div>
				<Footer />
			</main>
		</>
	);
};

export default Home;
