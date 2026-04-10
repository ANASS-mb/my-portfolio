/* ===================================
   NETOIYAGE – Main Script
   i18n + RTL + UI Logic
   =================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ═══════════════════════════════════
  // TRANSLATIONS
  // ═══════════════════════════════════
  const translations = {
    fr: {
      // Meta / Title
      page_title: "Netoiyage – Services de Nettoyage Professionnels à Oujda, Maroc",
      meta_description: "Services de nettoyage professionnels à Oujda, Maroc. Nettoyage résidentiel, commercial, en profondeur et après construction. Demandez un devis gratuit !",

      // Nav
      nav_home: "Accueil",
      nav_services: "Services",
      nav_about: "À Propos",
      nav_contact: "Contact",
      nav_cta: "Devis Gratuit",

      // Hero
      hero_badge: "Nouvellement créée — Standards modernes, énergie nouvelle",
      hero_title: 'Services de Nettoyage Professionnels à <span>Oujda</span>',
      hero_subtitle: "Votre partenaire de confiance pour des espaces impeccables. Nous offrons un nettoyage méticuleux avec des produits écologiques — pour votre bien-être.",
      hero_cta: "Demander un Devis Gratuit",
      hero_cta_secondary: "Nos Services",
      stat_satisfaction: "Taux de Satisfaction",
      stat_availability: "Disponibilité",
      stat_clients: "Clients Satisfaits",

      // Services
      services_label: "Nos Services",
      services_title: "Des Solutions de Nettoyage Sur Mesure",
      services_subtitle: "Du ménage quotidien au nettoyage en profondeur, nous traitons tout avec précision et soin.",
      service1_title: "Nettoyage Résidentiel",
      service1_desc: "Ménage régulier, aide au linge et désinfection de la cuisine — gardez votre espace de vie frais et accueillant chaque jour.",
      service2_title: "Bureaux & Commercial",
      service2_desc: "Maintenez un environnement de travail impeccable. Nous nettoyons bureaux, espaces commerciaux et locaux professionnels selon vos horaires.",
      service3_title: "Après Construction",
      service3_desc: "Élimination de la poussière, des débris et des résidus après rénovation. Nous préparons votre espace pour une utilisation immédiate.",
      service4_title: "Nettoyage en Profondeur",
      service4_desc: "Nettoyage intensif de A à Z : tapis, meubles rembourrés, cuisines et salles de bain — idéal pour un rafraîchissement saisonnier.",

      // Why Us
      whyus_label: "Pourquoi Nous Choisir",
      whyus_title: "L'Équipe de Nettoyage de Confiance à Oujda",
      whyus_subtitle: "Nouvellement créée avec des normes modernes, nous combinons expertise locale et standards professionnels pour des résultats visibles.",
      whyus_bignumber: "Nouvelle",
      whyus_biglabel: "Entreprise Fraîchement Créée à Oujda — Région de l'Oriental",
      trust_title: "Vérifiée & Assurée",
      trust_sub: "Entreprise de nettoyage agréée",
      feature1_title: "Fiable & Digne de Confiance",
      feature1_desc: "Personnel vérifié et en uniforme, toujours à l'heure. Votre sécurité est notre priorité.",
      feature2_title: "Produits Écologiques",
      feature2_desc: "Nous utilisons des agents de nettoyage biodégradables et non toxiques, sûrs pour votre famille, vos animaux et l'environnement.",
      feature3_title: "Professionnels Formés",
      feature3_desc: "Notre équipe suit une formation rigoureuse sur les dernières techniques de nettoyage et protocoles de sécurité.",
      feature4_title: "Présence Locale",
      feature4_desc: "Fièrement basée à Oujda, nous comprenons les besoins des foyers et entreprises de toute la région de l'Oriental.",

      // Contact
      contact_label: "Contactez-Nous",
      contact_title: "Demandez un Devis Gratuit",
      contact_subtitle: "Dites-nous ce dont vous avez besoin et nous vous répondrons sous 24 heures — ou contactez-nous instantanément via WhatsApp.",
      form_name: "Nom Complet",
      form_name_ph: "ex. Ahmed Benali",
      form_phone: "Numéro de Téléphone",
      form_phone_ph: "ex. +212 6XX XXX XXX",
      form_service: "Service Souhaité",
      form_select_default: "Sélectionnez un service…",
      form_opt_residential: "Nettoyage Résidentiel",
      form_opt_commercial: "Bureaux & Commercial",
      form_opt_postconstruction: "Après Construction",
      form_opt_deep: "Nettoyage en Profondeur",
      form_opt_other: "Autre",
      form_message: "Message",
      form_message_ph: "Décrivez vos besoins en nettoyage…",
      form_submit: "Envoyer la Demande",
      form_success_title: "Message Envoyé !",
      form_success_msg: "Merci de nous avoir contactés. Nous vous répondrons sous 24 heures.",

      // Contact Info
      info_location_title: "Notre Adresse",
      info_location_text: "Oujda, Région de l'Oriental<br/>Maroc",
      info_phone_title: "Appelez-Nous",
      info_phone_text: "+212 6XX XXX XXX<br/>Lun – Sam, 8h – 19h",
      info_email_title: "Email",
      wa_title: "💬 Vous préférez WhatsApp ?",
      wa_desc: "Discutez avec nous instantanément pour un devis rapide ou toute question.",
      wa_btn: "Discuter sur WhatsApp",

      // Footer
      footer_desc: "Votre partenaire de confiance pour le nettoyage professionnel à Oujda et la région de l'Oriental. Espaces impeccables, visages heureux.",
      footer_links_title: "Liens Rapides",
      footer_social_title: "Suivez-Nous",
      footer_copy: "© ",
      footer_rights: "Tous droits réservés.",
      footer_made: "Fait avec NOUVEAU TECH à Oujda, Maroc"
    },

    ar: {
      // Meta / Title
      page_title: "نتوياج – خدمات التنظيف المهنية في وجدة، المغرب",
      meta_description: "خدمات تنظيف احترافية في وجدة، المغرب. تنظيف منزلي، تجاري، عميق وبعد البناء. اطلب عرض أسعار مجاني!",

      // Nav
      nav_home: "الرئيسية",
      nav_services: "خدماتنا",
      nav_about: "من نحن",
      nav_contact: "اتصل بنا",
      nav_cta: "عرض أسعار مجاني",

      // Hero
      hero_badge: "شركة حديثة التأسيس — معايير عصرية وطاقة جديدة",
      hero_title: 'خدمات التنظيف المهنية في <span>وجدة</span>',
      hero_subtitle: "شريككم الموثوق لمساحات نظيفة ولامعة. نقدم تنظيفاً دقيقاً بمنتجات صديقة للبيئة — لراحتكم وسلامتكم.",
      hero_cta: "اطلب عرض أسعار مجاني",
      hero_cta_secondary: "خدماتنا",
      stat_satisfaction: "نسبة الرضا",
      stat_availability: "التوفر",
      stat_clients: "عملاء راضون",

      // Services
      services_label: "خدماتنا",
      services_title: "حلول تنظيف مصممة خصيصاً لكم",
      services_subtitle: "من التنظيف اليومي إلى التنظيف العميق المكثف، نتعامل مع كل شيء بدقة وعناية.",
      service1_title: "التنظيف المنزلي",
      service1_desc: "تنظيف منزلي منتظم، مساعدة في الغسيل وتعقيم المطبخ — حافظوا على مساحة معيشتكم منعشة ومرحبة كل يوم.",
      service2_title: "المكاتب والمحلات التجارية",
      service2_desc: "حافظوا على بيئة عمل نظيفة ومتألقة. ننظف المكاتب والمساحات التجارية والمحلات المهنية وفق جدولكم الزمني.",
      service3_title: "بعد البناء",
      service3_desc: "إزالة الغبار والأنقاض والبقايا بعد التجديد. نحضّر مساحتكم الجديدة للاستخدام الفوري.",
      service4_title: "التنظيف العميق",
      service4_desc: "تنظيف مكثف من الألف إلى الياء: السجاد، الأثاث المنجد، المطابخ والحمامات — مثالي للتجديد الموسمي.",

      // Why Us
      whyus_label: "لماذا تختاروننا",
      whyus_title: "فريق التنظيف الموثوق في وجدة",
      whyus_subtitle: "شركة حديثة التأسيس بمعايير عصرية، نجمع بين الخبرة المحلية والمعايير المهنية لتقديم نتائج ملموسة.",
      whyus_bignumber: "جديدة",
      whyus_biglabel: "شركة حديثة التأسيس في وجدة — جهة الشرق",
      trust_title: "موثقة ومؤمّنة",
      trust_sub: "شركة تنظيف معتمدة",
      feature1_title: "موثوقة وجديرة بالثقة",
      feature1_desc: "فريق عمل تم التحقق من خلفيته ويرتدي زياً موحداً، دائماً في الموعد. أمانكم هو أولويتنا.",
      feature2_title: "منتجات صديقة للبيئة",
      feature2_desc: "نستخدم مواد تنظيف قابلة للتحلل وغير سامة، آمنة على عائلتكم وحيواناتكم والبيئة.",
      feature3_title: "محترفون مدربون",
      feature3_desc: "يخضع فريقنا لتدريب صارم على أحدث تقنيات التنظيف وبروتوكولات السلامة.",
      feature4_title: "حضور محلي",
      feature4_desc: "نفتخر بوجودنا في وجدة، ونفهم احتياجات المنازل والمؤسسات في جميع أنحاء جهة الشرق.",

      // Contact
      contact_label: "تواصلوا معنا",
      contact_title: "اطلبوا عرض أسعار مجاني",
      contact_subtitle: "أخبرونا بما تحتاجون وسنرد عليكم خلال 24 ساعة — أو تواصلوا معنا فوراً عبر واتساب.",
      form_name: "الاسم الكامل",
      form_name_ph: "مثال: أحمد بنعلي",
      form_phone: "رقم الهاتف",
      form_phone_ph: "مثال: +212 6XX XXX XXX",
      form_service: "الخدمة المطلوبة",
      form_select_default: "اختاروا خدمة…",
      form_opt_residential: "التنظيف المنزلي",
      form_opt_commercial: "المكاتب والمحلات التجارية",
      form_opt_postconstruction: "بعد البناء",
      form_opt_deep: "التنظيف العميق",
      form_opt_other: "أخرى",
      form_message: "الرسالة",
      form_message_ph: "صفوا احتياجاتكم من التنظيف…",
      form_submit: "إرسال الطلب",
      form_success_title: "تم إرسال الرسالة!",
      form_success_msg: "شكراً لتواصلكم معنا. سنرد عليكم خلال 24 ساعة.",

      // Contact Info
      info_location_title: "عنواننا",
      info_location_text: "وجدة، جهة الشرق<br/>المغرب",
      info_phone_title: "اتصلوا بنا",
      info_phone_text: "+212 6XX XXX XXX<br/>الاثنين – السبت، 8 ص – 7 م",
      info_email_title: "البريد الإلكتروني",
      wa_title: "💬 تفضلون واتساب؟",
      wa_desc: "تحدثوا معنا فوراً للحصول على عرض أسعار سريع أو أي استفسار.",
      wa_btn: "الدردشة عبر واتساب",

      // Footer
      footer_desc: "شريككم الموثوق للتنظيف المهني في وجدة وجهة الشرق. مساحات نظيفة، وجوه سعيدة.",
      footer_links_title: "روابط سريعة",
      footer_social_title: "تابعونا",
      footer_copy: "© ",
      footer_rights: "جميع الحقوق محفوظة.",
      footer_made: "صُنع بـ ❤️ في وجدة، المغرب"
    }
  };

  // ═══════════════════════════════════
  // LANGUAGE ENGINE
  // ═══════════════════════════════════
  let currentLang = localStorage.getItem('netoiyage_lang') || 'fr';

  const applyLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('netoiyage_lang', lang);

    const html = document.documentElement;
    const isArabic = lang === 'ar';

    // Set dir and lang attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', isArabic ? 'rtl' : 'ltr');

    // Toggle body class for CSS hooks
    document.body.classList.toggle('rtl', isArabic);
    document.body.classList.toggle('lang-ar', isArabic);
    document.body.classList.toggle('lang-fr', !isArabic);

    // Update all data-i18n elements
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!t[key]) return;

      // Some keys have HTML (e.g. hero_title with <span>)
      if (t[key].includes('<')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.setAttribute('placeholder', t[key]);
    });

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t.meta_description) {
      metaDesc.setAttribute('content', t.meta_description);
    }

    // Update page title
    if (t.page_title) document.title = t.page_title;

    // Update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  };

  // Language switcher click handlers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang !== currentLang) {
        applyLanguage(lang);
      }
    });
  });

  // Apply saved language on load
  applyLanguage(currentLang);

  // ═══════════════════════════════════
  // CACHE DOM ELEMENTS
  // ═══════════════════════════════════
  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.mobile-overlay');
  const allNavAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');
  const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
  const contactForm = document.getElementById('contactForm');
  const formBody = document.getElementById('formBody');
  const formSuccess = document.getElementById('formSuccess');

  // ── Sticky header on scroll ──
  const handleScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ── Mobile menu ──
  const toggleMenu = (open) => {
    const isOpen = typeof open === 'boolean' ? open : !navLinks.classList.contains('open');
    navLinks.classList.toggle('open', isOpen);
    hamburger.classList.toggle('active', isOpen);
    overlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburger.addEventListener('click', () => toggleMenu());
  overlay.addEventListener('click', () => toggleMenu(false));

  // Close menu on nav click (mobile)
  allNavAnchors.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) toggleMenu(false);
    });
  });

  // ── Active nav highlighting ──
  const updateActiveNav = () => {
    const scrollPos = window.scrollY + 120;
    let currentSection = '';

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop) {
        currentSection = section.getAttribute('id');
      }
    });

    allNavAnchors.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${currentSection}`
      );
    });
  };
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ── Scroll-reveal observer ──
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach(el => revealObserver.observe(el));

  // ── Counter animation for hero stats ──
  const animateCounters = () => {
    const counters = document.querySelectorAll('.hero-stat h3');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 2000;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;

      const tick = () => {
        current += step;
        if (current >= target) {
          counter.textContent = target + suffix;
          return;
        }
        counter.textContent = current + suffix;
        requestAnimationFrame(tick);
      };
      tick();
    });
  };

  // Trigger counter animation when hero section is visible
  const heroObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        heroObserver.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) heroObserver.observe(heroStats);

  // ── Contact form handling ──
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple front-end demo — show success state
      formBody.style.display = 'none';
      formSuccess.classList.add('show');

      // Reset form after a delay
      setTimeout(() => {
        contactForm.reset();
        formBody.style.display = 'block';
        formSuccess.classList.remove('show');
      }, 5000);
    });
  }

  // ── Smooth scroll polyfill for CTA buttons ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = header.offsetHeight + 10;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Year in footer ──
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
