
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Attributs de la 'classe'
  this.posXI = 0;
  this.posYI = 0;
  this.posXF = 0;
  this.posYF = 0;
  this.avoirPression = false;

  // Fonctions gérant les événements
  this.fonctionPression = function(evt) {
    var res = getMousePosition(canvas, evt);
    this.posXI = res.x;
    this.posYI = res.y;
    this.avoirPression = true;
  }.bind(this);

  this.fonctionDeplacement = function(evt) {
    if(this.avoirPression) {
      var res = getMousePosition(canvas, evt);
      this.posXF = res.x;
      this.posYF = res.y;
    }
  }.bind(this);

  this.fonctionRelachement = function(evt) {
    if(this.avoirPression) {
      //var res = getMousePosition(canvas, evt);
      //this.posXF = res.x;
      //this.posYF = res.y;
      this.avoirPression = false;
      console.log('fin drag drop ' + this.posXI  + ' ' + this.posYI + ' ' + this.posXF + ' ' + this.posYF)
    }
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.fonctionPression, false);
  canvas.addEventListener('mousemove', this.fonctionDeplacement, false);
  canvas.addEventListener('mouseup', this.fonctionRelachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



