var slaying = true;
// Um pouco de mágica matemática nova para calcular as chances
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("Você atingiu o dragão e causou " + damageThisRound + " de dano!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("Você conseguiu! Voce matou o dragao!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("Você foi derrotado pelo dragão! Ficou torrado.");
    slaying = false;
  }
}
