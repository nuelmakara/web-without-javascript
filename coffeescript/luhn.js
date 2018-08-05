// Generated by CoffeeScript 2.3.1
(function() {
  var is_valid_cc;

  is_valid_cc = function(number) {
    var digit, digits, i, j, len, parity, total;
    digits = number.split('');
    total = 0;
    parity = digits.length % 2;
    for (i = j = 0, len = digits.length; j < len; i = ++j) {
      digit = digits[i];
      digit = parseInt(digit);
      if (i % 2 === parity) {
        digit = digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      total += digit;
    }
    return (total % 10) === 0;
  };

  window.validate = function(node) {
    var card_number;
    card_number = document.getElementById(node).value;
    if (card_number) {
      if (is_valid_cc(card_number)) {
        return alert("Card is valid!!");
      } else {
        return alert("Card is NOT valid!!");
      }
    }
  };

}).call(this);

//# sourceMappingURL=luhn.js.map