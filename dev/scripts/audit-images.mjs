import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';

const root = 'c:/Users/benz_/OneDrive/Desktop/Website/Website-Packaging/dev';
const dir = root + '/public/images/products';
const src = readFileSync(root + '/src/data/products.js', 'utf8');

const entriesWithImage = (src.match(/image:\s*['"`]/g) || []).length;
const refs = [...src.matchAll(/\/images\/products\/[^'"\r\n)\`,]+/g)].map(m => m[0].replace('/images/products/', '')).filter(r => r && !r.includes('*'));
const uniqRefs = [...new Set(refs)];
const files = readdirSync(dir);
const refSet = new Set(uniqRefs);

const md5 = f => createHash('md5').update(readFileSync(dir + '/' + f)).digest('hex');
const refHash = new Map(uniqRefs.map(r => [r, existsSync(dir + '/' + r) ? md5(r) : 'MISSING']));

console.log('image entries in products.js:', entriesWithImage, '| unique refs:', uniqRefs.length);
console.log('files on disk:', files.length);
console.log('refs MISSING on disk:', JSON.stringify(uniqRefs.filter(r => refHash.get(r) === 'MISSING')));
console.log('case-mismatch refs:', JSON.stringify(uniqRefs.filter(r => !files.includes(r) && files.some(f => f.toLowerCase() === r.toLowerCase()))));

const byHash = {};
for (const [r, h] of refHash) (byHash[h] = byHash[h] || []).push(r);
for (const h in byHash) if (byHash[h].length > 1) console.log('DUP within refs:', byHash[h].join(' == '));

const unref = files.filter(f => !refSet.has(f));
console.log('unreferenced files:', unref.length);
const lowerRefMap = new Map(uniqRefs.map(r => [r.toLowerCase(), r]));
for (const f of unref) {
  const h = md5(f);
  const twinRef = uniqRefs.find(r => refHash.get(r) === h);
  const twinUnref = unref.find(o => o !== f && md5(o) === h);
  console.log('UNREF:', JSON.stringify(f),
    '| case-matches-ref:', lowerRefMap.has(f.toLowerCase()),
    twinRef ? '| DUP-OF-REF: ' + twinRef : twinUnref ? '| DUP-OF-UNREF: ' + twinUnref : '| UNIQUE size=' + statSync(dir + '/' + f).size);
}
