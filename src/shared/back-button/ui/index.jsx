import './index.scss';
import { Button, Flex } from 'antd';
import React, { useState } from 'react';

export default function BackButton({ setSidebarContent, way }) {
  const [size, setSize] = useState('large');
  const handleClick = () => {
    setSidebarContent(way);
  };

  return (
    <Button size={size} onClick={handleClick}>
      Вернуться
    </Button>
  );
}
