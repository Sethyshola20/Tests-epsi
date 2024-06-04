"use client"

import { useState } from "react";
import { Form } from "./components/Form";

export default function Home() {
  const [list, setList] = useState([])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form setList={setList}/>
      <ul>
        {list.map((item:any, index:number) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}
