const PAGE_GROUPS = [
  { title: "Basics", pages: [["Home", "Home"], ["Getting Started", "Getting-Started"], ["Commands", "Commands"], ["Presets", "Presets"], ["FAQ", "FAQ"]] },
  { title: "Abilities", pages: [["Airbending", "Airbending"], ["Waterbending", "Waterbending"], ["Earthbending", "Earthbending"], ["Firebending", "Firebending"], ["Special Techniques", "Special-Techniques"]] },
  { title: "Advanced", pages: [["Permissions", "Permissions"], ["Configuration", "Configuration"], ["Protection", "Protection"], ["Storage", "Storage"], ["Localization", "Localization"], ["Placeholders", "Placeholders"], ["Modifiers", "Modifiers"], ["Tags", "Tags"]] },
  { title: "Platforms", pages: [["Fabric", "Fabric"], ["Paper", "Paper"], ["Sponge", "Sponge"]] },
  { title: "Developers", pages: [["Developer API", "Developer-API"], ["Addons", "Addons"]] },
];

const ELEMENT_META = {
  Airbending: { accent: "var(--air)", summary: "Speed, evasion, displacement, and creative mobility." },
  Waterbending: { accent: "var(--water)", summary: "Adaptable control, freezing, healing, and ring-based combos." },
  Earthbending: { accent: "var(--earth)", summary: "Control space, terrain, armor, launch power, and subelements." },
  Firebending: { accent: "var(--fire)", summary: "Aggressive pressure, mobility, ignition, explosions, and lightning." },
  "Special-Techniques": { accent: "var(--special)", summary: "Rare endgame techniques with unique setup and timing." },
};

const appState = { currentPage: "Home", searchTerm: "" };
const contentEl = document.getElementById("content");
const navEl = document.getElementById("sidebar-nav");
const searchInput = document.getElementById("search-input");
const pages = window.WIKI_PAGES || {};

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

function getHashPage() {
  const hash = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  return pages[hash] ? hash : "Home";
}

function setHashPage(page) {
  if (getHashPage() !== page) {
    window.location.hash = page;
  } else {
    render();
  }
}

function buildNav() {
  navEl.innerHTML = PAGE_GROUPS.map((group) => `
    <section class="nav-group">
      <h3>${group.title}</h3>
      <div>
        ${group.pages.map(([label, key]) => `
          <button class="nav-link ${appState.currentPage === key ? "active" : ""}" data-page="${key}">
            <span>${label}</span>
            <small>${ELEMENT_META[key] ? "Element" : "Topic"}</small>
          </button>`).join("")}
      </div>
    </section>`).join("");

  navEl.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => setHashPage(button.dataset.page));
  });
}

