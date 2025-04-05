# Kane AI Demo

This repository contains a demo application for Kane AI integration with automated testing using LambdaTest HyperExecute.

## 🚀 Features

- Automated UI testing with LambdaTest HyperExecute
- GitHub Actions CI/CD pipeline
- Automatic test execution on pull requests and pushes to main
- Test results posted as comments on pull requests
- Preview URL generation for testing
- Automatic retry mechanism for failed deployments
- URL replacement for handling asset paths

## 🛠️ Setup

### Prerequisites

- GitHub account
- LambdaTest account with HyperExecute access
- GitHub repository with GitHub Pages enabled

### Environment Variables

The following secrets need to be configured in your GitHub repository:

- `LAMBDATEST_AUTH`: Your LambdaTest authentication token (Basic auth)
- `KANEAI_TEST_RUN_ID`: The ID of your test run in LambdaTest

### GitHub Pages Setup

1. Enable GitHub Pages in your repository settings
2. Configure the source to deploy from the `gh-pages` branch
3. Ensure your build process outputs to the correct directory for GitHub Pages

### Asset Path Configuration

The application uses Vite for building, which generates asset paths based on the base URL. To ensure assets load correctly:

1. Make sure your `vite.config.js` has the correct base URL:
   ```js
   export default defineConfig({
     base: '/kane-ai-demo/',
     // other config...
   })
   ```

2. The workflow includes URL replacement to handle any mismatches between the expected and actual asset paths.

## 🔄 CI/CD Workflow

The repository includes a GitHub Actions workflow that:

1. Triggers on:
   - Pull request events (opened, synchronized, reopened)
   - Push events to the main branch
   - Manual workflow dispatch

2. Workflow steps:
   - Waits for the deployment workflow to complete
   - Automatically retries deployment if it fails
   - Triggers tests on LambdaTest HyperExecute
   - Monitors test execution status
   - Posts test results as comments on pull requests

### URL Replacement

The workflow includes URL replacement to handle asset path issues:

- Replaces hardcoded URLs in the test with the correct preview URL
- Handles multiple URL patterns to ensure all assets load correctly
- Fixes issues with incorrect base paths in asset URLs

### Deployment Retry Mechanism

If the GitHub Pages deployment fails, the workflow will:
1. Automatically detect the failure
2. Trigger a new deployment run
3. Wait for the deployment to complete
4. Retry up to 10 times with 30-second intervals
5. Check deployment status every 10 seconds
6. Continue with testing if deployment succeeds
7. Fail the workflow if all retry attempts fail

### Test Execution

Tests are executed using LambdaTest HyperExecute with the following configuration:

- Concurrency: 1
- URL replacement for testing against preview deployments
- Automatic status monitoring and reporting

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
