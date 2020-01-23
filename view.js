
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Forme.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.getCouleur();
    ctx.lineWidth = this.getEpaisseur();
}

Rectangle.prototype.paint = function(ctx) {
   Forme.prototype.paint.call(this,ctx) 

    ctx.rect(this.getPointI().getPosX(),
            this.getPointI().getPosY(),
            this.getPointF().getPosX() - this.getPointI().getPosX(),
            this.getPointF().getPosY() - this.getPointI().getPosY());
    
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