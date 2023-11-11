import React, { useState } from 'react';
import '../styles/CreateList.css'

const CreateList = ({ isModalOpen, onCreate, onCancel }) => {
  const [listName, setListName] = useState('');

  const handleCreate = () => {
    onCreate(listName);
    setListName('');
  };

  return isModalOpen ? (
    <div style={{
      background: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      top: '0px',
      left: '0px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      alignItems: 'center'
    }}>
      <div style={{ background: 'white', padding: '20px', border: '1px solid #ccc', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', zIndex: 1000, maxWidth: '500px' }}>
        <h2>Create new Shopping List</h2>
        <label>
          Name:
          <input
            type="text"
            placeholder='type name'
            value={listName}
            onChange={(e) => setListName(e.target.value)}
          />
        </label>
        <div>
          <button style={{margin: '10px'}} onClick={onCancel}>Zrušit</button>
          <button style={{margin: '10px'}} onClick={handleCreate}>Vytvořit</button>

        </div>
      </div>
    </div >
  ) : null;
};

export default CreateList;
