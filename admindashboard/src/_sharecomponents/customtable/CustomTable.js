import React from 'react';
import { MdEdit, MdOutlineDeleteForever } from 'react-icons/md'
import './CustomTable.css'
function CustomTable(props) {
    const { listGroupGet, _onHandleClickEdit, _onHandleClickDelete } = props

    const _handleClickEdit = (group) => {
        _onHandleClickEdit(group)
    }

    const _handleClickDelete = (id) => {
        _onHandleClickDelete(id)

    }
    return (
        <div className='table'>
            <table>
                <tbody>

                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Created Date</th>
                        <th>Total Member</th>
                        <th></th>
                    </tr>

                    {listGroupGet.map((group, key) => {
                        return (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{group.id}</td>
                                <td>{group.name}</td>
                                <td>{group.type}</td>
                                <td>{group.createdAt}</td>
                                <td>{group.totalMember}</td>
                                <td>
                                    <MdEdit fontSize="1.2rem"
                                        style={{ marginRight: '10px', cursor: 'pointer' }}
                                        onClick={() => _handleClickEdit(group)}
                                    />
                                    <MdOutlineDeleteForever fontSize="1.2rem"
                                        style={{ marginLeft: '10px', cursor: 'pointer' }}
                                        onClick={() => _handleClickDelete(group.id)}
                                    />
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    );
}

export default CustomTable;