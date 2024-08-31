import React, { useState } from 'react';

const SecondaryDomainGenerator = () => {
  const [primaryDomain, setPrimaryDomain] = useState('');
  const [count, setCount] = useState('');
  const [domains, setDomains] = useState([]);

  const prefixes = ['try', 'go', 'pro', 'meet', 'the', 'scale', 'get', 'my', 'run', 'hq', 'app', 'labs', 'cloud', 'consulting'];
  const suffixes = ['com', 'net', 'org', 'info', 'co', 'ai', 'dev', 'ca', 'us'];

  const handleGenerate = () => {
    const numDomains = parseInt(count, 10);
    if (isNaN(numDomains) || numDomains <= 0) return;

    const generatedDomains = [];
    let prefixIndex = 0;
    let suffixIndex = 0;

    // Ensure the primary domain includes an '@'
    const formattedPrimaryDomain = primaryDomain.includes('@') ? primaryDomain : `@${primaryDomain}`;

    // Extract suffix from the primary domain if it exists
    const primarySuffix = suffixes.find(suffix => formattedPrimaryDomain.endsWith(`.${suffix}`));

    for (let i = 0; i < numDomains; i++) {
      const prefix = prefixes[prefixIndex];
      const suffix = primarySuffix || suffixes[suffixIndex];
      
      // Avoid adding duplicate suffix
      const variation = i % 10 === 0 ? `${prefix}${formattedPrimaryDomain.replace(`.${primarySuffix}`, '')}${i}` : `${prefix}${formattedPrimaryDomain.replace(`.${primarySuffix}`, '')}`;
      const domainName = `${variation}.${suffix}`;
      
      generatedDomains.push(domainName);

      // Update indices for the next iteration
      prefixIndex = (prefixIndex + 1) % prefixes.length;
      suffixIndex = (suffixIndex + 1) % suffixes.length;

      // If needed, add more complexity by combining prefixes
      if (i % (prefixes.length * suffixes.length) === 0) {
        prefixes.push(`${prefix}${prefixes[(prefixIndex + 1) % prefixes.length]}`);
      }

      // If the combinations are exhausted, append numbers to suffixes
      if (generatedDomains.length >= prefixes.length * suffixes.length) {
        suffixes.push(`${suffix}${i % 10}`);
      }
    }

    setDomains(generatedDomains);
  };

  return (
    <div className="domain-generator">
      <h2>Secondary Domain Name Generator</h2>
      <input
        type="text"
        value={primaryDomain}
        onChange={(e) => setPrimaryDomain(e.target.value)}
        placeholder="Enter primary domain name"
      />
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        placeholder="Enter number of secondary domains"
      />
      <button onClick={handleGenerate}>Generate</button>

      {domains.length > 0 && (
        <ul>
          {domains.map((domain, index) => (
            <li key={index}>{domain}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SecondaryDomainGenerator;
