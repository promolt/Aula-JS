var slaying = true;
// Um pouco de m�gica matem�tica nova para calcular as chances
// de atingir o drag�o. Vamos falar disso logo!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("Voc� atingiu o drag�o e causou " + damageThisRound + " de dano!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("Voc� conseguiu! Voce matou o dragao!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("Voc� foi derrotado pelo drag�o! Ficou torrado.");
    slaying = false;
  }
}