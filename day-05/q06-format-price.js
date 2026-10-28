function formatPrice(amount) {
  const formatted = amount.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return "Rs " + formatted;
}

// Testing output
console.log(formatPrice(1250.5)); 
console.log(formatPrice(99));     