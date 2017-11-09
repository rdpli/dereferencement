/* Search engine description : [Name, URL, search bar identifier, bracket use, url only, result form, deref urls, support for multiple requests, search_key */
var search_engine = [["Ask", "https://fr.ask.com", 'form[action="/web"]', false, false, "div.PartialSearchResults-item a", "https://www.cnil.fr/fr/le-droit-au-dereferencement", true, 'site:' ],
		 ["Bing", "https://www.bing.com", 'form[action="/search"]', true, false , "h2 a", "https://www.bing.com/webmaster/tools/eu-privacy-request", true, 'url:' ],
		 ["DuckDuckGo", "https://duckduckgo.com", 'form[action="/"]', true, true , "h2.result__title a", "https://www.cnil.fr/fr/le-droit-au-dereferencement", true, 'site:' ],
		 ["Google", "https://www.google.fr", 'form[action="/search"]', false, false , "h3.r a", "https://support.google.com/legal/contact/lr_eudpa?product=websearch&hl=fr", true, 'site:'  ],
		 ["Qwant", "https://www.qwant.com", 'form[action="."]', true, false , "h3 span.result--web--title", "https://about.qwant.com/wp-content/uploads/dlm_uploads/2017/02/dereferencement.pdf", true, 'url:' ],
		 ["IXQUICK", "https://www.ixquick.fr", 'form[id="search_form"]', false, false , "h3.clk a", "https://www.cnil.fr/fr/le-droit-au-dereferencement", true, 'site:'],
		 ["Yahoo!", "https://fr.search.yahoo.com", 'form[role="search"]', true, false , "h3.title a", "https://io.help.yahoo.com/contact/index?y=PROD_SRCH&token=w5FCchB1dWGbc2RE0kcjij0u65u86GoeqUkmqtTbcuO%252BLU%252FUQgc3BzwNZtXp6XEXn5YwJ6Wu6A9MCYnw7SzQy8yhhGGudc34yb1Vil8ltix6Y79QFsINed4pRMgdqwK7SybqM3Xs%252FFY%253D&locale=fr_FR&page=contactform&selectedChannel=email-icon&isVip=false", true, 'url:'  ] ];