function parseElementPage(markdown, pageKey) {
  const lines = markdown.split(/\r?\n/);
  const titleLine = (lines.find((line) => line.startsWith("# ")) || "").replace(/^# /, "").trim();
  const title = titleLine || pageKey.replace(/-/g, " ");
  const summaryLine = lines.find((line) => /^_.*_$/.test(line.trim())) || "";
  let summary = summaryLine.replace(/^_+|_+$/g, "");
  const sectionMatches = [...markdown.matchAll(/^## (Passives|Active abilities|Sequences)\s*$([\s\S]*?)(?=^## |\Z)/gm)];
  let sections = sectionMatches.map((match) => ({
    title: match[1],
    abilities: [...match[2].matchAll(/^### (.+?)\s*$([\s\S]*?)(?=^### |\Z)/gm)].map((abilityMatch) => {
      const abilityBody = abilityMatch[2].trim();
      const instruction = (abilityBody.match(/^> ([\s\S]*?)(?=\n\n|$)/m) || [])[1]?.replace(/\n> ?/g, " ").trim() || "";
      const config = (abilityBody.match(/```hocon\s*([\s\S]*?)```/) || [])[1]?.trim() || "";
      const tips = (abilityBody.match(/#### Tips\s*([\s\S]*)$/m) || [])[1]?.trim() || "";
      let description = abilityBody.replace(/^> [\s\S]*?(?=\n\n|$)/m, "").replace(/<details>[\s\S]*?<\/details>/g, "").replace(/#### Tips[\s\S]*$/m, "").trim();
      description = description.split(/\n{2,}/).map((chunk) => chunk.trim()).filter(Boolean)[0] || "";

      return {
        name: abilityMatch[1].trim(),
        anchor: slugify(abilityMatch[1].trim()),
        type: match[1] === "Active abilities" ? "Active" : match[1].replace(/s$/, ""),
        description,
        instruction,
        config,
        tips,
      };
    }),
  }));

  if (!sections.length) {
    const abilities = [...markdown.matchAll(/^### (.+?)\s*$([\s\S]*?)(?=^### |\Z)/gm)].map((abilityMatch) => {
      const abilityBody = abilityMatch[2].trim();
      const instruction = (abilityBody.match(/^> ([\s\S]*?)(?=\n\n|$)/m) || [])[1]?.replace(/\n> ?/g, " ").trim() || "";
      const config = (abilityBody.match(/```hocon\s*([\s\S]*?)```/) || [])[1]?.trim() || "";
      const tips = (abilityBody.match(/#### Tips\s*([\s\S]*)$/m) || [])[1]?.trim() || "";
      let description = abilityBody.replace(/^> [\s\S]*?(?=\n\n|$)/m, "").replace(/<details>[\s\S]*?<\/details>/g, "").replace(/#### Tips[\s\S]*$/m, "").trim();
      description = description.split(/\n{2,}/).map((chunk) => chunk.trim()).filter(Boolean)[0] || "";

      return {
        name: abilityMatch[1].trim(),
        anchor: slugify(abilityMatch[1].trim()),
        type: "Special",
        description,
        instruction,
        config,
        tips,
      };
    });

    if (!summary) {
      summary = markdown
        .split(/\n{2,}/)
        .map((chunk) => chunk.trim())
        .find((chunk) => chunk && !chunk.startsWith("### "))
        ?.replace(/^# .*/, "")
        .trim() || "";
    }

    sections = [{ title: "Special Techniques", abilities }];
  }

  return {
    title,
    summary,
    accent: ELEMENT_META[pageKey]?.accent || "var(--water)",
    sections,
    count: sections.reduce((sum, section) => sum + section.abilities.length, 0),
  };
}

function getElementPages() {
  return Object.keys(ELEMENT_META).map((key) => parseElementPage(pages[key], key));
}

function linkWikiReferences(text) {
  return text.replace(/\[\[([^\]]+)\]\]/g, (_, raw) => {
    const parts = raw.split("|");
    const target = parts[0].trim();
    const label = (parts[1] || parts[0]).trim();
    const pageKey = target.replace(/\s+/g, "-");
    return pages[pageKey] ? `<a href="#${encodeURIComponent(pageKey)}">${escapeHtml(label)}</a>` : label;
  });
}

function renderInline(text) {
  let output = escapeHtml(text);
  output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return linkWikiReferences(output);
}

function renderMarkdown(markdown) {
  const source = markdown
    .replace(/^# .*\n?/m, "")
    .replace(/^\s*### Index:[\s\S]*?^-{5,}\s*$/m, "")
    .replace(/<details><summary>(.*?)<\/summary>\s*```(\w+)?\s*([\s\S]*?)```[\s\S]*?<\/details>/g, (_, summary, lang, code) => `\n#### ${summary}\n\n\`\`\`${lang || ""}\n${code.trim()}\n\`\`\`\n`);

  const lines = source.split(/\r?\n/);
  let html = "";
  let inList = false;
  let listType = "";
  let inCode = false;
  let codeLang = "";
  let codeBuffer = [];
  let tableBuffer = [];

  const flushList = () => {
    if (inList) html += `</${listType}>`;
    inList = false;
    listType = "";
  };

  const flushTable = () => {
    if (!tableBuffer.length) return;
    const rows = tableBuffer.filter((row) => /\|/.test(row));
    if (rows.length >= 2) {
      const header = rows[0].split("|").slice(1, -1).map((cell) => renderInline(cell.trim()));
      const bodyRows = rows.slice(2).map((row) => row.split("|").slice(1, -1).map((cell) => renderInline(cell.trim())));
      html += "<table><thead><tr>";
      html += header.map((cell) => `<th>${cell}</th>`).join("");
      html += "</tr></thead><tbody>";
      html += bodyRows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("");
      html += "</tbody></table>";
    }
    tableBuffer = [];
  };

  lines.forEach((rawLine) => {
    const line = rawLine.replace(/\r/g, "");
    if (/^\|.*\|$/.test(line.trim())) {
      flushList();
      tableBuffer.push(line);
      return;
    }
    flushTable();

    if (line.startsWith("```")) {
      flushList();
      if (!inCode) {
        inCode = true;
        codeLang = line.replace(/```/, "").trim();
        codeBuffer = [];
      } else {
        html += `<pre><code class="language-${escapeAttribute(codeLang)}">${escapeHtml(codeBuffer.join("\n"))}</code></pre>`;
        inCode = false;
        codeLang = "";
        codeBuffer = [];
      }
      return;
    }

    if (inCode) {
      codeBuffer.push(line);
      return;
    }

    if (!line.trim()) {
      flushList();
      return;
    }

    if (/^-{5,}$/.test(line.trim())) {
      flushList();
      html += "<hr />";
      return;
    }

    const headingMatch = line.match(/^(#{2,4})\s+(.*)$/);
    if (headingMatch) {
      flushList();
      const level = Math.min(4, headingMatch[1].length);
      html += `<h${level}>${renderInline(headingMatch[2].trim())}</h${level}>`;
      return;
    }

    const quoteMatch = line.match(/^>\s?(.*)$/);
    if (quoteMatch) {
      flushList();
      html += `<blockquote>${renderInline(quoteMatch[1])}</blockquote>`;
      return;
    }

    const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
    if (orderedMatch) {
      if (!inList || listType !== "ol") {
        flushList();
        html += "<ol>";
        inList = true;
        listType = "ol";
      }
      html += `<li>${renderInline(orderedMatch[1])}</li>`;
      return;
    }

    const unorderedMatch = line.match(/^- (.*)$/);
    if (unorderedMatch) {
      if (!inList || listType !== "ul") {
        flushList();
        html += "<ul>";
        inList = true;
        listType = "ul";
      }
      html += `<li>${renderInline(unorderedMatch[1])}</li>`;
      return;
    }

    flushList();
    html += `<p>${renderInline(line)}</p>`;
  });

  flushList();
  flushTable();
  return `<div class="markdown">${html}</div>`;
}

function renderHomePage() {
  const overviewCards = getElementPages().map((page) => `
    <article class="overview-card" style="--accent:${page.accent}">
      <p class="eyebrow">Element Guide</p>
      <h3>${page.title}</h3>
      <p>${page.summary}</p>
      <div class="pill-row">
        <span class="pill">${page.count} moves</span>
        <span class="pill">${ELEMENT_META[page.title]?.summary || "Core techniques"}</span>
      </div>
      <div class="pill-row"><a class="pill" href="#${encodeURIComponent(page.title)}">Open guide</a></div>
    </article>`).join("");

  return `
    <section class="panel article-card">
      <p class="eyebrow">Overview</p>
      <h3>What this wiki covers</h3>
      ${renderMarkdown(pages.Home || "")}
      <p class="footer-note">Source content referenced from the PrimordialMoros Bending wiki and reorganized into a more navigable layout.</p>
    </section>
    <section>
      <div class="section-header">
        <div>
          <h3 class="section-title">Element Guides</h3>
          <p class="section-copy">Jump straight into the full move lists with usage instructions, configs, passives, and sequences for each bending type.</p>
        </div>
      </div>
      <div class="overview-grid">${overviewCards}</div>
    </section>
    <section>
      <div class="section-header">
        <div>
          <h3 class="section-title">Quick Start</h3>
          <p class="section-copy">The fastest path from installation to actually using abilities in-game.</p>
        </div>
      </div>
      <div class="quick-grid">
        <article class="quick-card"><p class="eyebrow">Step 1</p><h3>Choose an element</h3><p>Use <code>/bending choose [element]</code> to pick air, water, earth, or fire and unlock that style’s abilities.</p></article>
        <article class="quick-card"><p class="eyebrow">Step 2</p><h3>Learn bindings</h3><p>Most active moves need to be bound to your hotbar first. Sequences can’t be bound directly and must be triggered in order.</p></article>
        <article class="quick-card"><p class="eyebrow">Step 3</p><h3>Check move instructions</h3><p>Every move page here includes the exact click, sneak, charge, or release input so you can use it immediately.</p></article>
        <article class="quick-card"><p class="eyebrow">Step 4</p><h3>Save presets</h3><p>Once you have a good loadout, create presets so you can rebind a full kit in one command.</p></article>
      </div>
    </section>`;
}

function renderElementPage(pageKey) {
  const page = parseElementPage(pages[pageKey], pageKey);
  return `
    <section class="panel article-card">
      <p class="eyebrow">Element Overview</p>
      <h3>${page.title}</h3>
      <p class="article-meta">${page.summary}</p>
      <div class="pill-row">${page.sections.map((section) => `<span class="pill">${section.title}: ${section.abilities.length}</span>`).join("")}</div>
    </section>
    ${page.sections.map((section) => `
      <section>
        <div class="section-header">
          <div>
            <p class="eyebrow">${page.title}</p>
            <h3 class="section-title">${section.title}</h3>
            <p class="section-copy">${section.abilities.length} documented ${section.title.toLowerCase()} for this style.</p>
          </div>
        </div>
        <div class="moves-grid">
          ${section.abilities.map((ability) => `
            <article id="${ability.anchor}" class="move-card" style="--accent:${page.accent}">
              <div class="move-head">
                <div><h3>${ability.name}</h3><p class="move-meta">${ability.type}</p></div>
                <span class="meta-chip">${page.title.replace("bending", "")}</span>
              </div>
              <p>${ability.description || "No description available."}</p>
              ${ability.instruction ? `<div class="how-to"><strong>How to use</strong><span>${renderInline(ability.instruction)}</span></div>` : ""}
              ${ability.config ? `<details><summary>Default config</summary><pre class="config-block"><code>${escapeHtml(ability.config)}</code></pre></details>` : ""}
              ${ability.tips ? `<div class="how-to"><strong>Tips</strong><span>${renderInline(ability.tips)}</span></div>` : ""}
            </article>`).join("")}
        </div>
      </section>`).join("")}`;
}

function renderArticlePage(pageKey) {
  return `<section class="panel article-card"><p class="eyebrow">Wiki Topic</p><h3>${pageKey.replace(/-/g, " ")}</h3>${renderMarkdown(pages[pageKey] || "")}</section>`;
}

function buildSearchIndex() {
  const results = [];
  Object.entries(pages).forEach(([pageKey, markdown]) => {
    if (ELEMENT_META[pageKey]) {
      const page = parseElementPage(markdown, pageKey);
      page.sections.forEach((section) => {
        section.abilities.forEach((ability) => {
          results.push({ kind: "Ability", pageKey, title: ability.name, subtitle: `${page.title} • ${section.title}`, body: [ability.description, ability.instruction, ability.tips].filter(Boolean).join(" "), anchor: ability.anchor, accent: page.accent });
        });
      });
    }
    results.push({ kind: "Topic", pageKey, title: pageKey.replace(/-/g, " "), subtitle: "Wiki page", body: markdown, accent: ELEMENT_META[pageKey]?.accent || "var(--special)" });
  });
  return results;
}

const SEARCH_INDEX = buildSearchIndex();

function renderSearchResults() {
  const query = appState.searchTerm.trim().toLowerCase();
  if (!query) return "";
  const results = SEARCH_INDEX.filter((entry) => `${entry.title} ${entry.subtitle} ${entry.body}`.toLowerCase().includes(query)).slice(0, 18);
  if (!results.length) {
    return `<section class="empty-state"><p class="eyebrow">Search</p><h3>No matches found</h3><p>Try a move name like <code>AirBlast</code>, a topic like <code>permissions</code>, or an element like <code>water</code>.</p></section>`;
  }
  return `
    <section>
      <div class="section-header"><div><p class="eyebrow">Search</p><h3 class="section-title">${results.length} result${results.length === 1 ? "" : "s"}</h3></div></div>
      <div class="search-grid">
        ${results.map((result) => `
          <article class="move-card" style="--accent:${result.accent}">
            <div class="move-head">
              <div><h3>${result.title}</h3><p class="move-meta">${result.subtitle}</p></div>
              <span class="meta-chip">${result.kind}</span>
            </div>
            <p>${escapeHtml(result.body.replace(/\s+/g, " ").trim()).slice(0, 220)}${result.body.length > 220 ? "..." : ""}</p>
            <div class="pill-row"><a class="pill" href="#${encodeURIComponent(result.pageKey)}" data-page-link="${result.pageKey}">Open page</a></div>
          </article>`).join("")}
      </div>
    </section>`;
}

function render() {
  appState.currentPage = getHashPage();
  buildNav();
  const searchSection = renderSearchResults();
  let pageMarkup = "";
  if (!appState.searchTerm.trim()) {
    if (appState.currentPage === "Home") pageMarkup = renderHomePage();
    else if (ELEMENT_META[appState.currentPage]) pageMarkup = renderElementPage(appState.currentPage);
    else pageMarkup = renderArticlePage(appState.currentPage);
  }
  contentEl.innerHTML = `${searchSection}${pageMarkup}`;
  contentEl.querySelectorAll("[data-page-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      appState.searchTerm = "";
      searchInput.value = "";
      setHashPage(link.dataset.pageLink);
    });
  });
}

window.addEventListener("hashchange", render);
searchInput.addEventListener("input", (event) => {
  appState.searchTerm = event.target.value;
  render();
});

appState.currentPage = getHashPage();
render();
