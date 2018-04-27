import {Selector} from 'testcafe';

fixture `Google Test`
	.page `https://www.google.com`;

//class WebObjects contains the objects to be used for assertions
class WebObjects {
    constructor () {
        this.radioButtons          = Selector('input[type="radio"]');
        this.submitButtons         = Selector('input[type="submit"]');
        this.generalButtons        = Selector('input[role="button"]');
        this.comboBox              = Selector('input[role="combobox"]');
        this.googleSearchBar       = Selector('#lst-ib');//refference to search bar
        this.googleSearchButton    = Selector('#Google Search');//refference to search button
        this.gmailLink             = Selector('#rso > div:nth-child(1) > div > div > div > h3 > a');
        this.gmailSignIn           = Selector('#body > nav > div > a.gmail-nav__nav-link.gmail-nav__nav-link__sign-in');
        this.driveLink             = Selector('#rso > div:nth-child(1) > div > div > table > tbody > tr.mslg.dmenKe > td:nth-child(1) > div > span > h3 > a');
        this.goToDrive             = Selector('body > section > div.section-centered.section-vertical-align.js-vertical-align.js-parallax-image > div > a');
        this.tubeLink              = Selector('#rso > div:nth-child(1) > div > div > div > div > h3 > a');
        this.tubeSearch            = Selector('#search');
        this.tubeSignIn            = Selector('#button');

        this.slider = {
            handle: Selector('.ui-slider-handle'),
            tick:   Selector('.slider-value')
        };
    }
}

//creating WebObjects
const GooglePage = new WebObjects();

test('Loading Google Site', async t => {
    //this test checks that the google page is loaded correctly by
    //checking the visibility of the search bar and the search button
    
    //checking visibility
    const visibleSearchBar = Selector(GooglePage.googleSearchBar, {
        visibilityCheck: true //object is visible
    });
    const visibleSearchButton = Selector(GooglePage.googleSearchButton, {
        visibilityCheck: true //object is visible
    });

    await t
        //asserting initial conditions that should be present in the page
        .expect(GooglePage.googleSearchBar.value).eql('', 'search bar is empty')//asserting empty search bar
        .expect(GooglePage.radioButtons.count).lte(0, 'there are at most 0 radio buttons on the page')//asserting 0 radio button ammount
        .expect(GooglePage.submitButtons.count).gte(2, 'there are at least 2 submit buttons on the page')//asserting at least 2 submit button
});

test('Accessing Gmail', async t => {
    //this test checks that the gmail page is accessible via www.google.com
    //it does the search and test visibility of objects an asserts important
    //text

    //checking visibility
    const visibleSearchBar = Selector(GooglePage.googleSearchBar, {
        visibilityCheck: true //object is visible
    });
    const visibleSearchButton = Selector(GooglePage.googleSearchButton, {
        visibilityCheck: true //object is visible
    });

    await t
        //asserting initial conditions that should be present in the page
        .expect(GooglePage.googleSearchBar.value).eql('', 'search bar is empty')//asserting empty search bar
        .expect(GooglePage.radioButtons.count).lte(0, 'there are at most 0 radio buttons on the page')//asserting 0 radio button ammount
        .expect(GooglePage.submitButtons.count).gte(2, 'there are at least 2 submit buttons on the page')//asserting at least 2 submit button

        //typing gmail
        .typeText(GooglePage.googleSearchBar, 'gmail')

        //asserting typing went well
        .expect(GooglePage.googleSearchBar.value).eql('gmail', 'search bar contains gmail')//asserting typed value matches gmail
        .expect(GooglePage.googleSearchBar.value).notContains('gmeil')//asserting not gmeil
        .expect(GooglePage.googleSearchBar.value).notContains('gmsil')//asserting not gmsil

        .pressKey('enter')//hitting enter to trigger search

    //checking visibility
    const visibleGmailLink = Selector(GooglePage.gmailLink, {
        visibilityCheck: true //object is visible
    });

    await t
        .expect(GooglePage.gmailLink.textContent).contains('Gmail - Google')//asserting Gmail - Google text
        .click(GooglePage.gmailLink)

    //checking visibility of signIn object
    const visibleSignInLink = Selector(GooglePage.gmailSignIn, {
        visibilityCheck: true //object is visible
    });

    await t
        .expect(GooglePage.radioButtons.count).lte(0, 'there are at most 0 radio buttons on the page')//asserting 0 radio button ammount
        .expect(GooglePage.submitButtons.count).lte(0, 'there are at most 0 submit buttons on the page')//asserting 0 submit button ammount
});

