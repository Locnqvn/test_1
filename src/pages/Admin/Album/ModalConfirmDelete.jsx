import {Modal} from 'antd';
import album from '../../../api/album';

const confirmation = ({isShowModal, setIsShowModal, indexOfRecord, data, deleteAlbum}) => {

    const handleOk = () => {
        setIsShowModal(false);
        deleteAlbum(data[indexOfRecord]._id);
    }

    const handleCancel = () => {
        setIsShowModal(false);
    }

    return (
        <Modal
            title="Confirm Delete"
            visible={isShowModal}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <h1>Are you sure about that ?</h1>
        </Modal>
    )
}

export default confirmation;