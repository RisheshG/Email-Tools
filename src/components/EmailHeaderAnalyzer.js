// src/components/EmailHeaderAnalyzer.js
import React, { useState } from 'react';

const EmailHeaderAnalyzer = () => {
  const [headerData, setHeaderData] = useState('');
  const [result, setResult] = useState([]);

  const handleAnalyze = () => {
    // Regular expression to match key-value pairs in the email header
    const keyValueRegex = /^(.+?):\s*(.*)$/gm;
    const parsedData = [];
    let match;

    // Extract key-value pairs
    while ((match = keyValueRegex.exec(headerData)) !== null) {
      const [_, key, value] = match;
      parsedData.push({ key: key.trim(), value: value.trim() });
    }

    setResult(parsedData);
  };

  return (
    <div className="header-analyzer">
      <h2>Email Header Analyzer</h2>
      <textarea
        value={headerData}
        onChange={(e) => setHeaderData(e.target.value)}
        placeholder="Enter the show original data"
        rows="20"
        cols="100"
      />
      <button onClick={handleAnalyze}>Analyze</button>

      {result.length > 0 && (
        <div className="result">
          <h3>Parsed Header Data:</h3>
          <table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item, index) => (
                <tr key={index}>
                  <td>{item.key}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmailHeaderAnalyzer;
