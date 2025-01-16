function getPreferredColorScheme(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function updateColorScheme(){setTheme(getPreferredColorScheme())}let toggleTheme=e=>{setTheme("dark"==e?"light":"dark")},setTheme=e=>{transTheme(),setHighlight(e),e?document.documentElement.setAttribute("data-theme",e):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("theme",e),"undefined"!=typeof medium_zoom&&medium_zoom.update({background:getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")+"ee"})},setHighlight=e=>{"dark"==e?(document.getElementById("highlight_theme_light").media="none",document.getElementById("highlight_theme_dark").media=""):(document.getElementById("highlight_theme_dark").media="none",document.getElementById("highlight_theme_light").media="")},transTheme=()=>{document.documentElement.classList.add("transition"),window.setTimeout(()=>{document.documentElement.classList.remove("transition")},500)},initTheme=e=>{if(null==e||"null"==e){const t=window.matchMedia;t&&t("(prefers-color-scheme: dark)").matches&&(e="dark")}setTheme(e)};if(window.matchMedia){var colorSchemeQuery=window.matchMedia("(prefers-color-scheme: dark)");colorSchemeQuery.addEventListener("change",updateColorScheme)}window.onload=function(){null===localStorage.getItem("hasCodeRunBefore")&&(localStorage.removeItem("theme"),localStorage.setItem("hasCodeRunBefore",!0))},initTheme(localStorage.getItem("theme"));