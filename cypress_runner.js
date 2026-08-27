const { execSync } = require('child_process');
const fs = require('fs');

const specs = [
  'cypress/e2e/admin.cy.ts',
  'cypress/e2e/hr.cy.ts',
  'cypress/e2e/academic.cy.ts',
  'cypress/e2e/teacher.cy.ts',
  'cypress/e2e/student.cy.ts'
];

let failed = [];

console.log("Starting Cypress Test Runner...");

for (const spec of specs) {
  console.log(`\n==================================\nRunning ${spec}\n==================================`);
  try {
    execSync(`npx cypress run --spec "${spec}"`, { stdio: 'inherit' });
    console.log(`✅ SUCCESS: ${spec}`);
  } catch (err) {
    console.log(`❌ FAILED: ${spec}`);
    failed.push(spec);
  }
}

console.log("\n==================================");
console.log("Test Summary:");
if (failed.length === 0) {
  console.log("🎉 ALL TESTS PASSED!");
  process.exit(0);
} else {
  console.log(`🔥 FAILED TESTS: \n - ${failed.join('\n - ')}`);
  process.exit(1);
}
