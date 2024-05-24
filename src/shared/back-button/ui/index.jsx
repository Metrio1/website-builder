import './index.scss';
import { Button, Flex } from 'antd';
import React from 'react';

export default function BackButton({ setSidebarContent, way }) {
    const handleClick = () => {
        setSidebarContent(way);
    };

    return (

        <Button

            onClick={handleClick}
        >
            Вернуться
        </Button>
    );
}
