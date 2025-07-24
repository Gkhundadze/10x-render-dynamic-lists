import { useState } from 'react'

// Fruit List Demo
function FruitListDemo() {
  const fruits = ['Apple', 'Banana', 'Orange', 'Grape']
  
  return (
    <div className="demo-container">
      <h4>Live Fruit List</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {fruits.map((fruit, index) => (
          <li key={index} style={{ 
            padding: '8px 12px', 
            margin: '5px 0', 
            background: '#f0f8ff', 
            borderRadius: '4px',
            border: '1px solid #e0e0e0'
          }}>
            🍎 {fruit}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Fruit Cards Demo
function FruitCardsDemo() {
  const fruits = [
    { id: 1, name: 'Apple', color: 'red', emoji: '🍎' },
    { id: 2, name: 'Banana', color: 'gold', emoji: '🍌' },
    { id: 3, name: 'Orange', color: 'orange', emoji: '🍊' }
  ]
  
  return (
    <div className="demo-container">
      <h4>Reusable Fruit Components</h4>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {fruits.map(fruit => (
          <div key={fruit.id} style={{
            padding: '15px',
            background: 'white',
            borderRadius: '8px',
            border: '2px solid #e0e0e0',
            textAlign: 'center',
            minWidth: '100px'
          }}>
            <div style={{ fontSize: '2rem' }}>{fruit.emoji}</div>
            <h4>{fruit.name}</h4>
            <p style={{ color: fruit.color, fontSize: '0.9rem' }}>{fruit.color}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Conditional List Demo
function ConditionalListDemo() {
  const [items, setItems] = useState([])
  
  const sampleItems = [
    { id: 1, name: 'Milk', price: 3.99 },
    { id: 2, name: 'Bread', price: 2.49 },
    { id: 3, name: 'Eggs', price: 4.99 }
  ]
  
  const toggleItems = () => {
    setItems(items.length > 0 ? [] : sampleItems)
  }
  
  return (
    <div className="demo-container">
      <h4>Conditional Rendering Demo</h4>
      <div style={{ marginBottom: '15px' }}>
        <button 
          onClick={toggleItems}
          style={{ 
            padding: '8px 16px', 
            background: '#667eea', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            marginRight: '10px'
          }}
        >
          {items.length > 0 ? 'Clear Items' : 'Add Items'}
        </button>
      </div>
      
      <div style={{ minHeight: '100px', padding: '10px', background: '#f9f9f9', borderRadius: '4px' }}>
        <h5>Shopping List</h5>
        {items.length > 0 ? (
          <ul>
            {items.map(item => (
              <li key={item.id} style={{ marginBottom: '5px' }}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            Your shopping list is empty. Add some items!
          </p>
        )}
      </div>
    </div>
  )
}

// Basic Todo Demo
function BasicTodoDemo() {
  const [tasks] = useState([
    'Learn React',
    'Build a project', 
    'Deploy to production'
  ])
  
  return (
    <div className="demo-container">
      <h4>Tasks Array in State</h4>
      <p>My Tasks ({tasks.length})</p>
      <ul style={{ marginTop: '10px' }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ 
            padding: '5px 0', 
            borderBottom: '1px solid #eee' 
          }}>
            ✓ {task}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Interactive Todo Demo
function InteractiveTodoDemo() {
  const [tasks, setTasks] = useState(['Learn React Lists'])
  const [inputValue, setInputValue] = useState('')
  
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue])
      setInputValue('')
    }
  }
  
  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove))
  }
  
  return (
    <div className="demo-container">
      <h4>Interactive Todo List</h4>
      <div style={{ marginBottom: '15px' }}>
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new task..."
          style={{ 
            padding: '8px', 
            marginRight: '10px', 
            width: '200px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <button 
          onClick={addTask}
          style={{ 
            padding: '8px 16px', 
            background: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Task
        </button>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '8px 12px', 
            margin: '5px 0', 
            background: '#f8f9fa', 
            borderRadius: '4px',
            border: '1px solid #e9ecef'
          }}>
            <span>{task}</span>
            <button 
              onClick={() => removeTask(index)}
              style={{ 
                padding: '4px 8px', 
                background: '#dc3545', 
                color: 'white', 
                border: 'none', 
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function InteractiveDemo({ demo }) {
  switch (demo.name) {
    case 'fruit-list':
      return <FruitListDemo />
    case 'fruit-cards':
      return <FruitCardsDemo />
    case 'conditional-list':
      return <ConditionalListDemo />
    case 'todo-basic':
      return <BasicTodoDemo />
    case 'todo-interactive':
      return <InteractiveTodoDemo />
    default:
      return (
        <div className="demo-container">
          <p>Demo: {demo.name}</p>
        </div>
      )
  }
}

export default InteractiveDemo