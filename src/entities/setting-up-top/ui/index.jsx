import './index.scss';
import BackButton from '../../../shared/back-button/ui/index.jsx';

export default function SettingUpTop({ headerText, setSidebarContent }) {
  return (
    <div className="setting-up-top">
      <BackButton setSidebarContent={setSidebarContent} />
      <h3 className="setting-up-top__header">{headerText}</h3>
    </div>
  );
}
