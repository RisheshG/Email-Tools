import React, { useState } from 'react';

const VolumeCalculator = () => {
  const [domains, setDomains] = useState('');
  const [volume, setVolume] = useState('');
  const [esp, setEsp] = useState('gmail');
  const [mode, setMode] = useState('domains');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    let domainCount = parseInt(domains, 10);
    let volumeCount = parseInt(volume, 10);
    if ((mode === 'domains' && (isNaN(domainCount) || domainCount <= 0)) ||
        (mode === 'volume' && (isNaN(volumeCount) || volumeCount <= 0))) return;

    let dailyVolume, total22Days, totalMonth, emailPerDomain, totalEmails, requiredDomains;

    if (mode === 'domains') {
      if (esp === 'gmail') {
        dailyVolume = 500 * domainCount;
        total22Days = 5000 * domainCount;
        totalMonth = 7500 * domainCount;
        emailPerDomain = 5;
        totalEmails = 5 * domainCount;
      } else {
        dailyVolume = 300 * domainCount;
        total22Days = 3000 * domainCount;
        totalMonth = 4500 * domainCount;
        emailPerDomain = 3;
        totalEmails = 3 * domainCount;
      }
      requiredDomains = domainCount;
    } else if (mode === 'volume') {
      if (esp === 'gmail') {
        requiredDomains = Math.ceil(volumeCount / 500);
        dailyVolume = volumeCount;
        total22Days = requiredDomains * 5000;
        totalMonth = requiredDomains * 7500;
        emailPerDomain = 5;
        totalEmails = requiredDomains * 5;
      } else {
        requiredDomains = Math.ceil(volumeCount / 300);
        dailyVolume = volumeCount;
        total22Days = requiredDomains * 3000;
        totalMonth = requiredDomains * 4500;
        emailPerDomain = 3;
        totalEmails = requiredDomains * 3;
      }
    }

    setResult({
      dailyVolume,
      total22Days,
      totalMonth,
      emailPerDomain,
      totalEmails,
      requiredDomains,
    });
  };

  return (
    <div className="calculator">
      <h2>Volume Calculator</h2>
      
      <div>
        <label>
          <input
            type="radio"
            value="domains"
            checked={mode === 'domains'}
            onChange={() => setMode('domains')}
          />
          Calculate by Domains
        </label>
        <label>
          <input
            type="radio"
            value="volume"
            checked={mode === 'volume'}
            onChange={() => setMode('volume')}
          />
          Calculate by Volume
        </label>
      </div>

      {mode === 'domains' && (
        <input
          type="number"
          value={domains}
          onChange={(e) => setDomains(e.target.value)}
          placeholder="Enter number of domains"
        />
      )}

      {mode === 'volume' && (
        <input
          type="number"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          placeholder="Enter desired volume"
        />
      )}

      <select value={esp} onChange={(e) => setEsp(e.target.value)}>
        <option value="gmail">Gmail</option>
        <option value="outlook">Outlook</option>
      </select>
      
      <button onClick={handleCalculate}>Calculate</button>

      {result && (
        <div>
          {mode === 'domains' ? (
            <>
              <p>Volume with {domains} domains in 1 day: {result.dailyVolume}</p>
              <p>Total volume in 22 days: {result.total22Days}</p>
              <p>Total volume in a month: {result.totalMonth}</p>
            </>
          ) : (
            <>
              <p>Domains needed for {volume} volume in 1 day: {result.requiredDomains}</p>
            </>
          )}
          <p>Email Id required per domain: {result.emailPerDomain}</p>
          <p>Total email Id required for {result.requiredDomains} domains: {result.totalEmails}</p>
        </div>
      )}
    </div>
  );
};

export default VolumeCalculator;
