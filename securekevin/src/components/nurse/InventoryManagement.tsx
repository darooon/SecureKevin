
import React from 'react';
import { Clipboard, Plus, Minus } from 'lucide-react';
import { useNurseContext } from '../../context/NurseContext';

const InventoryManagement = () => {
  const { 
    inventory, 
    newInventoryItem, 
    setNewInventoryItem, 
    handleAddInventoryItem, 
    handleUpdateInventory 
  } = useNurseContext();

  return (
    <div className="card">
      <h2 className="section-title">
        <Clipboard size={16} />
        Inventory Management
      </h2>
      
      <div className="card" style={{ backgroundColor: '#f9fafb', boxShadow: 'none', marginBottom: '1.5rem' }}>
        <h3 className="section-title">Add New Item</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Item name"
            className="form-input"
            style={{ flexGrow: 1 }}
            value={newInventoryItem.name}
            onChange={(e) => setNewInventoryItem({...newInventoryItem, name: e.target.value})}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="form-input"
            style={{ width: '100px' }}
            value={newInventoryItem.quantity || ''}
            onChange={(e) => setNewInventoryItem({...newInventoryItem, quantity: parseInt(e.target.value)})}
          />
          <input
            type="number"
            placeholder="Threshold"
            className="form-input"
            style={{ width: '100px' }}
            value={newInventoryItem.threshold || ''}
            onChange={(e) => setNewInventoryItem({...newInventoryItem, threshold: parseInt(e.target.value)})}
          />
          <button 
            onClick={handleAddInventoryItem}
            className="button button-primary"
          >
            <Plus size={16} style={{ marginRight: '4px' }} />
            Add Item
          </button>
        </div>
      </div>
      
      <div>
        <h3 className="section-title">Current Inventory</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(item => (
              <tr key={item.id}>
                <td><strong>{item.name}</strong></td>
                <td>{item.quantity}</td>
                <td>
                  <span className={`badge ${item.quantity <= item.threshold ? "badge-red" : "badge-green"}`}>
                    {item.quantity <= item.threshold ? 'Low Stock' : 'In Stock'}
                  </span>
                </td>
                <td>
                  <div className="inventory-controls">
                    <button 
                      onClick={() => handleUpdateInventory(item.id, item.quantity + 1)}
                      className="button button-outline button-icon"
                    >
                      <Plus size={16} />
                    </button>
                    <button 
                      onClick={() => handleUpdateInventory(item.id, Math.max(0, item.quantity - 1))}
                      className="button button-outline button-icon"
                    >
                      <Minus size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryManagement;
