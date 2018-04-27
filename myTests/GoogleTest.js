import {Selector} from 'testcafe';

fixture `Google Test`
	.page `https://www.google.com`;

test('Loading Google Site', async t => {
	//this test checks that the google page is loaded correctly by
	//checking the visibility of the search bar and the search button
	
	//creating refference to search bar and search button
	const searchBar = await Selector('#lst-ib');
	const searchButton = await Selector('#Google Search');

	//checking visibility
	const visibleSearchBar = Selector(searchBar, {
        visibilityCheck: true //object is visible
    });
    const visibleSearchButton = Selector(searchButton, {
        visibilityCheck: true //object is visible
    });

});

test('Accessing Gmail', async t => {
	//this test checks that the gmail page is accessible via www.google.com
	//it does the search and test visibility of objects an asserts important
	//text
	
	//creating refference to search bar and search button
	const searchBar = await Selector('#lst-ib');
	const searchButton = await Selector('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)');

	//checking visibility of search bar and search button
	const visibleSearchBar = Selector(searchBar, {
        visibilityCheck: true //object is visible
    });
    const visibleSearchButton = Selector(searchButton, {
        visibilityCheck: true //object is visible
    });

    await t.typeText(searchBar, 'gmail');//typing gmail
    await t.pressKey('enter');//hitting enter to trigger search

    const gmailLink = await Selector('#rso > div:nth-child(1) > div > div > div > h3 > a');

    const visibleGmailLink = Selector(gmailLink, {
    	visibilityCheck: true //object is visible
    });

	//asserting Gmail - Google text
    await t.expect(gmailLink.textContent).contains('Gmail - Google');

    await t.click(gmailLink);

    //checking visibility of signIn object
    const signIn = Selector('#body > nav > div > a.gmail-nav__nav-link.gmail-nav__nav-link__sign-in');
    const visibleSignInLink = Selector(signIn, {
    	visibilityCheck: true //object is visible
    });
});

test('Accessing Google Drive', async t => {
	//this test checks that the google drive page is accessible via www.google.com
	//it does the search and test visibility of objects an asserts important
	//text
	
	//creating refference to search bar and search button
	const searchBar = await Selector('#lst-ib');
	const searchButton = await Selector('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)');

	//checking visibility of search bar abd search button
	const visibleSearchBar = Selector(searchBar, {
        visibilityCheck: true //object is visible
    });
    const visibleSearchButton = Selector(searchButton, {
        visibilityCheck: true //object is visible
    });

    await t.typeText(searchBar, 'google drive');//typing google drive
    await t.pressKey('enter');//hitting enter to trigger search

    const driveLink = await Selector('#rso > div:nth-child(1) > div > div > table > tbody > tr.mslg.dmenKe > td:nth-child(1) > div > span > h3 > a');

    const visibleDriveLink = Selector(driveLink, {
    	visibilityCheck: true //object is visible
    });

	//asserting Google Drive text
    await t.expect(driveLink.textContent).contains('Google Drive');

    await t.click(driveLink);

    //checking visibility of goToDrive object
    const goToDrive = Selector('body > section > div.section-centered.section-vertical-align.js-vertical-align.js-parallax-image > div > a');
    const visibleGoToDrive = Selector(goToDrive, {
    	visibilityCheck: true //object is visible
    });

    //asserting goToDrive text
    await t.expect(goToDrive.textContent).contains('Go to Google Drive');
});

test('Accessing Youtube', async t => {
	//this test checks that the Youtube page is accessible via www.google.com
	//it does the search and test visibility of objects an asserts important
	//text
	
	//creating refference to search bar and search button
	const searchBar = await Selector('#lst-ib');
	const searchButton = await Selector('#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)');

	//checking visibility of search bar and search button
	const visibleSearchBar = Selector(searchBar, {
        visibilityCheck: true //object is visible
    });
    const visibleSearchButton = Selector(searchButton, {
        visibilityCheck: true //object is visible
    });

    await t.typeText(searchBar, 'Youtube');//typing Youtube
    await t.pressKey('enter');//hitting enter to trigger search

    const tubeLink = await Selector('#rso > div:nth-child(1) > div > div > div > div > h3 > a');

    const visibleTubeLink = Selector(tubeLink, {
    	visibilityCheck: true //object is visible
    });

	//asserting Google Drive text
    await t.expect(tubeLink.textContent).contains('YouTube');

    await t.click(tubeLink);

    //checking visibility of signIn and searchBar objects
    const signIn = Selector('#button');
    const tubeSearch = Selector('#search');
    const visibleSignIn = Selector(signIn, {
    	visibilityCheck: true //object is visible
    });
    const visibleTubeSearch = Selector(tubeSearch, {
    	visibilityCheck: true //object is visible
    });
});