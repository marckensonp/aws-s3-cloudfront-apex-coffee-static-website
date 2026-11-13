function selectRoast(roastName) {
  document.getElementById('roastChoice').value = roastName;
  document.getElementById('subscribe').scrollIntoView({ behavior: 'smooth' });
}

function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById('customerName').value;
  const roast = document.getElementById('roastChoice').value;
  const banner = document.getElementById('confirmation');
  
  banner.style.display = 'block';
  banner.textContent = `Thanks, ${name}! Your ${roast} launch reservation is confirmed.`;
  
  document.getElementById('subForm').reset();
}
