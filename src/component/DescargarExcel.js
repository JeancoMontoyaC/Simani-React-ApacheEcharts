import React from 'react';
import * as XLSX from 'xlsx';


const DescargarExcel = ({ contenidoExcel, nombreArchivo }) => {
    const descargarExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(contenidoExcel.datos);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, `${nombreArchivo}.xlsx`);
    };

    return (
        <div>
            <button onClick={descargarExcel}>Descargar Excel</button>
        </div>
    );
};


export default DescargarExcel;
