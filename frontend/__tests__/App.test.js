const timeout = 5000
const user = {
    email: 'hazrat@kth.se',
    password: '123'
};

describe(
    '/ (Home Page)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080')
        }, timeout)

        afterAll(async () => {
            await page.close()
        });

        it('should load without error', async () => {
            let text = await page.evaluate(() => document.body.textContent)
            expect(text).toContain('Signup')
        })
    },
    timeout
);

describe(
    '/login (User login system)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:8080')
        }, timeout)

        afterAll(async () => {
            await page.close()
        });

        it('should have login form', async () => {
            let text = await page.evaluate(() => document.body.textContent)
            await page.click('input#email')
            await page.type('input#email', user.email)

            await page.click('input#password')
            await page.type('input#password', user.password)
        })
    },
    timeout
);

