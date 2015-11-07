(function () {
  var aside = document.querySelector('aside');
  var main = document.querySelector('main');
  var thresholdPadding = 200;

  document.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset;
    var isFurtherDownThanThreshold = scrollTop + thresholdPadding >=
      aside.offsetHeight + aside.offsetTop;
    var hasMinify = main.className.indexOf('minify') !== -1;

    if (isFurtherDownThanThreshold && !hasMinify) {
      main.className = 'minify';
    } else if (!isFurtherDownThanThreshold && hasMinify) {
      main.className = '';
    }
  });
}());
