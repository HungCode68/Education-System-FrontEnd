import { defineConfig } from 'cypress';
import * as mysql from 'mysql2/promise';
import * as fs from 'fs';
import * as path from 'path';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'LMS E2E Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        seedDb() {
          return new Promise((resolve, reject) => {
            const { exec } = require('child_process');
            const sqlPath = path.resolve(__dirname, 'cypress/fixtures/seed.sql');
            exec(`mysql -h localhost -u root -p123456789 lms_test_db < "${sqlPath}"`, (error, stdout, stderr) => {
              if (error) {
                console.error('Error seeding DB:', error);
                return reject(error);
              }
              resolve(null);
            });
          });
        },
      });
      return config;
    },
  },
});