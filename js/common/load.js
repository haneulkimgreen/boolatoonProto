// load_01.js
(function($){
// jquery start ====================
var wrap = $('#wrap');
//불러올 파일 목록
var baseUrl = './src/';
var loadFile = {headBox: baseUrl +  'headBox.html',
                footBox: baseUrl +  'footBox.html'
              };
ImportFile('headBox', loadFile.headBox);
ImportFile('footBox', loadFile.footBox);

})(this.jQuery);