test('Accessing Google Drive', async t => {
    //this test checks that the google drive page is accessible via www.google.com
    //it does the search and test visibility of objects an asserts important
    //text
    
    //checking visibility
    const visibleSearchBar = Selector(GooglePage.googleSearchBar, {
        visibilityCheck: true //object is visible
    });
    const visibleSearchButton = Selector(GooglePage.googleSearchButton, {
        visibilityCheck: true //object is visible
    });

    await t
        //asserting initial conditions that should be present in the page
        .expect(GooglePage.googleSearchBar.value).eql('', 'search bar is empty')//asserting empty search bar
        .expect(GooglePage.radioButtons.count).lte(0, 'there are at most 0 radio buttons on the page')//asserting 0 radio button ammount
        .expect(GooglePage.submitButtons.count).gte(2, 'there are at least 2 submit buttons on the page')//asserting at least 2 submit button

        //typing google drive
        .typeText(GooglePage.googleSearchBar, 'google drive')

        //asserting typing went well
        .expect(GooglePage.googleSearchBar.value).eql('google drive', 'search bar contains google drive')//asserting typed value matches google drive
        .expect(GooglePage.googleSearchBar.value).notContains('google drivw')//asserting not google drivw
        .expect(GooglePage.googleSearchBar.value).notContains('google frive')//asserting not google frive
        .expect(GooglePage.googleSearchBar.value).notContains('gogle drive')//asserting not gogle drive
        .expect(GooglePage.googleSearchBar.value).notContains('goole drive')//asserting not goole drive

        .pressKey('enter')//hitting enter to trigger search

    //checking visibility
    const visibleDriveLink = Selector(GooglePage.driveLink, {
        visibilityCheck: true //object is visible
    });

    //asserting Google Drive text
    await t
        .expect(GooglePage.driveLink.textContent).contains('Google Drive')
        .click(GooglePage.driveLink)

    //checking visibility of goToDrive object
    const visibleGoToDrive = Selector(GooglePage.goToDrive, {
        visibilityCheck: true //object is visible
    });

    await t
        .expect(GooglePage.goToDrive.textContent).contains('Go to Google Drive')//asserting Go to Google Drive text is present
        .expect(GooglePage.goToDrive.textContent).notContains('Go to Gogle Drive')//asserting not Go to Gogle Drive
        .expect(GooglePage.goToDrive.textContent).notContains('Go to Gopgle Drive')//asserting not Go to Gopgle Drive
        .expect(GooglePage.goToDrive.textContent).notContains('Go tp Google Drive')//asserting not Go tp Google Drive
        .expect(GooglePage.radioButtons.count).lte(0, 'there are at most 0 radio buttons on the page')//asserting 0 radio button ammount
        .expect(GooglePage.submitButtons.count).lte(0, 'there are at most 0 submit buttons on the page')//asserting 0 submit button ammount
});

test('Accessing Youtube', async t => {
    //this test checks that the Youtube page is accessible via www.google.com
    //it does the search and test visibility of objects an asserts important
    //text
    
    //checking visibility
    const visibleSearchBar = Selector(GooglePage.googleSearchBar, {
        visibilityCheck: true //object is visible
    });
    const visibleSearchButton = Selector(GooglePage.googleSearchButton, {
        visibilityCheck: true //object is visible
    });

    await t
        //asserting initial conditions that should be present in the page
        .expect(GooglePage.googleSearchBar.value).eql('', 'search bar is empty')//asserting empty search bar
        .expect(GooglePage.radioButtons.count).lte(0, 'there are at most 0 radio buttons on the page')//asserting 0 radio button ammount
        .expect(GooglePage.submitButtons.count).gte(2, 'there are at least 2 submit buttons on the page')//asserting at least 2 submit button

        //typing youtube
        .typeText(GooglePage.googleSearchBar, 'youtube')

        //asserting typing went well
        .expect(GooglePage.googleSearchBar.value).eql('youtube', 'search bar contains google drive')//asserting typed value matches youtube
        .expect(GooglePage.googleSearchBar.value).notContains('yotube')//asserting not yotube
        .expect(GooglePage.googleSearchBar.value).notContains('yputube')//asserting not yputube
        .expect(GooglePage.googleSearchBar.value).notContains('youtubi')//asserting not youtubi

        .pressKey('enter')//hitting enter to trigger search


    const visibleTubeLink = Selector(GooglePage.tubeLink, {
        visibilityCheck: true //object is visible
    });

    //asserting YouTube text
    await t
        .expect(GooglePage.tubeLink.textContent).contains('YouTube')//asserting typed value matches YouTube
        .expect(GooglePage.tubeLink.textContent).notContains('You-Tube')//asserting not You-Tube
        .expect(GooglePage.tubeLink.textContent).notContains('yotube')//asserting not yotube
        .click(GooglePage.tubeLink);//going to https://www.youtube.com/

    //checking visibility of signIn and searchBar objects
    const visibleSignIn = Selector(GooglePage.tubeSignIn, {
        visibilityCheck: true //object is visible
    });
    const visibleTubeSearch = Selector(GooglePage.tubeSearch, {
        visibilityCheck: true //object is visible
    });

    await t
        .expect(GooglePage.tubeSearch.textContent).contains('')//asserting empty search bar
        .expect(GooglePage.tubeSearch.textContent).notContains('search')//asserting 'search' under object does not appear inside the object
        .expect(GooglePage.radioButtons.count).lte(0, 'there are at most 0 radio buttons on the page')//asserting 0 radio button ammount
        .expect(GooglePage.submitButtons.count).lte(0, 'there are at most 0 submit buttons on the page')//asserting 0 submit button ammount
        .expect(GooglePage.generalButtons.count).lte(0, 'there are at most 0 general buttons on the page')//asserting at at most 0 general buttons
        .expect(GooglePage.comboBox.count).lte(0, 'there are at most 0 combo boxes on the page')//asserting at at most 0 combo boxes
});