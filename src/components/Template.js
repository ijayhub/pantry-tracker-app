import React from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { FcEditImage } from 'react-icons/fc';

const Template = ({
	items,
	deleteItem,
	updateItem,
	editedItem,
	handleEditChange,
	startEditing,
}) => {
	return (
		<div className='overflow-auto'>
			{items.length === 0 ? (
				<p>No items found in the pantry.</p>
			) : (
				items.map((item) => (
					<div
						key={item.id}
						className='mb-4 p-4 border rounded-md shadow-md bg-white'>
						<div className='overflow-x-auto'>
							<table className='min-w-full divide-y divide-gray-200'>
								<thead className='bg-gray-200'>
									<tr className='text-left text-gray-700'>
										<th className='p-2'>Name of Item</th>
										<th className='p-2'>Category</th>
										<th className='p-2'>Quantity</th>
										<th className='p-2'>Unit</th>
										<th className='p-2'>Expiration</th>
										<th className='p-2'>Storage</th>
										<th className='p-2'>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr className='border-b'>
										<td className='p-2'>
											{editedItem.id === item.id ? (
												<input
													name='name'
													value={editedItem.fields.name}
													onChange={handleEditChange}
													className='input-field w-full border border-gray-300 rounded-md p-1'
												/>
											) : (
												item.name
											)}
										</td>
										<td className='p-2'>
											{editedItem.id === item.id ? (
												<input
													name='category'
													value={editedItem.fields.category}
													onChange={handleEditChange}
													className='input-field w-full border border-gray-300 rounded-md p-1'
												/>
											) : (
												item.category
											)}
										</td>
										<td className='p-2'>
											{editedItem.id === item.id ? (
												<input
													name='quantity'
													value={editedItem.fields.quantity}
													onChange={handleEditChange}
													className='input-field w-full border border-gray-300 rounded-md p-1'
												/>
											) : (
												item.quantity
											)}
										</td>
										<td className='p-2'>
											{editedItem.id === item.id ? (
												<input
													name='unit'
													value={editedItem.fields.unit}
													onChange={handleEditChange}
													className='input-field w-full border border-gray-300 rounded-md p-1'
												/>
											) : (
												item.unit
											)}
										</td>
										<td className='p-2'>
											{editedItem.id === item.id ? (
												<input
													name='expiration'
													value={editedItem.fields.expiration}
													onChange={handleEditChange}
													className='input-field w-full border border-gray-300 rounded-md p-1'
												/>
											) : (
												item.expiration
											)}
										</td>
										<td className='p-2'>
											{editedItem.id === item.id ? (
												<input
													name='storage'
													value={editedItem.fields.storage}
													onChange={handleEditChange}
													className='input-field w-full border border-gray-300 rounded-md p-1'
												/>
											) : (
												item.storage
											)}
										</td>
										<td className='p-2'>
											<div className='flex items-center justify-around'>
												{editedItem.id === item.id ? (
													<button
														className='templateBtn1'
														onClick={() => updateItem(item.id)}>
														Save
													</button>
												) : (
													<button
														className='templateBtn1'
														onClick={() => startEditing(item)}>
														<FcEditImage className='inline mr-1' />
														Edit
													</button>
												)}
												<button
													className='templateBtn2'
													onClick={() => deleteItem(item.id)}>
													<FaTrashCan className='inline mr-1' />
													Delete
												</button>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				))
			)}
		</div>
	);
};

export default Template;
