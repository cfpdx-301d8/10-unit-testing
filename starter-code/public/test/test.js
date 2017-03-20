QUnit.module('Article Constructor', function() {
  QUnit.test('Article should create a new Article', function(assert) {
    //DONE TODO: write a test for the Article constructor

    let testArticle = {
      publishedOn: '2014-01-22',
    }
    let newArticle = new Article(testArticle)

    assert.equal(newArticle.publishedOn, '2014-01-22', 'made an article')
  });


  QUnit.test('Article instance should have a method toHtml', function(assert) {
    let testArticle = {};
    let newArticle = new Article(testArticle);

    assert.equal(typeof(newArticle.toHtml), 'function');
    //DONE TODO: verify that an instance of article has a toHtml method
  });
});


QUnit.module('Article Class', function() {
  QUnit.test('Article.allArticles should be an array', function(assert) {
    //DONE TODO: write a test for the all articles property
    assert.equal(Array.isArray(Article.all), true, 'is array')
  });


  QUnit.test('Article.loadAll should set an array of Article instances', function(assert) {
    //DONE TODO: write a test for article loadAll
    //remember to reset anything that changed about your global
    //environment at the end of the test!
    let testArticle = [{},{},{}];
    Article.loadAll(testArticle);
    assert.equal(Article.all.length > 0, true)
    assert.equal(Article.all[0] instanceof Article, true)
  });


  QUnit.test('Article.allAuthors should get unique author names', function(assert) {
    //DONE TODO: write a test for Article.allAuthors
    let testArticle = [{author: 'v'},{author: 'v'}]
    Article.loadAll(testArticle);
    assert.equal(Article.allAuthors().length === 1, true)
  });
  //STRETCH: write a tesst for Article.numWordsAll
  //STRETCH: write a test for Article.fetchAll
})

