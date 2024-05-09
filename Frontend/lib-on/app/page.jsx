"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./globals.css";
import Spinner from "./component/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import Link from "next/link";
export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/Books")
      .then((res) => {
        setBooks(res.data);
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
        <h1 className="text-2xl text-gray-800/50 text-center">
          Wellcome to my liltle-Lib
        </h1>
        <p>Book is a shape of knowledge!</p>
      </div>
      <div className="booklist flex justify-between items-center">
        <h1 className="text-3xl my-8">Books list</h1>
      </div>
    </div>
  );
}
