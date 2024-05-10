"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./globals.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { CiEdit } from "react-icons/ci";
import { BsInfoCircle } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { UploadOutlined } from "@ant-design/icons";
import { Space, Table, Tag, Button } from "antd";
import Link from "next/link";
export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState([
    {
      title: "ID",
      dataIndex: "id",
      columnWidth: "2rem"
    },
    {
      title: "Book name",
      dataIndex: "name",
      align: "center"
    },
    {
      title: "Author",
      dataIndex: "name",
      align: "center"
    },
    {
      title: "Public Year",
      dataIndex: "number",
      align: "center"
    },
    {
      title: "Operations",
      align: "center",
      render: function () {
        <div>
          <Link href={"/Showbook"}>
            <Button icon={<BsInfoCircle />} />
          </Link>
          <Link href={"/Editbook"}>
            <Button icon={<CiEdit />} />
          </Link>
          <Link href={"/Deletebook"}>
            <Button icon={<MdDeleteOutline />} />
          </Link>
        </div>;
      }
    }
  ]);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/Books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="">
      <div className="header">
        <h1 className="text-2xl text-gray-800/50 text-center">Wellcome to my liltle-Lib</h1>
        <p>Book is a shape of knowledge!</p>
      </div>
      <div className="booklist flex justify-between items-center">
        <h1 className="text-3xl my-8">Books list</h1>
        <Link href={"/addbook"}>
          <Button icon={<UploadOutlined />}>Add Book</Button>
        </Link>
      </div>
      <div>
        {loading ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: "2rem" }} />} fullscreen="true" />
        ) : (
          <Table columns={columns} dataSource={dataSource} bordered rowHoverable />
        )}
      </div>
    </div>
  );
}
