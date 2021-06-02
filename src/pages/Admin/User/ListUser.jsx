import React, { useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { EditOutlined , DeleteOutlined} from "@ant-design/icons"

const ListUser = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name > b.name,
                multiple: 6,
            }

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: {
                compare: (a, b) => a.email > b.email,
                multiple: 5,
            },
        },
        {
            title: 'IsVip',
            dataIndex: 'isVip',
            key: 'isVip',
            filters: [
                { text: 'true', value: 'true' },
                { text: 'false', value: 'false' },
            ],
            onFilter: (value, record) => record.isVip.includes(value)
        },
        {
            title: 'CreatedAt',
            dataIndex: 'createdAt',
            key: 'createAt',
            sorter: {
                compare: (a, b) => a.createdAt > b.createdAt,
                multiple: 4,
            },
        },
        {
            title: 'ModifiedAt',
            dataIndex: 'modifiedAt',
            key: 'modifiedAt',
            sorter: {
                compare: (a, b) => a.modifiedAt > b.modifiedAt,
                multiple: 3,
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <DeleteOutlined />
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            email: 'John@gmail.com',
            isVip: "true",
            createdAt: '11-29-2020',
            modifiedAt: '11-30-2020'
        },
        {
            key: '2',
            name: 'John Brown',
            email: 'John@gmail.com',
            isVip: "true",
            createdAt: '11-29-2020',
            modifiedAt: '11-30-2020'
        },
        {
            key: '3',
            name: 'John Brown',
            email: 'John@gmail.com',
            isVip: "true",
            createdAt: '11-29-2020',
            modifiedAt: '11-30-2020'
        },
        {
            key: '4',
            name: 'John Brown',
            email: 'John@gmail.com',
            isVip: "true",
            createdAt: '11-29-2020',
            modifiedAt: '11-30-2020'
        },
        {
            key: '5',
            name: 'John Brown',
            email: 'John@gmail.com',
            isVip: "true",
            createdAt: '11-29-2020',
            modifiedAt: '11-30-2020'
        },
        {
            key: '6',
            name: 'John Brown',
            email: 'John@gmail.com',
            isVip: "true",
            createdAt: '11-29-2020',
            modifiedAt: '11-30-2020'
        }
    ];
    return (<div>
        <h1>this is User component</h1>
        <Table columns={columns} dataSource={data} />
    </div>);
}

export default ListUser;