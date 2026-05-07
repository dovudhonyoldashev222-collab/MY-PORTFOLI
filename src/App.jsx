import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import { Send, Instagram, Facebook, Mail, Globe, Github as GithubIcon, ExternalLink, ShoppingBag, Layout, Code2, Download, User, Briefcase, MessageSquare, Home, Camera, ShieldCheck, UserPlus } from 'lucide-react';
import heroImg from './img/image.png'
import modernizeImg from './img/image copy.png'
import cameraServiceImg from './img/image copy 2.png'
import googleServiceImg from './img/00techfix-aisearch-googleFourByThree.jpg'
import appleServiceImg from './img/image copy 4.png'
const kofeImg = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop";
const estateImg = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop";
const coachingImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop";
import './App.css';

const translations = {
  uz: {
    nav: { main: 'Asosiy', about: 'Men haqimda', projects: 'Loyihalar', contact: 'Aloqa' },
    hero: { title: 'Salom, men', subtitle: 'Frontend dasturchi va Texnik mutaxassis', button: 'Bog\'lanish', name: 'Yuldashev Dovudhon' },
    about: {
      title: 'MEN HAQIMDA',
      personalInfos: 'Shaxsiy ma\'lumotlar',
      firstName: 'Ism',
      lastName: 'Familiya',
      age: 'Yosh',
      nationality: 'Millati',
      freelance: 'Frilans',
      address: 'Manzil',
      phone: 'Telefon',
      email: 'Email',
      telegram: 'Telegram',
      languages: 'Tillar',
      uzbek: 'O\'zbek',
      russian: 'Rus',
      available: 'Mavjud',
      downloadCv: 'CV yuklab olish',
      stats: {
        exp: 'Yillik tajriba',
        projects: 'Tugallangan loyihalar'
      }
    },
    services: {
      title: 'Qo\'shimcha Xizmatlar',
      s1: 'Kamera o\'rnatish',
      s1_desc: 'Xavfsizlik kameralarini o\'rnatish va sozlash.',
      s2: 'Google Account',
      s2_desc: 'Google va Gmail akkauntlarini ochish va xavfsizligini ta\'minlash.',
      s3: 'iCloud Account',
      s3_desc: 'Apple ID va iCloud akkauntlarini ochish va sozlash.'
    },
    projects: { title: 'Loyihalar', view: 'GitHub-da ko\'rish', p1: 'Happy Coaching', p1_desc: 'Coaching platformasi.', p2: 'Modernize', p2_desc: 'Mahsulotlar boshqaruvi.', p3: 'KOFE', p3_desc: 'Kofe menyu tizimi.', p4: 'Estate App', p4_desc: 'Ko\'chmas mulk platformasi.' },
    contact: { title: 'Aloqa', text: 'Savollaringiz bormi? Quyidagi formani to\'ldiring:', name: 'Ismingiz', email: 'Emailingiz', message: 'Xabaringiz', send: 'Yuborish' },
    footer: { rights: 'Barcha huquqlar himoyalangan.' }
  },
  ru: {
    nav: { main: 'Главная', about: 'Обо мне', projects: 'Проекты', contact: 'Контакт' },
    hero: { title: 'Привет, я', subtitle: 'Frontend разработчик и Технический специалист', button: 'Связаться', name: 'Юлдашев Довудхон' },
    about: {
      title: 'ОБО МНЕ',
      personalInfos: 'Личная информация',
      firstName: 'Имя',
      lastName: 'Фамилия',
      age: 'Возраст',
      nationality: 'Национальность',
      freelance: 'Фриланс',
      address: 'Адрес',
      phone: 'Телефон',
      email: 'Email',
      telegram: 'Телеграм',
      languages: 'Языки',
      uzbek: 'Узбекский',
      russian: 'Русский',
      available: 'Доступен',
      downloadCv: 'Скачать CV',
      stats: {
        exp: 'Лет опыта',
        projects: 'Завершенных проектов'
      }
    },
    services: {
      title: 'Дополнительные Услуги',
      s1: 'Установка камер',
      s1_desc: 'Установка и настройка камер видеонаблюдения.',
      s2: 'Google Account',
      s2_desc: 'Создание и обеспечение безопасности аккаунтов Google и Gmail.',
      s3: 'iCloud Account',
      s3_desc: 'Создание и настройка аккаунтов Apple ID и iCloud.'
    },
    projects: { title: 'Проекты', view: 'Смотреть на GitHub', p1: 'Happy Coaching', p1_desc: 'Коучинг платформа.', p2: 'Modernize', p2_desc: 'Управление продуктами.', p3: 'KOFE', p3_desc: 'Кофейное меню.', p4: 'Estate App', p4_desc: 'Платформа недвижимости.' },
    contact: { title: 'Контакт', text: 'Есть вопросы? Заполните форму ниже:', name: 'Ваше имя', email: 'Ваш Email', message: 'Ваше сообщение', send: 'Отправить' },
    footer: { rights: 'Все права защищены.' }
  },
  en: {
    nav: { main: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' },
    hero: { title: 'Hello, I am', subtitle: 'Frontend Developer & Technical Specialist', button: 'Contact Me', name: 'Yuldashev Dovudhon' },
    about: {
      title: 'ABOUT ME',
      personalInfos: 'Personal Infos',
      firstName: 'First Name',
      lastName: 'Last Name',
      age: 'Age',
      nationality: 'Nationality',
      freelance: 'Freelance',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      telegram: 'Telegram',
      languages: 'Languages',
      uzbek: 'Uzbek',
      russian: 'Russian',
      available: 'Available',
      downloadCv: 'Download CV',
      stats: {
        exp: 'Years of Experience',
        projects: 'Completed Projects'
      }
    },
    services: {
      title: 'Additional Services',
      s1: 'Camera Installation',
      s1_desc: 'Installation and configuration of security cameras.',
      s2: 'Google Account',
      s2_desc: 'Opening and securing Google and Gmail accounts.',
      s3: 'iCloud Account',
      s3_desc: 'Opening and configuring Apple ID and iCloud accounts.'
    },
    projects: { title: 'Projects', view: 'View on GitHub', p1: 'Happy Coaching', p1_desc: 'Coaching platform.', p2: 'Modernize', p2_desc: 'Products management.', p3: 'KOFE', p3_desc: 'Coffee menu system.', p4: 'Estate App', p4_desc: 'Real estate platform.' },
    contact: { title: 'Contact', text: 'Any questions? Fill out the form:', name: 'Your Name', email: 'Your Email', message: 'Your Message', send: 'Send' },
    footer: { rights: 'All rights reserved.' }
  }
};

function App() {
  const [lang, setLang] = useState('uz');
  const [formStatus, setFormStatus] = useState('');

  const t = translations[lang];

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xvgzlowz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="portfolio">
      <div className="main-wrapper">
        <header className="header-wrapper">
          <div className="top-lang-bar">
            <div className="lang-switcher">
              <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
              <button onClick={() => setLang('uz')} className={lang === 'uz' ? 'active' : ''}>UZ</button>
              <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'active' : ''}>RU</button>
            </div>
          </div>
          <nav className="navbar">
            <div className="logo">Portfoliom</div>
            <ul className="nav-links">
              <li><Link to="hero" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer' }}>{t.nav.main}</Link></li>
              <li><Link to="about" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer' }}>{t.nav.about}</Link></li>
              <li><Link to="services" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer' }}>{t.services.title}</Link></li>
              <li><Link to="projects" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer' }}>{t.nav.projects}</Link></li>
              <li><Link to="contact" smooth={true} duration={500} offset={-70} style={{ cursor: 'pointer' }}>{t.nav.contact}</Link></li>
            </ul>
          </nav>
        </header>

        <div className="sidebar-nav">
          <Link to="hero" smooth={true} duration={500} offset={-70} className="sidebar-link" activeClass="active" spy={true}><Home size={20} /></Link>
          <Link to="about" smooth={true} duration={500} offset={-70} className="sidebar-link" activeClass="active" spy={true}><User size={20} /></Link>
          <Link to="services" smooth={true} duration={500} offset={-70} className="sidebar-link" activeClass="active" spy={true}><Code2 size={20} /></Link>
          <Link to="projects" smooth={true} duration={500} offset={-70} className="sidebar-link" activeClass="active" spy={true}><Briefcase size={20} /></Link>
          <Link to="contact" smooth={true} duration={500} offset={-70} className="sidebar-link" activeClass="active" spy={true}><MessageSquare size={20} /></Link>
        </div>

        <Element name="hero">
          <section id="hero" className="hero-section">
            <div className="hero-container">
              <div className="hero-image">
                <img src={heroImg} alt="Dovudhon" />
              </div>
              <div className="hero-content">
                <h1>{t.hero.title} <span>{t.hero.name}</span></h1>
                <p>{t.hero.subtitle}</p>
                <Link to="contact" smooth={true} duration={500} offset={-70} className="cta-button" style={{ cursor: 'pointer' }}>{t.hero.button}</Link>
              </div>
            </div>
          </section>
        </Element>

        <Element name="about">
          <section id="about" className="section about-section-new">
            <h1 className="section-title">ABOUT <span>ME</span></h1>

            <div className="about-container">
              <div className="personal-info">
                <h3>{t.about.personalInfos}</h3>
                <div className="info-grid">
                  <div className="info-item"><span>{t.about.firstName}:</span> Dovudhon</div>
                  <div className="info-item"><span>{t.about.lastName}:</span> Yuldashev</div>
                  <div className="info-item"><span>{t.about.age}:</span> 27 {lang === 'en' ? 'Years' : lang === 'ru' ? 'лет' : 'yosh'}</div>
                  <div className="info-item"><span>{t.about.nationality}:</span> {t.about.uzbek}</div>
                  <div className="info-item"><span>{t.about.freelance}:</span> {t.about.available}</div>
                  <div className="info-item"><span>{t.about.address}:</span> Namangan</div>
                  <div className="info-item"><span>{t.about.phone}:</span> +998 95 212 19 99</div>
                  <div className="info-item"><span>{t.about.email}:</span> dovudhonyoldashev222@gmail.com</div>
                  <div className="info-item"><span>{t.about.telegram}:</span> @dovudhon_1208</div>
                  <div className="info-item"><span>Instagram:</span> @y_dovudhon</div>
                  <div class="info-item"><span>{t.about.languages}:</span> {t.about.uzbek}, {t.about.russian}</div>
                </div>
                <a href="/CV.html" target="_blank" className="download-cv-btn">
                  {t.about.downloadCv}
                  <span className="icon-circle"><Download size={18} /></span>
                </a>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <h2>1+</h2>
                  <p>{t.about.stats.exp}</p>
                </div>
                <div className="stat-card">
                  <h2>10+</h2>
                  <p>{t.about.stats.projects}</p>
                </div>
              </div>
            </div>
          </section>
        </Element>

        <Element name="services">
          <section id="services" className="section services-section">
            <h1 className="section-title"><span>{t.services.title.split(' ')[0]}</span> {t.services.title.split(' ')[1]}</h1>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-image">
                  <img src={cameraServiceImg} alt={t.services.s1} />
                </div>
                <div className="service-content">
                  <div className="service-icon"><Camera size={30} /></div>
                  <h3>{t.services.s1}</h3>
                  <p>{t.services.s1_desc}</p>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={googleServiceImg} alt={t.services.s2} />
                </div>
                <div className="service-content">
                  <div className="service-icon"><ShieldCheck size={30} /></div>
                  <h3>{t.services.s2}</h3>
                  <p>{t.services.s2_desc}</p>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={appleServiceImg} alt={t.services.s3} />
                </div>
                <div className="service-content">
                  <div className="service-icon"><UserPlus size={30} /></div>
                  <h3>{t.services.s3}</h3>
                  <p>{t.services.s3_desc}</p>
                </div>
              </div>
            </div>
          </section>
        </Element>

        <Element name="projects">
          <section id="projects" className="section projects-section">
            <h2>{t.projects.title}</h2>
            <div className="projects-wrapper">
              <div className="projects-grid">
                <div className="project-card">
                  <div className="project-image">
                    <img src={coachingImg} alt="Happy Coaching" />
                  </div>
                  <div className="project-info">
                    <h3>{t.projects.p1}</h3>
                    <p>{t.projects.p1_desc}</p>
                    <div className="project-actions">
                      <a href="https://happy-coaching.vercel.app/" target="_blank" rel="noopener noreferrer" className="demo-btn primary">
                        <ExternalLink size={18} />
                        <span>Vercel</span>
                      </a>
                      <a href="https://github.com/dovudhonyoldashev222-collab/happy-coaching" target="_blank" rel="noopener noreferrer" className="github-btn">
                        <GithubIcon size={18} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-image">
                    <img src={modernizeImg} alt="Modernize" />
                  </div>
                  <div className="project-info">
                    <h3>{t.projects.p2}</h3>
                    <p>{t.projects.p2_desc}</p>
                    <div className="project-actions">
                      <a href="https://products1-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="demo-btn primary">
                        <ExternalLink size={18} />
                        <span>Vercel</span>
                      </a>
                      <a href="https://github.com/dovudhonyoldashev222-collab/products" target="_blank" rel="noopener noreferrer" className="github-btn">
                        <GithubIcon size={18} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-image">
                    <img src={kofeImg} alt="KOFE" />
                  </div>
                  <div className="project-info">
                    <h3>{t.projects.p3}</h3>
                    <p>{t.projects.p3_desc}</p>
                    <div className="project-actions">
                      <a href="https://kofe-smoky.vercel.app" target="_blank" rel="noopener noreferrer" className="demo-btn primary">
                        <ExternalLink size={18} />
                        <span>Vercel</span>
                      </a>
                      <a href="https://github.com/dovudhonyoldashev222-collab/KOFE" target="_blank" rel="noopener noreferrer" className="github-btn">
                        <GithubIcon size={18} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-card">
                  <div className="project-image">
                    <img src={estateImg} alt="Estate App" />
                  </div>
                  <div className="project-info">
                    <h3>{t.projects.p4}</h3>
                    <p>{t.projects.p4_desc}</p>
                    <div className="project-actions">
                      <a href="https://estate-git-master-dovudhonyoldashev222-collabs-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="demo-btn primary">
                        <ExternalLink size={18} />
                        <span>Vercel</span>
                      </a>
                      <a href="https://github.com/dovudhonyoldashev222-collab/estate" target="_blank" rel="noopener noreferrer" className="github-btn">
                        <GithubIcon size={18} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>

        <Element name="contact">
          <section id="contact" className="section contact-section">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <form
              className="contact-form"
              onSubmit={handleContactSubmit}
            >
              <input type="text" name="name" placeholder={t.contact.name} required />
              <input type="email" name="email" placeholder={t.contact.email} required />
              <textarea name="message" placeholder={t.contact.message} rows="5" required></textarea>
              <button type="submit" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? (lang === 'uz' ? 'Yuborilmoqda...' : lang === 'ru' ? 'Отправка...' : 'Sending...') : t.contact.send}
              </button>

              {formStatus === 'success' && (
                <p style={{ color: '#4ade80', marginTop: '1rem', fontWeight: 'bold' }}>
                  {lang === 'uz' ? 'Xabaringiz muvaffaqiyatli yuborildi!' : lang === 'ru' ? 'Ваше сообщение успешно отправлено!' : 'Your message has been sent successfully!'}
                </p>
              )}
              {formStatus === 'error' && (
                <p style={{ color: '#f87171', marginTop: '1rem', fontWeight: 'bold' }}>
                  {lang === 'uz' ? 'Xatolik yuz berdi. Qayta urinib ko\'ring.' : lang === 'ru' ? 'Произошла ошибка. Попробуйте еще раз.' : 'An error occurred. Please try again.'}
                </p>
              )}
            </form>
          </section>
        </Element>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-socials">
              <a href="https://t.me/dovudhon_1208" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <Send size={24} />
              </a>
              <a href="https://instagram.com/y_dovudhon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/dovudhon.yuldashev" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="mailto:dovudhonyoldashev222@gmail.com" aria-label="Gmail">
                <Mail size={24} />
              </a>
            </div>
            <p>&copy; 2026 {t.hero.name}. {t.footer.rights}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
