import './sidebar.css';
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import uniqid from 'uniqid';
/**
 * Events:
 *  'group-change' : triggers when a group is added/removed
 *  'selection-change' : triggers when side bar selection changes
 * @param {} pubsub
 * @param {} storage
 * @returns
 */

const Sidebar = (props) => {
  const { data, setSelectedGroup } = props;
  const [input, setInput] = useState('');
  const onInputChange = (e) => {
    if (e.target.value) {
      setInput(e.target.value);
    }
  };

  const onGroupAdd = () => {
    data.addGroup({ id: uniqid(), name: input });
    setInput('');
  };

  const onDelete = (id) => {
    data.removeGroup(id);
  };

  const onGroupClick = (groupname) => {
    setSelectedGroup(groupname);
  };
  return (
    <div className="sidebar">
      <input
        className="sidebar-input"
        type="text"
        placeholder="Group Name"
        value={input}
        onChange={onInputChange}
      />
      <button className="show-all" onClick={onGroupAdd}>
        Create New Group
      </button>
      <button
        onClick={() => {
          setSelectedGroup('');
        }}
      >
        Show All
      </button>
      <ul className="groups">
        {data.groups.map((group) => {
          return (
            <Group
              group={group}
              onDelete={onDelete}
              onGroupClick={onGroupClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

const Group = (props) => {
  const { group, onDelete, onGroupClick } = props;
  return (
    <div
      onClick={() => {
        onGroupClick(group.name);
      }}
      key={group.id}
      className="group"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        const taskid = e.dataTransfer.getData('taskid');
        data.setTaskGroup(taskid, group.name);
        console.log(e.target);
      }}
    >
      <h5 className="group-name">{group.name}</h5>
      <MdDelete
        onClick={() => {
          onDelete(group.id);
        }}
      />
    </div>
  );
};
export default Sidebar;
