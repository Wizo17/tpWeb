
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Forme.prototype.paint = function(ctx) {
    ctx.fillStyle = this.getCouleur();
    ctx.lineWidth = this.getEpaisseur();
}

Rectangle.prototype.paint = function(ctx) {
   Forme.prototype.paint.call(this,ctx) 
    console.log(this.getPoint().getPosX())
    console.log(this.getPoint().getPosX() + this.getHauteur())

    ctx.rect(this.getPoint().getPosX(),
            this.getPoint().getPosY(),
            this.getPoint().getPosX() + this.getHauteur(),
            this.getPoint().getPosY() + this.getLargeur());
    
    ctx.stroke();
};


Line.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this,ctx) 

    ctx.beginPath();
    ctx.moveTo(this.getPointI().getPosX(), this.getPointI().getPosY());
    ctx.lineTo(this.getPointF().getPosX(), this.getPointF().getPosY());
    ctx.stroke();
};


Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.getFormes().forEach(function(element) {
        element.paint(ctx);
    });
};