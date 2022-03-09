const markup = `
  <h2 class="featured-heading lato">Featured Artists</h2>
  <div class="line"></div>
  <div class="speakers">  
    <div class="row visible">
      <div class="speaker">
        <img class="speaker-img" src="./images/imagine.png" alt="first artist">
        <div class="speaker-info">
          <h3 class="name lato">Imagine Dragons</h3>
          <div class="italics lato">
            <em>American Pop Rock Band from Las Vegas, Nevada</em>
          </div>
          <div class="line2"></div>
          <p class="background lato">
            Imagine Dragons consists of lead singer Dan Reynolds, guitarist Wayne Sermon, bassist Ben McKee, and drummer Daniel Platzman.
          </p>
        </div>
      </div>
      <div class="speaker">
        <img class="speaker-img" src="./images/doja.png" alt="second artist">
        <div class="speaker-info">
          <h3 class="name lato">Doja Cat</h3>
          <div class="italics lato">
            <em>American Rapper</em>
          </div>
          <div class="line2"></div>
          <p class="background lato">
            Amala Ratna Zandile Dlamini, known professionally as Doja Cat, is an American rapper, singer, and songwriter. 
          </p>
        </div>
      </div>
    </div>
    <div class="row find-row">
      <div class="speaker">
        <img class="speaker-img" src="./images/taylor.png" alt="third artist">
        <div class="speaker-info">
          <h3 class="name lato">Taylor Swift</h3>
          <div class="italics lato">
            <em>American singer-songwriter</em>
          </div>
          <div class="line2"></div>
          <p class="background lato">
            Her discography spans multiple genres, and her narrative songwriting, which is often inspired by her personal life, has received widespread media coverage and critical praise.
          </p>
        </div>
      </div>
      <div class="speaker">
        <img class="speaker-img" src="./images/okgo.png" alt="fourth artist">
        <div class="speaker-info">
          <h3 class="name lato">OK Go</h3>
          <div class="italics lato">
            <em>American Rock Band</em>
          </div>
          <div class="line2"></div>
          <p class="background lato">
            The band is composed of Damian Kulash, Tim Nordwind, Dan Konopka, and Andy Ross, who joined them in 2005, replacing Andy Duncan.
          </p>
        </div>
      </div>
    </div>
    <div class="row find-row">
      <div class="speaker">
        <img class="speaker-img" src="./images/qveen.png" alt="fifth artist">
        <div class="speaker-info">
          <h3 class="name lato">Qveen Herby</h3>
          <div class="italics lato">
            <em>American Rapper, Singer, Songwriter, and Entrepreneur</em>
          </div>
          <div class="line2"></div>
          <p class="background lato">
            Three of her EPs charted within Billboard charts in the US. Herby released a series of singles throughout 2020-2021 which lead to Herby eventually releasing her debut album A Woman on May 21, 2021.
          </p>
        </div>
      </div>
      <div class="speaker">
        <img class="speaker-img" src="./images/maggie.png" alt="sixth speaker">
        <div class="speaker-info">
          <h3 class="name lato">Maggie Rogers</h3>
          <div class="italics lato">
            <em>American Singer/ Song-writer</em>
          </div>
          <div class="line2"></div>
          <p class="background lato">
            Her big break came when her song "Alaska" was played to Pharrell Williams during a master class at New York University's Clive Davis Institute of Recorded Music.
          </p>
        </div>
      </div>
    </div>
    <button class="lato default more">More<img src="./images/down.png"></button>
  </div>
`;

const section = document.querySelector('.featured');

section.innerHTML = markup;

const moreButton = document.querySelector('.more');
const hiddenRows = document.querySelectorAll('.find-row');
const hamburger = document.querySelector('.hamburger');
const xIcon = document.querySelector('.close');
const mobileMenu = document.querySelector('.find-menu');

function displayRows() {
  for (let i = 0; i < hiddenRows.length; i += 1) {
    hiddenRows[i].classList.add('visible');
    moreButton.classList.remove('more');
  }
}

function displayMenu() {
  mobileMenu.classList.toggle('mobile-menu');
}

moreButton.addEventListener('click', displayRows);
hamburger.addEventListener('click', displayMenu);
xIcon.addEventListener('click', displayMenu);