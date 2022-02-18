import './sidebar.css';
import React, { useEffect, useState } from 'react';
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
  const { data, selectedGroup, setSelectedGroup } = props;
  const [input, setInput] = useState('');
  const [warning, setWarning] = useState('');

  useEffect(() => {}, [selectedGroup]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onGroupAdd = () => {
    if (input) {
      if (data.addGroup({ id: uniqid(), name: input })) {
        setInput('');
      } else {
        setWarning('This group already exists!');
      }
    } else {
      setWarning('Group name cannot be blank!');
    }
  };

  const onDelete = (id) => {
    data.removeGroup(id);
    setSelectedGroup('');
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
      {!!warning ? <p className="warning"> {warning}</p> : null}
      <button className="create-group" onClick={onGroupAdd}>
        Create New Group
      </button>
      <button
        className="show-all"
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
              data={data}
              group={group}
              onDelete={onDelete}
              selectedGroup={selectedGroup}
              onGroupClick={onGroupClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

/**
 * Group data format
 * {id, name}
 */

const Group = (props) => {
  const { data, group, onDelete, onGroupClick, selectedGroup } = props;
  return (
    <div
      onClick={() => {
        onGroupClick(group.name);
      }}
      key={group.id}
      className={`group ${selectedGroup === group.name ? 'selected' : ''}`}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        const taskid = e.dataTransfer.getData('taskid');
        data.setTaskGroup(taskid, group.name);
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
