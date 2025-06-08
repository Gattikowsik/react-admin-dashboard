// src/components/Kanban/Kanban.jsx
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import './Kanban.css';

const initialData = {
  todo: ['Design homepage', 'Write blog post'],
  inProgress: ['Implement login'],
  done: ['Set up project'],
};

export default function Kanban() {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const srcCol = source.droppableId;
    const destCol = destination.droppableId;
    const srcItems = [...columns[srcCol]];
    const [moved] = srcItems.splice(source.index, 1);

    if (srcCol === destCol) {
      srcItems.splice(destination.index, 0, moved);
      setColumns({
        ...columns,
        [srcCol]: srcItems,
      });
    } else {
      const destItems = [...columns[destCol]];
      destItems.splice(destination.index, 0, moved);
      setColumns({
        ...columns,
        [srcCol]: srcItems,
        [destCol]: destItems,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanbanBoard">
        {Object.entries(columns).map(([colId, tasks]) => (
          <Droppable droppableId={colId} key={colId}>
            {(provided) => (
              <div
                className="kanbanColumn"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h3>{colId.toUpperCase()}</h3>
                {tasks.map((task, idx) => (
                  <Draggable key={task} draggableId={task} index={idx}>
                    {(draggableProvided) => (
                      <div
                        className="kanbanTask"
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        {task}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
