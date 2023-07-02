import React, { useState } from 'react';
import dummyData from './data';

const TableTab = () => {

    const [tableData, setTableData] = useState(dummyData);

    const seeFullText = (data, key) => {
        // console.log(data);

        let tableDataClone = [...tableData];
        let targetRow = tableDataClone[key]
        targetRow.fullText = true;

        setTableData(tableDataClone);
    };

    const seeLessText = (key) => {
        // console.log(key);

        let tableDataClone = [...tableData];
        let targetRow = tableDataClone[key];
        targetRow.fullText = false;
        setTableData(tableDataClone);
    };

    return (
        <>
            <h1> Table Data! </h1>

            <table border={'1'}>
                <tr>
                    <th> Company Id </th>
                    <th> Company Name </th>
                    <th> Company Description </th>
                    <th> Total Employees </th>
                    <th> Location </th>
                </tr>

                {
                    tableData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td> {item.id} </td>
                                <td> {item.companyName} </td>
                                <td>

                                    {
                                        (item.description.length > 10)
                                            ?
                                            (!item.fullText ?
                                                <>
                                                    {item.description.slice(0, 10) + "..."}
                                                    <a href='#' onClick={() => seeFullText(item, index)}> see more </a>
                                                </>
                                                :
                                                <>
                                                    {item.description} <a href='#' onClick={() => seeLessText(index)}> see less </a>
                                                </>
                                            )
                                            :
                                            (item.description)
                                    }
                                </td>
                                <td> {item.employees} </td>
                                <td> {item.companyLocation} </td>
                            </tr>
                        );
                    })
                }
            </table>
        </>
    );
};

export default TableTab;