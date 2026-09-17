/**
 * Wendy A. 克制質感 — GSAP 3 + ScrollTrigger
 * 入場 once；只動 transform / opacity；Hero 載入由 CSS 處理（LCP）。
 * gsap.matchMedia：桌面／手機／reduced-motion。
 */
(function () {
  "use strict";

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var EASE = "power3.out";
  var header = document.getElementById("site-header");
  var hero = document.querySelector(".hero");

  function setupNavScroll() {
    if (!header || !hero) return;
    var onScroll = function () {
      var past = window.scrollY > Math.max(hero.offsetHeight * 0.55, 120);
      header.classList.toggle("is-scrolled", past);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  setupNavScroll();

  var mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: reduce)", function () {
    document.documentElement.classList.add("motion-reduce");
    document.documentElement.classList.remove("motion-ok");
    gsap.set(
      ".svc li, .work-hero > .frame, .work-side .frame, .work-grid .frame, .highlights, #services .idx, #services .sec-title, #works .idx, #works .sec-title, #exp .idx, #exp .sec-title, #contact .idx, #contact .sec-title, #contact > p, #contact .btn-primary, .frame .media, .hero-stage",
      { clearProps: "all" }
    );
    ScrollTrigger.getAll().forEach(function (st) { st.kill(); });
    return function () {
      document.documentElement.classList.remove("motion-reduce");
    };
  });

  mm.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", function () {
    document.documentElement.classList.add("motion-ok");

    var ctx = gsap.context(function () {
      var stage = hero && hero.querySelector(".hero-stage");
      if (stage) {
        gsap.to(stage, {
          yPercent: -3,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      }

      var svc = document.getElementById("services");
      if (svc) {
        var svcHead = svc.querySelectorAll(".idx, .sec-title");
        var svcLis = svc.querySelectorAll(".svc > li");
        var groupA = Array.prototype.slice.call(svcLis, 0, 2);
        var groupB = Array.prototype.slice.call(svcLis, 2, 4);

        gsap.set(svcHead, { opacity: 0, y: 18 });
        if (groupA.length) gsap.set(groupA, { opacity: 0, y: 18 });
        if (groupB.length) gsap.set(groupB, { opacity: 0, y: 18 });

        gsap.to(svcHead, {
          opacity: 1, y: 0, duration: 0.55, ease: EASE, stagger: 0.06,
          scrollTrigger: { trigger: svc, start: "top 75%", once: true },
        });
        if (groupA.length) {
          gsap.to(groupA, {
            opacity: 1, y: 0, duration: 0.55, ease: EASE,
            scrollTrigger: { trigger: svc.querySelector(".svc"), start: "top 80%", once: true },
          });
        }
        if (groupB.length) {
          gsap.to(groupB, {
            opacity: 1, y: 0, duration: 0.55, ease: EASE, delay: 0.1,
            scrollTrigger: { trigger: svc.querySelector(".svc"), start: "top 80%", once: true },
          });
        }
      }

      var works = document.getElementById("works");
      if (works) {
        var worksHead = works.querySelectorAll(".idx, .sec-title");
        var heroCard = works.querySelector(".work-hero > .frame");
        var sideCards = works.querySelectorAll(".work-side .frame");
        var gridCards = works.querySelectorAll(".work-grid .frame");

        gsap.set(worksHead, { opacity: 0, y: 18 });
        if (heroCard) gsap.set(heroCard, { opacity: 0, y: 24, scale: 0.98 });
        gsap.set(sideCards, { opacity: 0, y: 20 });
        gsap.set(gridCards, { opacity: 0, y: 18 });

        gsap.to(worksHead, {
          opacity: 1, y: 0, duration: 0.55, ease: EASE, stagger: 0.06,
          scrollTrigger: { trigger: works, start: "top 75%", once: true },
        });

        if (heroCard) {
          gsap.to(heroCard, {
            opacity: 1, y: 0, scale: 1, duration: 0.65, ease: EASE,
            scrollTrigger: { trigger: heroCard, start: "top 80%", once: true },
          });
          var heroMedia = heroCard.querySelector(".media");
          if (heroMedia) {
            gsap.fromTo(
              heroMedia,
              { yPercent: -6 },
              {
                yPercent: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: heroCard,
                  start: "top 85%",
                  end: "top 35%",
                  scrub: 0.5,
                  invalidateOnRefresh: true,
                },
              }
            );
          }
        }

        gsap.to(sideCards, {
          opacity: 1, y: 0, duration: 0.55, ease: EASE, stagger: 0.1,
          scrollTrigger: {
            trigger: works.querySelector(".work-side"),
            start: "top 82%",
            once: true,
          },
        });

        gsap.to(gridCards, {
          opacity: 1, y: 0, duration: 0.55, ease: EASE, stagger: 0.08,
          scrollTrigger: {
            trigger: works.querySelector(".work-grid"),
            start: "top 85%",
            once: true,
          },
        });
      }

      var exp = document.getElementById("exp");
      if (exp) {
        var expHead = exp.querySelectorAll(".idx, .sec-title");
        var highlights = exp.querySelector(".highlights");
        gsap.set(expHead, { opacity: 0, y: 16 });
        if (highlights) gsap.set(highlights, { opacity: 0, y: 16 });

        gsap.to(expHead, {
          opacity: 1, y: 0, duration: 0.5, ease: EASE, stagger: 0.05,
          scrollTrigger: { trigger: exp, start: "top 75%", once: true },
        });
        if (highlights) {
          gsap.to(highlights, {
            opacity: 1, y: 0, duration: 0.5, ease: EASE,
            scrollTrigger: { trigger: highlights, start: "top 80%", once: true },
          });
        }
      }

      var cta = document.getElementById("contact");
      if (cta) {
        var ctaBits = [
          cta.querySelector(".idx"),
          cta.querySelector(".sec-title"),
          cta.querySelector(":scope > p:not(.idx)"),
        ].filter(Boolean);
        var ctaBtn = cta.querySelector(".btn-primary");
        gsap.set(ctaBits, { opacity: 0, y: 16 });
        if (ctaBtn) gsap.set(ctaBtn, { opacity: 0, scale: 0.98 });

        gsap.to(ctaBits, {
          opacity: 1, y: 0, duration: 0.55, ease: EASE, stagger: 0.07,
          scrollTrigger: { trigger: cta, start: "top 78%", once: true },
        });
        if (ctaBtn) {
          gsap.to(ctaBtn, {
            opacity: 1, scale: 1, duration: 0.55, ease: EASE, delay: 0.2,
            scrollTrigger: { trigger: cta, start: "top 78%", once: true },
          });
        }
      }
    });

    return function () {
      ctx.revert();
      document.documentElement.classList.remove("motion-ok");
    };
  });

  mm.add("(max-width: 900px) and (prefers-reduced-motion: no-preference)", function () {
    document.documentElement.classList.add("motion-ok");

    var ctx = gsap.context(function () {
      function onceFade(triggerEl, selectorOrEls, start) {
        var els = typeof selectorOrEls === "string"
          ? triggerEl.querySelectorAll(selectorOrEls)
          : selectorOrEls;
        if (!els || !els.length) return;
        gsap.set(els, { opacity: 0, y: 12 });
        gsap.to(els, {
          opacity: 1, y: 0, duration: 0.5, ease: EASE,
          stagger: els.length > 1 ? 0.06 : 0,
          scrollTrigger: { trigger: triggerEl, start: start || "top 80%", once: true },
        });
      }

      var svc = document.getElementById("services");
      if (svc) {
        onceFade(svc, ".idx, .sec-title");
        var list = svc.querySelector(".svc");
        if (list) {
          gsap.set(list, { opacity: 0, y: 12 });
          gsap.to(list, {
            opacity: 1, y: 0, duration: 0.5, ease: EASE,
            scrollTrigger: { trigger: list, start: "top 85%", once: true },
          });
        }
      }

      var works = document.getElementById("works");
      if (works) {
        onceFade(works, ".idx, .sec-title");
        var heroCard = works.querySelector(".work-hero > .frame");
        var sideCards = works.querySelectorAll(".work-side .frame");
        var gridCards = works.querySelectorAll(".work-grid .frame");
        if (heroCard) {
          gsap.set(heroCard, { opacity: 0, y: 12 });
          gsap.to(heroCard, {
            opacity: 1, y: 0, duration: 0.55, ease: EASE,
            scrollTrigger: { trigger: heroCard, start: "top 85%", once: true },
          });
        }
        if (sideCards.length) {
          gsap.set(sideCards, { opacity: 0, y: 12 });
          gsap.to(sideCards, {
            opacity: 1, y: 0, duration: 0.5, ease: EASE, stagger: 0.08,
            scrollTrigger: {
              trigger: works.querySelector(".work-side"),
              start: "top 85%",
              once: true,
            },
          });
        }
        if (gridCards.length) {
          gsap.set(gridCards, { opacity: 0, y: 12 });
          gsap.to(gridCards, {
            opacity: 1, y: 0, duration: 0.5, ease: EASE, stagger: 0.08,
            scrollTrigger: {
              trigger: works.querySelector(".work-grid"),
              start: "top 88%",
              once: true,
            },
          });
        }
      }

      var exp = document.getElementById("exp");
      if (exp) {
        onceFade(exp, ".idx, .sec-title");
        var highlights = exp.querySelector(".highlights");
        if (highlights) {
          gsap.set(highlights, { opacity: 0, y: 12 });
          gsap.to(highlights, {
            opacity: 1, y: 0, duration: 0.5, ease: EASE,
            scrollTrigger: { trigger: highlights, start: "top 85%", once: true },
          });
        }
      }

      var cta = document.getElementById("contact");
      if (cta) {
        var bits = [
          cta.querySelector(".idx"),
          cta.querySelector(".sec-title"),
          cta.querySelector(":scope > p:not(.idx)"),
          cta.querySelector(".btn-primary"),
        ].filter(Boolean);
        gsap.set(bits, { opacity: 0, y: 12 });
        gsap.to(bits, {
          opacity: 1, y: 0, duration: 0.5, ease: EASE, stagger: 0.06,
          scrollTrigger: { trigger: cta, start: "top 82%", once: true },
        });
      }
    });

    return function () {
      ctx.revert();
      document.documentElement.classList.remove("motion-ok");
    };
  });

  window.addEventListener("load", function () {
    ScrollTrigger.refresh();
  });
})();
