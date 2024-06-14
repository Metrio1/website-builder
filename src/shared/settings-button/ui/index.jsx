import './index.scss';
import { Button, Flex } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

export default function SettingsButton({ setSidebarContent, tagType }) {
  const [size, setSize] = useState('large');
  const handleClick = () => {
    setSidebarContent(tagType);
  };

  return (
    <Button
      size={size}
      className="content-customization__main__sidebar-container__list-container__wrapper__choose-block__btn-set"
      onClick={() => handleClick()}
    >
      <SettingOutlined />
    </Button>
  );
}
