import './index.scss';
import VideoUploader from '../../../entities/video-uploader/ui/index.jsx';
import React from 'react';

export default function SettingUpVideo({ setSidebarContent }) {
  const handleBack = () => {
    setSidebarContent('SettingUpMain');
  };

  return (
    <div>
      <button onClick={handleBack}>Вернуться</button>
        <h2>Настройка видео</h2>
      <VideoUploader />
    </div>
  );
}
