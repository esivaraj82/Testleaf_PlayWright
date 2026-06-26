function runTests(testType) {
  switch (testType) {
    case "smoke":
      console.log("The test type is Smoke");
      break;
    case "sanity":
      console.log("The test type is Sanity");
      break;
    case "regression":
      console.log("The test type is regression");
      break;
    default:
      console.log("The default test type is Smoke");
      break;
  }
}

launchBrowser("Chrome");
launchBrowser("MSEdge");
runTests("regression");
runTests("Unit test");