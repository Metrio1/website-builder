import './index.scss';
import VideoUploader from '../../../entities/video-uploader/ui/index.jsx';
import React from 'react';
import BackButton from '../../../shared/back-button/ui/index.jsx';

export default function SettingUpVideo({ setSidebarContent }) {
  return (
    <div>
      <BackButton setSidebarContent={setSidebarContent} way={'SettingUpMain'} />
      <h2>Настройка видео</h2>
      <VideoUploader />
    </div>
  );
}
