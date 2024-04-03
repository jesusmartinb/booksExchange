import { imageOutline, personCircleOutline } from 'ionicons/icons';
import { Option } from './Option';
import './MenuOptions.css';


export function MenuOptions() {

    const openCamera = () => {
        console.log('open camera');
    }

    const openChangeName = () => {
        console.log('open change name');
    }

  return (
    <>
        <div className="menu-options-container">
            <Option title="Cambiar avatar" icon={imageOutline} onClick={openCamera} />
            <Option title="Cambiar nombre" icon={personCircleOutline} onClick={openChangeName} />
        </div>
    </>
  )
}
