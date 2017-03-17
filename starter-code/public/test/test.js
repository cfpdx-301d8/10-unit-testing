QUnit.module('Article Constructor', function () {
  QUnit.test('Article should create a new Arcticle', function (assert) {
    //DONE TODO: write a test for the Article constructor
    var article = {
      title: 'Transmitting Open-source Arrays',
      category: 'firewall',
      author: 'Dr. Tressie Kuphal',
      authorUrl: 'http://http://corrine.net',
      publishedOn: '2014-01-22',
      body: '## The RSS sensor is down'
    }

    var thisGuy = new Article(article);
    var result = thisGuy.category;
    assert.equal(result, 'firewall');
  });

  QUnit.test('Article instance should have a method toHtml', function (assert) {
    //DONE TODO: verify that an instance of article has a toHtml method
    var article = {
      title: 'Transmitting Open-source Arrays',
      category: 'firewall',
      author: 'Dr. Tressie Kuphal',
      authorUrl: 'http://http://corrine.net',
      publishedOn: '2014-01-22',
      body: '## The RSS sensor is down'
    }
    var thisGuy = new Article(article);
    if (typeof thisGuy.toHtml === 'function'){
      var result = true;
    }

    assert.equal(result, true);

  });
});

QUnit.module('Article Class', function () {
  QUnit.test('Article.allArticles should be an array', function (assert) {
    //DONE TODO: write a test for the all articles property
    var article = {
      title: 'Transmitting Open-source Arrays',
      category: 'firewall',
      author: 'Dr. Tressie Kuphal',
      authorUrl: 'http://http://corrine.net',
      publishedOn: '2014-01-22',
      body: '## The RSS sensor is down'
    };
    var thisGuy = new Article(article);
    Article.all.push(thisGuy)

    if (Array.isArray(Article.all)){
      var result = true;
    }

    assert.equal(result, true);

  });
  QUnit.test('Article.loadAll should set an array of Article instances', function (assert) {
    //DONE TODO: write a test for article loadAll
    //remember to reset anything that changed about your global
    //environment at the end of the test!
    var articles = [
      {
        title: 'Transmitting Open-source Arrays',
        category: 'firewall',
        author: 'Dr. Tressie Kuphal',
        authorUrl: 'http://http://corrine.net',
        publishedOn: '2014-01-22',
        body: '## The RSS sensor is down'
      },
      {
        title: 'Transmitting Open-source Arrays',
        category: 'firewall',
        author: 'Dr. Tressie Kuphal',
        authorUrl: 'http://http://corrine.net',
        publishedOn: '2015-01-22',
        body: '## The RSS sensor is down'
      }];
    Article.loadAll(articles);
    if (Article.all[0].publishedOn === articles[0].publishedOn) {
      var result = true;
    }
    assert.equal(result, true);
  });
  //reset global after test //ASK AARON OR TOM
  Article.all = [];
  
  QUnit.test('Article.allAuthors should get unique author names', function (assert) {
    //DONE TODO: write a test for Article.allAuthors
    var testAuthorArray = [
      {
        author: 'Grayson',
        publishedOn: '2015-01-22'
      },
      {
        author: 'Keeley',
        publishedOn: '2012-01-22'
      },
      { author: 'Keeley',
        publishedOn: '2017-01-22'
      },
      { author: 'Morgan',
        publishedOn: '2010-01-22'
      },
      { author: 'Grayson',
        publishedOn: '2013-01-22'
      }
    ];
    Article.loadAll(testAuthorArray);
    var holdingArray = Article.allAuthors();

    if ((holdingArray[0] === 'Grayson' || holdingArray[0] === 'Keeley' || holdingArray[0] === 'Morgan') && (!holdingArray.length < 3)) {
      var result = true;
    }
    assert.equal(result, true);
  });
  //STRETCH: write a test for Article.numWordsAll
  //STRETCH: write a test for Article.fetchAll
})
