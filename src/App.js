import React, { useState } from 'react';
import { Tree, Input } from 'antd';

const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
]
const Demo = () => {
  const [value, setValue] = useState('');
  const [flag, setFlag] = useState([]);

  const renderTree = (data = []) => {
    return data.map((item) => {
      const title = (
        <span>
          {flag[item.key] ? (
            <Input
              value={value}
              onBlur={() => {
                setFlag([])
                item.title = value
              }}
              onChange={(e) => setValue(e.target.value)}
            />
          ) : (
            <span
              onClick={async () => {
                let arr = [];
                arr[item.key] = true;
                setFlag(arr);
                setValue(item.title);
              }}
            >
              {item.title}
            </span>
          )}
        </span>
      );
      if (item.children) {
        return (
          <Tree.TreeNode title={title} key={item.key}>
            {renderTree(item.children)}
          </Tree.TreeNode>
        );
      }
      return <Tree.TreeNode title={title} key={item.key} />;
    });
  };

  return (
    <Tree>{renderTree(treeData)}</Tree>
  );
};
export default Demo;
