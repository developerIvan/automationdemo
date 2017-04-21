describe('angularjs homepage', function() {
  
  var dropDown = element.all(by.css('.dropdown-toggle')).get(0);
  var tutorialBtn = element(by.linkText('Tutorial'));
  var tutorialTitle = element(by.css('[role="main"]')).element(by.css('.main-grid')).element(by.css('.grid-right')).element(by.id('phonecat-tutorial-app'));     
  var name = "Ivan";
  
it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');

    element(by.model('yourName')).sendKeys(name);

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Ivan!');
  });

    it('tutorial link', function() { 
    dropDown.click();
    tutorialBtn.click();
	browser.sleep(6000);
     expect(tutorialTitle.getText()).toEqual('PhoneCat Tutorial App');
  }, 30000);
});