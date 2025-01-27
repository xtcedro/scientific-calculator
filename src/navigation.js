// navigation.js

// Function to dynamically generate navigation links
function createNavigation() {
    const navigation = document.getElementById('dynamic-navigation');
  
    const links = [
      { href: '#calculator', label: 'Calculator' },
      { href: '#graphing', label: 'Graphing' },
      { href: '#history', label: 'History' }
    ];
  
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
  
    ul.style.display = 'flex';
    ul.style.justifyContent = 'center';
    ul.style.gap = '1.5rem';
    ul.style.padding = '0';
    ul.style.margin = '0';
    ul.style.listStyle = 'none';
  
    links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
  
      a.href = link.href;
      a.textContent = link.label;
      a.style.textDecoration = 'none';
      a.style.color = '#fff';
      a.style.fontWeight = 'bold';
      a.style.padding = '0.5rem 1rem';
      a.style.borderRadius = '4px';
      a.style.transition = 'background 0.3s';
  
      // Add hover effect
      a.addEventListener('mouseover', () => (a.style.background = '#45a049'));
      a.addEventListener('mouseout', () => (a.style.background = 'transparent'));
  
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    nav.appendChild(ul);
    navigation.appendChild(nav);
  }
  
  // Initialize navigation
  createNavigation();