QUnit.module('Article Constructor', function() {
  QUnit.test('Article should create a new Article', function(assert) {
    var testObject = {
      article_id: 1,
      author_id: 2,
      title: 'title',
      category: 'category',
      publishedOn: 6,
      body: 'body',
      author: 'virginia',
      authorUrl: 'cats.com'
    };

    var result = new Article(testObject);

    assert.equal(result.article_id, testObject.article_id);
    assert.equal(result.author_id, testObject.author_id);

    //TODO: write a test for the Article constructor
  });

  QUnit.test('Article instance should have a method toHtml', function(assert) {
    var testObject = {
      article_id: 1,
      author_id: 2,
    };
    var result = new Article(testObject);
    assert.equal(typeof result.toHtml, 'function');
    //TODO: verify that an instance of article has a toHtml method
  });
});

QUnit.module('Article Class', function() {
  QUnit.test('Article.all should be an array', function(assert) {
    assert.equal(typeof Article.all, 'object');
    //TODO: write a test for the all articles property
  });

  QUnit.test('Article.loadAll should set an array of Article instances', function(assert) {
    var array = [{publishedOn: 5}, {publishedOn: 10}];
    Article.loadAll(array);
    assert.equal(Article.all.length, 2);
  
    //TODO: write a test for article loadAll
    //remember to reset anything that changed about your global
    //environment at the end of the test!
  });

  QUnit.test('Article.allAuthors should get unique author names', function(assert) {
    Article.all = [{author: 'Sandra'}, {author: 'Virginia'}, {author: 'Carrie'},{author: 'Sandra'},{author: 'Virginia'}];
    // Article.fetchAll(articleView.initIndexPage);
    var result = Article.allAuthors().filter(function(name, index, array) {
      return array.indexOf(name) === index;
    });
    assert.equal(result.length, 3);
    
    //TODO: write a test for Article.allAuthors
  });




  //STRETCH: write a test for Article.numWordsAll
  //STRETCH: write a test for Article.fetchAll
})
