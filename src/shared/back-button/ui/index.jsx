import './index.scss';
import { Button, Flex } from 'antd';
import React from 'react';

export default function BackButton({ setSidebarContent }) {
    const handleClick = () => {
        setSidebarContent(null);
    };

    return (

        <Button

            onClick={() => handleClick()}
        >
            Вернуться
        </Button>
    );
}
