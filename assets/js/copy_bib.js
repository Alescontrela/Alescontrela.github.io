var hiddenBibs=document.querySelectorAll(".language-bibtex");hiddenBibs.forEach(function(e){e=e.parentElement,linebreak=document.createElement("hr"),e.append(linebreak);var t=document.createElement("button");t.className="copy",t.classList.add("btn"),t.classList.add("btn-sm"),t.classList.add("z-depth-2"),t.classList.add("rounded"),t.classList.add("border"),t.type="button",t.ariaLabel="Copy code to clipboard",t.innerText="Copy",e.append(t),t.addEventListener("click",function(){var n=e.querySelector("code").innerText.trim();window.navigator.clipboard.writeText(n),t.innerText="Copied",setTimeout(function(){t.innerText="Copy"},4e3)})});