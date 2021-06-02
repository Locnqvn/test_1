import {Modal} from 'antd';
import singerAPI from '../../../api/singer';


const confirmation = ({isShowModal, setIsShowModal, indexOfRecord, data, deleteSinger}) => {

    const handleOk = () => {
        setIsShowModal(false);
        
        deleteSinger(data[indexOfRecord]._id);
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