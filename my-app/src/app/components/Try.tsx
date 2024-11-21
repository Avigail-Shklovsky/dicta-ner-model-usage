'use client'
import { useState, FormEvent } from "react";
import axios from "axios";
import ResultType from "../types/result";

interface Result {
  [key: string]: ResultType; // You can define a more specific type based on your expected response structure
}

export default function TextAnalyzer() {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<Result | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/analyze", { text });
      setResult(response.data);
    } catch (error) {
      console.error("Error during analysis:", error);
    }
  };

  return (
    <div>
      <h1>Text Analysis</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Enter Hebrew text here..."
        ></textarea>
        <button type="submit">Analyze</button>
      </form>

      {result && (
        <div>
          <h2>Analysis Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
