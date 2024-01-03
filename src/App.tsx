import React from 'react';
import './App.css';
import '@picocss/pico';
import AppButton from './components/app-button';
import JobApplication from './types/job-application';
import JobTable from './components/job-table';

const applicationHistory: JobApplication[] = [{
  company: 'place',
  position: 'hold',
  url: 'er.com',
  appliedDate: new Date(),
}]

function App() {
  return (
    <div className="App">
      <header>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/pico.min.css" />
        <title>ESD Assistant</title>
      </header>
      <body>
        <main className="container">
          <h4>Existing Applications</h4>
          <JobTable applicationHistory={applicationHistory}></JobTable>
          <AppButton label='Add Application'></AppButton>
        </main>
      </body>
    </div>
  );
}

export default App;
