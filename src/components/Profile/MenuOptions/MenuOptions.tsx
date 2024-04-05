import { imageOutline, personCircleOutline } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useUser } from '../../../hooks';
import { Option } from './Option';
import './MenuOptions.css';


export function MenuOptions() {

    const { onChangeAvatar } = useUser();

    const openCamera = async () => {
        const response = await Camera.getPhoto({
            quality: 100,
            resultType: CameraResultType.Uri,
            allowEditing: true,
        });

        if (response.webPath) {
            onChangeAvatar(response.webPath);
        }
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
