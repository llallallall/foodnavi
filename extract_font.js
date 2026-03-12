const fs = require('fs');
const content = fs.readFileSync('tasks/imcompleted/tridge/about', 'utf8');

// Use simple regex to grab all inline styles and parse
const styles = content.match(/<style[^>]*>(.*?)<\/style>/gs);
if(!styles) process.exit(0);

const styleContent = styles.map(s => s.replace(/<[^>]+>/g, '')).join('\n');

// Grab anything that specifies a font-size in pixels
const regex = /([\.a-zA-Z0-9_\-]+)\s*\{([^}]*(?:font-size|font-weight)[^}]*)\}/g;
let m;
let res = [];
while((m = regex.exec(styleContent)) !== null) {
  let selector = m[1];
  let rules = m[2];
  if (selector.includes('h1') || selector.includes('Title') || selector.includes('Headline') || rules.includes('52px') || rules.includes('48px')) {
      res.push('H1/Title Candidate -> ' + selector + ': ' + rules);
  }
  if (selector.includes('btn') || selector.includes('button') || selector.includes('Button')) {
      res.push('Button Candidate -> ' + selector + ': ' + rules);
  }
}

fs.writeFileSync('tridge_fonts.log', res.join('\n'));
console.log("Extraction complete.");
