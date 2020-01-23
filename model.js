
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Point(posX, posY) {
    this.posX = posX;
    this.posY = posY;

    this.getPosX = function() {
        return this.posX;
    }.bind(this);

    this.getPosY = function() {
        return this.posY;
    }.bind(this);
}

function Forme(couleur, epaisseur) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;

    this.getCouleur = function() {
        return this.couleur;
    }.bind(this);

    this.getEpaisseur = function() {
        return this.epaisseur;
    }.bind(this);
}

function Rectangle(pointI, pointF, couleur, epaisseur) {
    Forme.call(this, couleur, epaisseur);

    this.pointI = pointI;
    this.pointF = pointF;

    this.getPointI = function() {
        return this.pointI;
    }.bind(this);

    this.getPointF = function() {
        return this.pointF;
    }.bind(this);
}

function Line(pointI, pointF, couleur, epaisseur) {
    Forme.call(this, couleur, epaisseur);

    this.pointI = pointI;
    this.pointF = pointF;

    this.getPointI = function() {
        return this.pointI;
    }.bind(this);

    this.getPointF = function() {
        return this.pointF;
    }.bind(this);
}

function Drawing() {
    this.formes = [];

    this.ajouterForme = function(forme) {
        this.formes.push(forme);
    }.bind(this);

    this.getFormes = function() {
        return this.formes;
    }.bind(this);
}