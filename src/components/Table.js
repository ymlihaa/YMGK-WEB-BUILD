import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Table } from "antd";

const columns = [
  { title: "Ders Adı", dataIndex: "ders_Name", key: "ders_Name" },
  { title: "Öğrenci No", dataIndex: "ogr_No", key: "ogr_No" },
  { title: "Öğrenci Adı", dataIndex: "ogr_Name", key: "ogr_Name" },
  { title: "Devamsızlık Durumu", dataIndex: "dvm_State", key: "dvm_State" },
  {
    title: "Düzenle",
    dataIndex: "",
    key: "x",
    render: () => <h1>Sil</h1>
  }
];

const data = [
  {
    key: 1,
    ders_Name: "YMGK",
    ogr_No: 16541067,
    ogr_Name: "HASAN YEMLİHA KESKİN",
    dvm_State: "DEVAM DURUMU",
    dvm_Count: 3
  },
  {
    key: 2,
    ders_Name: "YMGK",
    ogr_No: 16541067,
    ogr_Name: "HASAN YEMLİHA KESKİN",
    dvm_State: "DEVAM DURUMU",
    dvm_Count: 3
  },
  {
    key: 3,
    ders_Name: "YMGK",
    ogr_No: 16541067,
    ogr_Name: "HASAN YEMLİHA KESKİN",
    dvm_State: "DEVAM DURUMU",
    dvm_Count: 3
  }
];

function Tablo() {
  return (
    <Table
      columns={columns}
      expandedRowRender={record => (
        <p style={{ margin: 0 }}>
          {record.dvm_State}: {record.dvm_Count}
        </p>
      )}
      dataSource={data}
    />
  );
}
export default Tablo;
