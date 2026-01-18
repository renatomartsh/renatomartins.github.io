async function loadLanguage(lang) {
  //alert(lang);
  const response = await fetch(`lang/${lang}.json`);
  alert(response);  
  const translations = await response.json();
  alert(translations)
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    alert(key);
    el.textContent = translations[key] || key;
    alert(translations[key]);
  });

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

const savedLang = localStorage.getItem("lang") || "pt";
loadLanguage(savedLang);

document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  loadLanguage(e.target.value);
});
