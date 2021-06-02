import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';

const ModalDelete = ({isShowModal, setIsShowModal, indexOfRecord, data, deleteSong}) => {
    
    const handleOk = () => {
        setIsShowModal(false);
        deleteSong(data[indexOfRecord]._id);
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
            <h3>Bạn có chắc muốn xóa bài hát này ?</h3>
        </Modal>
    )
}
 
export default ModalDelete;