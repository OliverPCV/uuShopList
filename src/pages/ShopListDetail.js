import React, { useState, useRef } from 'react';
import '../styles/ShopListDetail.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

const Items = [
    'Rice',
    'Pasta',
    'Cucumbers',
    'Carrots',
    'Spinach',
    'Salmon',
    'Tuna',
    'Avocado',
    'Lettuce',
    'Oranges',
    'Strawberries',
    'Grapes',
    'Pineapple',
    'Peanut Butter',
    'Jelly',
    'Bacon',
    'Sausages',
    'Yogurt',
    'Ice Cream',
    'Vodka 42',
];

function generateUniqueID() {
    return Math.random().toString(36).substr(2, 9);
}

function ShoppingListApp() {
    const [items, setItems] = useState([]);
    const [listName, setListName] = useState('Shopping List');
    const [selectedItems, setSelectedFood] = useState('');
    const [itemCount, setFoodQuantity] = useState(1);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState('');
    const [filter, setFilter] = useState('all');

    const userCounter = useRef(0);

    const navigate = useNavigate();

    const addItem = () => {
        if (selectedItems && !items.some((item) => item.food === selectedItems)) {
            const newItem = {
                food: selectedItems,
                quantity: itemCount,
                completed: false,
            };
            setItems([...items, newItem]);
            setSelectedFood('');
        }
    };

    const removeItem = (index) => {
        const updatedItemList = items.filter((item) => item.food !== index);
        setItems(updatedItemList);
    };

    const itemStatus = (index) => {
        const checkedItemList = [...items];
        const checkedItem = checkedItemList.find((item) => item.food === index);
        if (checkedItem) {
            checkedItem.completed = !checkedItem.completed;
            setItems(checkedItemList);
        }
    };

    const changeListName = (newName) => {
        setListName(newName);
    };

    const addUser = () => {
        const newUser = `User ${userCounter.current}`;
        userCounter.current++;
        setUsers([...users, newUser]);
    };

    const removeUser = (user) => {
        const updatedUsers = users.filter((u) => u !== user);
        setUsers(updatedUsers);
    };

    const switchToUser = () => {
        setCurrentUser('User');
    };

    const switchToOwner = () => {
        setCurrentUser('Owner');
    };

    const leave = () => {
        setCurrentUser('');
        navigate('/');

    };

    const filterItems = (item) => {
        if (filter === 'all') return true;
        if (filter === 'completed') return item.completed;
        if (filter === 'uncompleted') return !item.completed;
    };
    return (
        <div className="container">
            <h1 className="mt-3">{listName}</h1>
            <div className="mt-3">
                {currentUser === 'User' ? (
                    <div className='buttons'>
                        <button className="btn btn-success" onClick={switchToOwner}>
                            You'r user
                        </button>
                        <button className="btn btn-danger ml-2" onClick={leave}>
                            Leave
                        </button>
                    </div>
                ) : currentUser === 'Owner' ? (
                    <div className='buttons'>
                        <button className="btn btn-warning" onClick={switchToUser}>
                            You'r owner
                        </button>
                        <button className="btn btn-danger ml-2" onClick={leave}>
                            Leave
                        </button>
                    </div>
                ) : (
                    <div className='buttons'>
                        <button className="btn btn-success" onClick={switchToOwner}>
                            You'r user
                        </button>
                        <button className="btn btn-danger ml-2" onClick={leave}>
                            Leave
                        </button>
                    </div>
                )}
                {currentUser === 'Owner' && (
                <div className="mt-3">
                    <div className="row admin-menu">
                        <h2>Owner's menu</h2>
                        <div className="col-md-4 col-sm-6">
                            <h3>Rename List</h3>
                            <input
                                type="text"
                                className="form-control"
                                value={listName}
                                onChange={(e) => changeListName(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <h3>Add User</h3>
                            <button className="btn btn-primary mt-2" onClick={addUser}>
                                Add User
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </div>
            <div className="row mb-2">
                <div className="col-md-4 col-sm-6">
                    <select
                        className="form-control select-food"
                        value={selectedItems}
                        onChange={(e) => setSelectedFood(e.target.value)}
                    >
                        <option value="">Select food</option>
                        {Items.map((food, index) => (
                            <option key={index} value={food}>
                                {food}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-2 col-sm-3">
                    <input
                        type="number"
                        className="form-control input-quantity"
                        value={itemCount}
                        onChange={(e) => setFoodQuantity(parseInt(e.target.value))}
                        min="1"
                        max="99"
                    />
                </div>
                <div className="col-md-2 col-sm-3">
                    <button className="btn btn-primary btn-block" onClick={addItem}>
                        Add Item
                    </button>
                </div>
            </div>
            <div className="mb-2">
                <label>Filter: </label>
                <select className="form-control" onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Checked</option>
                    <option value="uncompleted">Unchecked</option>
                </select>
            </div>
            <ul className="list-group">
                <h1>Items in shopping list</h1>

                {items
                    .filter(filterItems)
                    .map((item, index) => (
                        <li key={index} className={`list-group-item ${item.completed ? 'list-group-item-success' : ''}`}>
                            <div className="list-group-box">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={item.completed}
                                        onChange={() => itemStatus(item.food)}
                                    />
                                    <label className="form-check-label">
                                        {item.quantity}x {item.food}
                                    </label>
                                </div>
                                <div className="float-right">
                                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.food)}>
                                        Remove
                                    </button>
                                </div>
                            </div>

                        </li>
                    ))}
            </ul>
            <div>
                <h1>Users</h1>
                <ul className="list-group" id="members-list">
                    {users.map((member, index) => (
                        <li key={index} className="list-group-item" id="members-list-item">
                            {member}
                            {currentUser === 'Owner' && (
                                <button className="btn btn-danger btn-sm" onClick={() => removeUser(member)}>
                                    Remove User
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            
            
            
        </div>
    );
}

export default ShoppingListApp;
