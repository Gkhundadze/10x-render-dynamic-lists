const slides = [
  {
    title: "Session 4: Rendering Lists & Using Keys",
    content: [
      "📌 Prerequisites: JavaScript Arrays, JSX, Components",
      "🎯 Goals:",
      [
        "Render dynamic lists using .map()",
        "Understand and apply React keys",
        "Create reusable components dynamically",
        "Handle empty states with conditional rendering",
        "Use arrays as state and update them immutably"
      ],
      {
        type: "highlight",
        content: "Today we'll make React apps dynamic by rendering lists from arrays!"
      }
    ],
    script: "Welcome everyone! Today we'll learn how to make React apps dynamic by rendering lists from arrays. We'll explore the .map() method, the importance of keys in lists, how to create reusable components dynamically, and how to handle empty states with conditional rendering. Finally, we'll touch on using arrays as state and updating them. Let's dive in!"
  },

  {
    title: "Why .map()?",
    content: [
      "In React, .map() is a powerful JavaScript array method that helps us convert data arrays into arrays of JSX elements.",
      {
        type: "comparison",
        before: {
          title: "❌ Hardcoded (Static)",
          content: {
            type: "code",
            code: `function FruitList() {
  return (
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Orange</li>
    </ul>
  );
}`
          }
        },
        after: {
          title: "✅ Dynamic with .map()",
          content: {
            type: "code",
            code: `function FruitList() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}`
          }
        }
      },
      [
        "✨ Scalable and maintainable",
        "🔄 Dynamic based on data",
        "📝 Clean and declarative code"
      ]
    ],
    script: "In React, .map() is a powerful JavaScript array method that helps us convert data arrays into arrays of JSX elements. Instead of hardcoding UI elements one by one, we can dynamically generate them based on data. This makes our components scalable and easier to maintain. Using .map() keeps our code clean and declarative — we say what the UI should look like based on data, rather than manually manipulating the DOM."
  },

  {
    title: "List Rendering in Action",
    content: [
      "Here's a simple example: we have an array of fruits. Using .map(), we iterate over this array and return a <li> element for each fruit.",
      {
        type: "code",
        code: `function FruitList() {
  const fruits = ['Apple', 'Banana', 'Orange', 'Grape'];
  
  return (
    <div>
      <h2>My Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}`
      },
      {
        type: "demo",
        name: "fruit-list"
      },
      [
        "🔑 Notice the key prop - important for React's efficiency",
        "🔄 Each fruit becomes a <li> element",
        "📊 Minimal code generates a full list from data"
      ]
    ],
    script: "Here's a simple example: we have an array of fruits. Using .map(), we iterate over this array and return a <li> element for each fruit. Notice that we assign a key prop, which is important for React to keep track of each element efficiently. This small code block generates a full list from our data with minimal effort."
  },

  {
    title: "Inside vs Before return",
    content: [
      "You can place the .map() logic in different locations depending on complexity.",
      {
        type: "comparison",
        before: {
          title: "Inside JSX (Simple)",
          content: {
            type: "code",
            code: `function UserList({ users }) {
  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}`
          }
        },
        after: {
          title: "Before Return (Complex)",
          content: {
            type: "code",
            code: `function UserList({ users }) {
  const userElements = users.map(user => (
    <div key={user.id} className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <span>{user.role}</span>
    </div>
  ));
  
  return (
    <div>
      <h2>Users ({users.length})</h2>
      <div className="user-grid">
        {userElements}
      </div>
    </div>
  );
}`
          }
        }
      },
      "Choose based on complexity and readability!"
    ],
    script: "You can place the .map() logic directly inside the JSX return statement, which is common and clean for simple cases. Alternatively, for more complex processing, you can do the mapping before the return — store the JSX elements in a variable, and then insert that variable inside the return. Both approaches are valid; choosing depends on complexity and readability."
  },

  {
    title: "Why Keys Matter",
    content: [
      "Keys are crucial for React's reconciliation algorithm. They help React identify which items have changed, been added, or removed.",
      {
        type: "code",
        code: `// React uses keys to efficiently update the DOM
const todoItems = todos.map(todo => (
  <TodoItem 
    key={todo.id}  // Unique identifier
    todo={todo}
    onToggle={handleToggle}
    onDelete={handleDelete}
  />
));`
      },
      [
        "🔍 Help React track changes efficiently",
        "⚡ Prevent unnecessary re-renders",
        "🎯 Must be unique among siblings",
        "🐛 Without keys, React may behave unpredictably"
      ],
      {
        type: "highlight",
        content: "Keys enable React to update only what actually changed, not the entire list!"
      }
    ],
    script: "Keys are crucial for React's reconciliation algorithm. They help React identify which items have changed, been added, or removed, so it can update the UI efficiently without re-rendering the entire list. Keys must be unique among siblings to avoid bugs and performance issues. Without keys, React may behave unpredictably."
  },

  {
    title: "Avoid Using Index as Key",
    content: [
      "Sometimes developers use array indices as keys because they're easy. But this is discouraged!",
      {
        type: "comparison",
        before: {
          title: "❌ Bad: Using Index",
          content: {
            type: "code",
            code: `// Problems when items reorder/insert/delete
{items.map((item, index) => (
  <Item key={index} item={item} />
))}

// What happens when we delete item 1?
// Index 0: Item A ✓
// Index 1: Item C (was Item B!) ❌ 
// Index 2: Item D (was Item C!) ❌`
          }
        },
        after: {
          title: "✅ Good: Using Unique ID",
          content: {
            type: "code",
            code: `// Stable keys that don't change
{items.map(item => (
  <Item key={item.id} item={item} />
))}

// After deleting item with id: 2
// Key 1: Item A ✓
// Key 3: Item C ✓ (correctly identified)
// Key 4: Item D ✓ (correctly identified)`
          }
        }
      },
      "🚨 Using indices can cause bugs like incorrect DOM updates or losing component state!"
    ],
    script: "Sometimes developers use array indices as keys because they're easy. But this is discouraged, especially if list items can reorder, insert, or delete. Using indices can cause React to confuse elements, leading to bugs like incorrect DOM updates or losing component state. It's better to use a unique identifier from the data when possible."
  },

  {
    title: "Dynamic Component Rendering",
    content: [
      "To keep code modular and maintainable, create reusable components for list items.",
      {
        type: "code",
        code: `// Reusable Fruit component
function Fruit({ name, color, emoji }) {
  return (
    <div className="fruit-card">
      <span className="emoji">{emoji}</span>
      <h3>{name}</h3>
      <p style={{ color }}>{color}</p>
    </div>
  );
}

// Using the reusable component
function FruitGarden() {
  const fruits = [
    { id: 1, name: 'Apple', color: 'red', emoji: '🍎' },
    { id: 2, name: 'Banana', color: 'yellow', emoji: '🍌' },
    { id: 3, name: 'Orange', color: 'orange', emoji: '🍊' }
  ];
  
  return (
    <div className="fruit-garden">
      {fruits.map(fruit => (
        <Fruit 
          key={fruit.id}
          name={fruit.name}
          color={fruit.color}
          emoji={fruit.emoji}
        />
      ))}
    </div>
  );
}`
      },
      {
        type: "demo",
        name: "fruit-cards"
      }
    ],
    script: "To keep code modular and maintainable, create reusable components for list items. Here, Fruit is a simple component receiving name as a prop. We then map over the data array and render a Fruit component for each element, passing the fruit name and unique key. This approach scales well as components grow more complex."
  },

  {
    title: "Conditional Rendering: Ternary",
    content: [
      "What if the list is empty? We don't want to render an empty list. Use conditional rendering!",
      {
        type: "code",
        code: `function ShoppingList({ items }) {
  return (
    <div>
      <h2>Shopping List</h2>
      {items.length > 0 ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} - \${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your shopping list is empty. Add some items!</p>
      )}
    </div>
  );
}

// Usage examples:
// <ShoppingList items={[]} />  → Shows "empty" message
// <ShoppingList items={products} />  → Shows the list`
      },
      {
        type: "demo",
        name: "conditional-list"
      },
      "✨ This improves user experience by providing meaningful feedback!"
    ],
    script: "What if the list is empty? We don't want to render an empty list. Using a ternary operator, we can check if the array has elements. If yes, render the list; if not, display a fallback message like 'No fruits available.' This improves user experience by providing meaningful feedback."
  },

  {
    title: "Conditional Rendering: &&",
    content: [
      "A cleaner alternative for simple conditions is using the logical AND (&&) operator.",
      {
        type: "comparison",
        before: {
          title: "Ternary Operator",
          content: {
            type: "code",
            code: `function NotificationList({ notifications }) {
  return (
    <div>
      {notifications.length > 0 ? (
        <div>
          {notifications.map(note => (
            <div key={note.id}>{note.message}</div>
          ))}
        </div>
      ) : (
        <p>No notifications</p>
      )}
    </div>
  );
}`
          }
        },
        after: {
          title: "Logical AND (&&)",
          content: {
            type: "code",
            code: `function NotificationList({ notifications }) {
  return (
    <div>
      {!notifications.length && (
        <p>No notifications</p>
      )}
      {notifications.length > 0 && (
        <div>
          {notifications.map(note => (
            <div key={note.id}>{note.message}</div>
          ))}
        </div>
      )}
    </div>
  );
}`
          }
        }
      },
      "💡 Use && for simple show/hide logic, ternary for either/or scenarios."
    ],
    script: "A cleaner alternative for simple conditions is using the logical AND (&&) operator. Here, if the fruits array is empty (!fruits.length is true), the fallback paragraph renders. If the array has elements, nothing renders from this expression. This one-liner is concise and readable."
  },

  {
    title: "Using Arrays in State",
    content: [
      "React's useState hook supports arrays as state values. This enables dynamic UIs where items can be added, removed, or updated.",
      {
        type: "code",
        code: `import { useState } from 'react';

function TodoApp() {
  // Array as state
  const [tasks, setTasks] = useState([
    'Learn React',
    'Build a project',
    'Deploy to production'
  ]);
  
  const [inputValue, setInputValue] = useState('');
  
  return (
    <div>
      <h2>My Tasks ({tasks.length})</h2>
      
      <input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}`
      },
      {
        type: "demo",
        name: "todo-basic"
      }
    ],
    script: "React's useState hook supports arrays as state values. Here, tasks is an array of strings representing to-do items. Managing lists in state enables dynamic UIs where items can be added, removed, or updated, triggering automatic re-renders."
  },

  {
    title: "Add and Remove Items",
    content: [
      "To modify arrays in state, create new arrays rather than mutating existing ones.",
      {
        type: "code",
        code: `function TodoApp() {
  const [tasks, setTasks] = useState(['Learn React']);
  const [inputValue, setInputValue] = useState('');
  
  // ✅ Add item - create new array
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);  // Spread existing + new
      setInputValue('');
    }
  };
  
  // ✅ Remove item - create new array
  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };
  
  return (
    <div>
      <input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTask()}
      />
      <button onClick={addTask}>Add Task</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`
      },
      {
        type: "demo",
        name: "todo-interactive"
      },
      "🚨 Never mutate state directly! Always create new arrays to trigger re-renders."
    ],
    script: "To add items, we create a new array by spreading the existing tasks and appending the new one. To remove, we filter out the unwanted item, creating a new array without it. This immutable update pattern is critical because React relies on detecting new array references to trigger UI updates. Never mutate state directly!"
  },

  {
    title: "Recap & Best Practices",
    content: [
      "🎯 Key Takeaways:",
      [
        "✅ Use .map() to render lists dynamically",
        "🔑 Always provide unique keys, avoid indexes if possible",
        "🧩 Build reusable components to keep code clean",
        "❓ Handle empty states with conditional rendering",
        "🔄 Update array state immutably to ensure reactivity"
      ],
      {
        type: "highlight",
        content: "Mastering these patterns will make your React apps scalable, performant, and easier to maintain!"
      },
      {
        type: "code",
        code: `// The React list rendering pattern
function MyComponent({ items }) {
  return (
    <div>
      {items.length > 0 ? (
        <ul>
          {items.map(item => (
            <ReusableItem 
              key={item.id}  // Unique key
              item={item}
            />
          ))}
        </ul>
      ) : (
        <p>No items to display</p>  // Empty state
      )}
    </div>
  );
}`
      },
      "➡️ Up next: Handling forms and controlled inputs"
    ],
    script: "To wrap up, remember: Use .map() to render lists dynamically. Always provide unique keys, avoid indexes if possible. Build reusable components to keep code clean. Handle empty states with conditional rendering. Update array state immutably to ensure reactivity. Mastering these will make your React apps scalable, performant, and easier to maintain."
  }
];

export default slides;