"use client"

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./globals.css";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

export default function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex justify-center">
      <h1 className="text-red-500 text-center font-bold">
        Hi there! Welcome to my Lil-lib
      </h1>
    </div>
  );
}

