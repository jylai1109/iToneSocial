"use client";
import { useState } from "react";

export default function ToneTestForm() {
    const [answers, setAnswers] = useState<number[]>([]);
    const [result, setResult] = useState<any>(null);
   
    const handleSubmit = async () => {
        const response = await fetch("https://localhost:7097/api/Tone/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify([10, 20, 30])
        });

        const data = await response.json();
        setResult(data);
    };

    return (
        <div>
            <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Submit Test
            </button>

            {result && (
                <div>
                    <p>你的旅行調性: {result.tone}</p>
                    <p>分數: {result.score}</p>
                </div>
            )}
        </div>
    );
}
