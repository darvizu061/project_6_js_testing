$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('should have objects with a url defined', function(){
             var i = 0;
             var feedLength = allFeeds.length;
             for (i; i < feedLength; i++){
                 expect(allFeeds[i].url).toBeTruthy();
             }
             
             
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('should have objects with a name defined', function(){
             var i = 0;
             var feedLength = allFeeds.length;
             for (i; i < feedLength; i++){
                 expect(allFeeds[i].name).toBeTruthy();
             }
             
             
         });
         
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
        

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('should be hiding by default', function(){
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('should toogle visablity when clicked', function(){
              // get menu icon with jquery 
              var  menuIcon = $('.menu-icon-link');
              //trigger a click on menuIcon 
              menuIcon.trigger('click');
              expect($('body').hasClass('menu-hidden')).toBe(false);
              //trigger second click on menuIcon 
              menuIcon.trigger('click');
              expect($('body').hasClass('menu-hidden')).toBe(true);
          });
          
    });
    
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         
        //call function before running test
        beforeEach(function(done){
            loadFeed(0, done);
        });
         
        it('should load at least one .entry elem', function(done){
            var entries = $('.feed').find('.entry');
            expect(entries.length >= 1).toBe(true);
            done();
            
        });
    });
        

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Section', function(){
        // make variables accessable to all functions
        var oldContent, newContent;
        
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        
        beforeEach(function(done){
            /* Load the first feed starting at index 0 */
            oldContent = $('.header-title').text() + $('.feed').find('.entry').text().replace(/ +/g, " ");
            
            
            /* Load the second feed starting at index 1 */
            loadFeed(1, function(){
                newContent = $('.header-title').text() + $('.feed').find('.entry').text().replace(/ +/g, " ");
                
                done();
            });
        });
        
        it('should load diffrent content', function(done){
            expect(oldContent != newContent).toBe(true);
            
            done();
            
        });
        
    });
        
}());
