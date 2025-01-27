// index.js

// Function to dynamically insert navigation links
function setupNavigation() {
    const navigation = document.getElementById('dynamic-navigation');
  
    const navLinks = [
      { id: 'calculator', label: 'Calculator' },
      { id: 'graphing', label: 'Graphing' },
      { id: 'history', label: 'History' }
    ];
  
    const ul = document.createElement('ul');
    ul.style.display = 'flex';
    ul.style.justifyContent = 'center';
    ul.style.listStyle = 'none';
    ul.style.padding = '0';
  
    navLinks.forEach(link => {
      const li = document.createElement('li');
      li.style.margin = '0 1rem';
  
      const a = document.createElement('a');
      a.href = `#${link.id}`;
      a.textContent = link.label;
      a.style.textDecoration = 'none';
      a.style.color = 'white';
      a.style.fontWeight = 'bold';
  
      // Add hover effect
      a.addEventListener('mouseover', () => (a.style.color = '#ccc'));
      a.addEventListener('mouseout', () => (a.style.color = 'white'));
  
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    navigation.appendChild(ul);
  }
  
  // Initialize the application
  function initApp() {
    setupNavigation();
  
    // Placeholder logic for calculator, graphing, and history sections
    document.getElementById('calculator-container').textContent = 
      'Calculator UI will go here.';
    document.getElementById('graph-container').textContent = 
      'Graphing tool will go here.';
    document.getElementById('history-container').textContent = 
      'History log will go here.';
  }
  
  // Run the application when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initApp);