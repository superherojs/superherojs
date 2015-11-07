(function () {
  var largeHeader = document.querySelector('.largeHeader');
  var main = document.querySelector('main');
  var body = document.body;
  var thresholdPadding = 100;

  document.addEventListener('scroll', function () {
    var scrollTop = body.scrollTop;
    var isFurtherDownThanThreshold = scrollTop + thresholdPadding >=
      largeHeader.offsetHeight + largeHeader.offsetTop;
    var hasMinify = main.className.indexOf('minifyHeader') !== -1;

    if (isFurtherDownThanThreshold && !hasMinify) {
      main.className = 'minifyHeader';
    } else if (!isFurtherDownThanThreshold && hasMinify) {
      main.className = '';
    }
  });
}());
