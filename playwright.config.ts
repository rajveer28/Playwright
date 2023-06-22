import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    timeout: 360000,
    // fullyParallel: true,
    use: {
        // storageState: 'state.json', // this will be used in both the projects
        // viewport: { width: 1536, height: 864 },
        baseURL: "http://fluorine-master-prod-latest-ue1.dev.graebert.com/",
        headless: false,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        navigationTimeout: 50000,
        actionTimeout: 30000,
        launchOptions: {
            slowMo: 200
        }
    },
    // reporter: "html",
    projects: [
        {
            name: "setup",
            testMatch: 'setup.spec.ts',

        },
        {
            name: 'test',
            testDir: './tests',
            dependencies: ['setup'],
            use: {
                storageState: "state.json"
            }
        }

        // {
        //     name: 'firefox',
        //     testDir: './testcases2/',
        //     dependencies: ['setup'],
        //     use: {
        //         ...devices['Desktop Firefox'],
        //         storageState: "state.json",
        //     },
        // },

    ]
});