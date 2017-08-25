var db = require('../dbconn');
var htmlparser = require('htmlparser');
var http = require('http');

var article = {
    getContent: function(url, callback) {

        return http.get({
            host: 'www.medicalnewstoday.com',
            path: url
        }, function(response) {
            // Continuously update stream with data
            var content = '';
            response.on('data', function(htmlContent) {
                content += htmlContent.toString();
            });
            response.on('end', function() {

                const jsdom = require('jsdom');
                const { JSDOM } = jsdom;
                const dom = new JSDOM(content);
                callback(dom.window.document.getElementsByClassName('article_body')[0].innerHTML.replace('\t','').replace('\n',''));
                
                //dom.window.document.getElementsByTagName('article')[0].innerHTML;
                //callback(content);

            });
        });
    
    },


    getArticleContent: function(domSourceString) {
        
        var xmlString = domSourceString;
        var DOMParser = require('xmldom').DOMParser;
        var parser = new DOMParser();
        var doc = parser.parseFromString(xmlString, "text/xml");

        return document.getElementsByTagName('article')[0].outerHTML;

    }
};

module.exports = article;