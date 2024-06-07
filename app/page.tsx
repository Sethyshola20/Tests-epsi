"use client"

import React,{useState } from "react";
import { Form } from "./components/Form";
import Calculator from './components/Calculator';

export default function Home() {
  const [list, setList] = useState([])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form setList={setList}/>
      <ul className="grid grid-cols-4 gap-4 mt-4">
        {list.map((item:any, index:number) => (
          <li className="bg-gray-300 p-4 rounded" key={index}>{item.name}</li>
        ))}
      </ul>
      <br />
      <Calculator />
    </main>
  );
}
