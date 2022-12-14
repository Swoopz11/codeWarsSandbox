function DNAStrand(dna) {
  let rna = [];
  let realDNA = dna.split("");
  for (let i = 0; i < realDNA.length; i++) {
    if (realDNA[i] === "A") {
      rna.push("T");
    } else if (realDNA[i] === "T") {
      rna.push("A");
    } else if (realDNA[i] === "C") {
      rna.push("G");
    } else if (realDNA[i] === "G") {
      rna.push("C");
    }
  }
  return rna.join('');
}
console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTG"));
console.log(DNAStrand("ATTA"));
console.log(DNAStrand("GATA"));
