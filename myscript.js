const markup = `
  <div class="featured-heading lato">Featured Speakers</div>
  <div class="line"></div>
  <div class="speakers">  
    <div class="row">
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
    <div class="row">
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
    <div class="row">
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
  </div>
`;

const section = document.querySelector('.featured');

section.innerHTML = markup;
