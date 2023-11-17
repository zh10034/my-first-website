const h2 = document.createElement('h2');
h2.textContent = "This content added by JS";
document.querySelector('body').appendChild(h2);

function scrollToSection(Home) {
    const section = document.getElementById(Home);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function scrollToSection(About) {
    const section = document.getElementById(About);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function scrollToSection(Contact) {
    const section = document.getElementById(Contact);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }