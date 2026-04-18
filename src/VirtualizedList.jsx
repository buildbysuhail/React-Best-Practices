import React from 'react'
import { List } from 'react-window';
const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

function Row({ index, style }) {
    console.log(`Rendering row ${index}`);
    return (
        <div style={style}>
            {items[index]}
        </div>
    );
}


function VirtualizedList() {
  return (
    <div>
      <h2>This is a List</h2>
      {/* <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
      <List 
        rowComponent={Row}
        height={400}
        itemCount={items.length}
        itemSize={35}
      />
    </div>
  )
}

export default VirtualizedList
