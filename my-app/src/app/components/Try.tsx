'use client'
import { useState, FormEvent } from "react";
import axios from "axios";
import ResultType from "../types/result";

interface Result {
  [key: string]: ResultType; 
}

interface Token {
  lex: string;
  morph: {
    pos: string; // part of speech (e.g., VERB, NOUN, etc.)
  };
}

interface Embedding {
  tokens: Token[];
}

interface AnalysisResponse {
  embeddings: Embedding[];
}


export default function TextAnalyzer() {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<Result | null>(null);

  // Define types for the response data structure

const handleSubmit = async (event: FormEvent) => {
  event.preventDefault();
 
  
  try {
    const response = await axios.post<AnalysisResponse>("/api/analyze", { text });
    
    // Process the tokens
    const processedTokens = response.data.embeddings[0].tokens.map((token: Token) => {
      return { [token.lex]: token.morph.pos };
    });
    
    console.log(processedTokens);  // Log the processed tokens
    setResult(response.data as unknown as Result);// Set the result from the API
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
