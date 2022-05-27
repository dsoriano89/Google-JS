const App = {
  init() {
    console.log('Iniciando...');
    this.controllers.create_Base_Structure();
    this.controllers.header_secondary_Elements();
    this.controllers.body_secondary_Elements();
    this.controllers.footer_secondary_Elements();
    console.log('Finalizado!');
  },
  state: {},
  controllers: {
    create_Base_Structure() {
      console.log('Iniciando layout...');
      const els = App.elements;

      els.app.appendChild(els.header.container_1);
      this.createStyle(els.header.container_1,
        {
          fontSize: '15px',
          display: 'flex',
          justifyContent: 'space-between',
        });
      els.app.appendChild(els.body.container_2);
      this.createStyle(els.body.container_2,
        {
          fontSize: '15px',
          width: '100%',
          marginTop: '100px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        });

      els.app.appendChild(els.footer.container_3);
      this.createStyle(els.footer.container_3,
        {
          fontSize: '15px',
        });

      console.log('Layout finalizado!');
    },
    header_secondary_Elements() {
      const hse = App.elements.header;

      const store = document.createElement('span');
      const about = document.createElement('span');
      const gmail = document.createElement('span');
      const images = document.createElement('span');
      const dots = document.createElement('button');
      const imgButton = document.createElement('img');
      const avatar = document.createElement('img');
      const modal = document.createElement('div');
      const icon1 = document.createElement('img');
      const icon2 = document.createElement('img');
      const icon3 = document.createElement('img');
      const icon4 = document.createElement('img');
      const icon5 = document.createElement('img');
      const icon6 = document.createElement('img');

      hse.container_1.appendChild(hse.left);
      hse.container_1.appendChild(hse.right);
      hse.left.appendChild(about);
      hse.left.appendChild(store);
      hse.right.appendChild(gmail);
      hse.right.appendChild(images);
      hse.right.appendChild(dots);
      hse.right.appendChild(avatar);
      dots.appendChild(modal);
      dots.appendChild(imgButton);

      modal.appendChild(icon1);
      modal.appendChild(icon2);
      modal.appendChild(icon3);
      modal.appendChild(icon4);
      modal.appendChild(icon5);
      modal.appendChild(icon6);

      about.innerHTML = 'About';
      store.innerHTML = 'Store';
      gmail.innerHTML = 'Gmail';
      images.innerHTML = 'Images';
      imgButton.src = 'https://icon-library.com/images/dot-icon/dot-icon-20.jpg';
      avatar.src = 'https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png';
      icon1.src = 'https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg';
      icon2.src = 'https://cdn.worldvectorlogo.com/logos/google-maps-2020-icon.svg';
      icon3.src = 'https://i.pinimg.com/474x/b8/76/a4/b876a4053b39a61dd57568992879a92c.jpg';
      icon4.src = 'https://www.pinclipart.com/picdir/big/202-2024262_app-store-google-play-logo-vector-vector-and.png';
      icon5.src = 'https://cdn-icons-png.flaticon.com/512/281/281759.png';
      icon6.src = 'https://github.com/ingate-educa/fullstack-assets/raw/main/v5/Logo-short.png';

      this.createStyle(hse.left, {
        padding: '5px',
        display: 'flex',
      });

      this.createStyle(store, {
        paddingLeft: '10px',
        display: 'flex',
        paddingTop: ' 3px',
      });
      this.createStyle(about, {
        paddingTop: ' 3px',
      });

      this.createStyle(hse.right, {
        display: 'flex',
        padding: '5px',
      });
      this.createStyle(gmail, {
        paddingRight: '10px',
        paddingTop: ' 3px',
      });
      this.createStyle(images, {
        paddingRight: '10px',
        paddingTop: ' 3px',
      });
      this.createStyle(dots, {
        paddingRight: '10px',
        marginRight: '5px',
        border: 'none',
        background: 'white',
        cursor: 'pointer',
      });
      this.createStyle(imgButton, { width: '25px', height: '25px' });
      this.createStyle(avatar, {
        paddingRight: '10px',
        width: '25px',
        height: '25px',
      });
      this.createStyle(modal, {
        width: '300px',
        height: '250px',
        display: 'none',
        position: 'fixed',
        marginTop: '25px',
        marginLeft: '-250px',
        borderRadius: '5px',
        paddingTop: '60px',
        boxShadow: '1px 1px 10px 2px lightgray',
      });
      this.createStyle(icon1, { with: '50px', height: '50px', padding: '10px 15px' });
      this.createStyle(icon2, { with: '50px', height: '45px', padding: '10px 15px' });
      this.createStyle(icon3, { with: '50px', height: '50px', padding: '10px 15px' });
      this.createStyle(icon4, { with: '50px', height: '50px', padding: '10px 15px' });
      this.createStyle(icon5, { with: '50px', height: '50px', padding: '10px 15px' });
      this.createStyle(icon6, { with: '50px', height: '50px', padding: '10px 15px' });

      about.onmouseover = (e) => {
        about.style.textDecoration = 'underline';
      };
      about.onmouseout = (e) => {
        about.style.textDecoration = 'none';
      };
      store.onmouseover = (e) => {
        store.style.textDecoration = 'underline';
      };
      store.onmouseout = (e) => {
        store.style.textDecoration = 'none';
      };
      gmail.onmouseover = (e) => {
        gmail.style.textDecoration = 'underline';
      };
      gmail.onmouseout = (e) => {
        gmail.style.textDecoration = 'none';
      };
      images.onmouseover = (e) => {
        images.style.textDecoration = 'underline';
      };
      images.onmouseout = (e) => {
        images.style.textDecoration = 'none';
      };

      dots.onclick = (e) => {
        modal.style.display = 'block';
      };
      modal.onmouseleave = (e) => {
        modal.style.display = 'none';
      };
    },
    body_secondary_Elements() {
      const bse = App.elements.body;

      const logo = document.createElement('img');
      const lupa = document.createElement('img');
      const input = document.createElement('input');
      const mic = document.createElement('img');
      const boxButtons = document.createElement('div');
      const btnRight = document.createElement('button');
      const btnLeft = document.createElement('button');
      const box = document.createElement('div');
      const text1 = document.createElement('div');
      const text2 = document.createElement('a');

      bse.container_2.appendChild(logo);
      bse.container_2.appendChild(bse.searchBox);
      bse.searchBox.appendChild(lupa);
      bse.searchBox.appendChild(input);
      bse.searchBox.appendChild(mic);
      bse.container_2.appendChild(bse.boxButtons);
      bse.boxButtons.appendChild(btnLeft);
      bse.boxButtons.appendChild(btnRight);
      bse.container_2.appendChild(box);
      box.appendChild(text1);
      box.appendChild(text2);

      logo.src = 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg';
      logo.style.width = '350px';
      logo.style.height = '200px';
      lupa.src = 'https://images.vexels.com/media/users/3/195032/isolated/lists/5c8f453f712deaccf64d803b6578abd6-escola-de-icones-lisos-de-lupa.png';
      mic.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/417px-Google_mic.svg.png?20210606084256';
      btnLeft.innerHTML = 'Google search';
      btnRight.innerHTML = "I'm feeling lucky";
      text1.innerHTML = 'Google ofered in: ';
      text2.innerHTML = ' Português (Brasil).';

      this.createStyle(logo, {
      });
      this.createStyle(bse.searchBox, {
        width: '520px',
        height: '35',
        borderRadius: '50px',
        display: 'flex',
        paddingLeft: '20px',
        paddingTop: '10px',
        paddingBottom: '3px',
        marginBottom: '40px',
        boxShadow: '1px 1px 10px 2px lightgray',
      });
      this.createStyle(lupa, {
        width: '18px',
        height: '18px',
      });
      this.createStyle(input, {
        border: 'none',
        width: '445px',
        height: '25px',
        paddingRight: '15px',
      });
      this.createStyle(mic, {
        width: '13px',
        height: '18px',
      });
      this.createStyle(bse.boxButtons, {
        display: 'flex',
        width: '400px',
        height: '60px',
      });
      this.createStyle(btnLeft, {
        border: 'none',
        width: '150px',
        height: '45px',
        background: '#E8E8E8',
        marginRight: '100px',
      });
      this.createStyle(btnRight, {
        border: 'none',
        width: '150px',
        height: '45px',
        background: '#E8E8E8',
      });
      this.createStyle(box, {
        width: '400px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '30px',
      });
      this.createStyle(text1, {
        paddingRight: '3px',
      });
      this.createStyle(text2, {
        color: 'blue',
      });
      btnLeft.onmouseover = (e) => {
        btnLeft.style.border = '1px solid black';
      };
      btnLeft.onmouseout = (e) => {
        btnLeft.style.border = 'none';
      };
      btnRight.onmouseover = (e) => {
        btnRight.style.border = '1px solid black';
      };
      btnRight.onmouseout = (e) => {
        btnRight.style.border = 'none';
      };
      text2.onmouseover = (e) => {
        text2.style.textDecoration = 'underline';
      };
      text2.onmouseout = (e) => {
        text2.style.textDecoration = 'none';
      };
    },
    footer_secondary_Elements() {
      const fse = App.elements.footer;

      const footerTop = document.createElement('div');
      const footerTitle = document.createElement('div');
      const footerBottom = document.createElement('div');
      const advertising = document.createElement('div');
      const business = document.createElement('div');
      const works = document.createElement('div');
      const privacy = document.createElement('div');
      const terms = document.createElement('div');
      const settings = document.createElement('div');

      footerTitle.innerHTML = 'Carbon neutral since 2007';
      advertising.innerHTML = 'Advertising';
      business.innerHTML = 'Business';
      works.innerHTML = 'Works';
      privacy.innerHTML = 'Privacy';
      terms.innerHTML = 'Terms';
      settings.innerHTML = 'Settings';

      fse.container_3.appendChild(footerTop);
      footerTop.appendChild(footerTitle);
      fse.container_3.appendChild(footerBottom);
      footerBottom.appendChild(advertising);
      footerBottom.appendChild(business);
      footerBottom.appendChild(works);
      footerBottom.appendChild(privacy);
      footerBottom.appendChild(terms);
      footerBottom.appendChild(settings);

      this.createStyle(footerTop, {
        display: 'flex',
        justifyContent: 'center',
        background: '#E8E8E8',
        marginTop: '150px',
        paddingTop: '10px',
        paddingBottom: '20px',
      });
      this.createStyle(footerTitle, {
        width: 'fit-content',
      });
      this.createStyle(footerBottom, {
        display: 'flex',
        justifyContent: 'space-around',
        background: '#E8E8E8',
        paddingTop: '20px',
        paddingBottom: '20px',
        borderTop: '1px solid lightgray',
      });
      this.createStyle(advertising, {
        width: 'fit-content',
      });
      this.createStyle(business, {
        width: 'fit-content',
      });
      this.createStyle(works, {
        width: 'fit-content',
      });
      this.createStyle(privacy, {
        width: 'fit-content',
      });
      this.createStyle(terms, {
        width: 'fit-content',
      });
      this.createStyle(settings, {
        width: 'fit-content',
      });
      advertising.onmouseover = (e) => {
        advertising.style.textDecoration = 'underline';
      };
      advertising.onmouseout = (e) => {
        advertising.style.textDecoration = 'none';
      };
      business.onmouseover = (e) => {
        business.style.textDecoration = 'underline';
      };
      business.onmouseout = (e) => {
        business.style.textDecoration = 'none';
      };
      works.onmouseover = (e) => {
        works.style.textDecoration = 'underline';
      };
      works.onmouseout = (e) => {
        works.style.textDecoration = 'none';
      };
      privacy.onmouseover = (e) => {
        privacy.style.textDecoration = 'underline';
      };
      privacy.onmouseout = (e) => {
        privacy.style.textDecoration = 'none';
      };
      terms.onmouseover = (e) => {
        terms.style.textDecoration = 'underline';
      };
      terms.onmouseout = (e) => {
        terms.style.textDecoration = 'none';
      };
      settings.onmouseover = (e) => {
        settings.style.textDecoration = 'underline';
      };
      settings.onmouseout = (e) => {
        settings.style.textDecoration = 'none';
      };
    },

    createStyle(el, style) {
      for (const key in style) { el.style[key] = style[key]; }
    },
  },

  elements: {
    app: document.getElementById('app'),
    header: {
      container_1: document.createElement('div'),
      left: document.createElement('div'),
      right: document.createElement('div'),
    },
    body: {
      container_2: document.createElement('div'),
      searchBox: document.createElement('div'),
      boxButtons: document.createElement('div'),
    },
    footer: {
      container_3: document.createElement('div'),

    },
  },
};
App.init();
