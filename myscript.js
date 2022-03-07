const markup = `
  <div class="featured-heading lato">Featured Speakers</div>
  <div class="line"></div>
  <div class="speakers">  
    <div class="row visible">
      <div class="speaker">
        <img class="speaker-img" src="./images/Speaker1.png">
        <div class="speaker-info">
          <div class="name lato">Yochai Benkler</div>
          <div class="italics lato">
            <em>Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</em>
          </div>
          <div class="line2"></div>
          <div class="background lato">
            Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.
          </div>
        </div>
      </div>
      <div class="speaker">
        <img class="speaker-img" src="./images/Speaker2.png">
        <div class="speaker-info">
          <div class="name lato">Yochai Benkler</div>
          <div class="italics lato">
            <em>Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</em>
          </div>
          <div class="line2"></div>
          <div class="background lato">
            Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.
          </div>
        </div>
      </div>
    </div>
    <div class="row find-row">
      <div class="speaker">
        <img class="speaker-img" src="./images/Speaker3.png">
        <div class="speaker-info">
          <div class="name lato">Yochai Benkler</div>
          <div class="italics lato">
            <em>Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</em>
          </div>
          <div class="line2"></div>
          <div class="background lato">
            Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.
          </div>
        </div>
      </div>
      <div class="speaker">
        <img class="speaker-img" src="./images/Speaker4.png">
        <div class="speaker-info">
          <div class="name lato">Yochai Benkler</div>
          <div class="italics lato">
            <em>Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</em>
          </div>
          <div class="line2"></div>
          <div class="background lato">
            Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.
          </div>
        </div>
      </div>
    </div>
    <div class="row find-row">
      <div class="speaker">
        <img class="speaker-img" src="./images/Speaker5.png">
        <div class="speaker-info">
          <div class="name lato">Yochai Benkler</div>
          <div class="italics lato">
            <em>Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</em>
          </div>
          <div class="line2"></div>
          <div class="background lato">
            Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.
          </div>
        </div>
      </div>
      <div class="speaker">
        <img class="speaker-img" src="./images/Speaker6.png">
        <div class="speaker-info">
          <div class="name lato">Yochai Benkler</div>
          <div class="italics lato">
            <em>Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</em>
          </div>
          <div class="line2"></div>
          <div class="background lato">
            Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.
          </div>
        </div>
      </div>
    </div>
    <button class="lato more">More<img src="./images/down.png"></button>
  </div>
`;

const section = document.querySelector('.featured');

section.innerHTML = markup;

const moreButton = document.querySelector('.more');
const hiddenRows = document.querySelectorAll('.find-row');

function displayRows() {
  for(let i = 0; i < hiddenRows.length; i += 1) {
    hiddenRows[i].classList.add('visible');
    moreButton.classList.add('invisible');
  }
}

moreButton.addEventListener('click', displayRows);