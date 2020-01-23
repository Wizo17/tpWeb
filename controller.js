
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.drawing = drawing;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	this.dnd = new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function() {
		//console.log(spinnerWidth.value)
		this.currLineWidth = spinnerWidth.value;
		this.currColour = colour.value;

		if(toogleButRect.checked){
			this.currentShape = editingMode.rec;
		}
		else {
			this.currentShape = editingMode.line;
		}
	}.bind(this);

	this.onInteractionUpdate = function() {
		//
	}.bind(this);

	this.onInteractionEnd = function() {
		pointI = new Point(this.dnd.posXI, this.dnd.posYI);
		pointF = new Point(this.dnd.posXF, this.dnd.posYF);

		if(this.currentShape == editingMode.rec){
			forme = new Rectangle(pointI, pointF, this.currColour, this.currLineWidth);
			this.drawing.ajouterForme(forme);
		}
		else {
			forme = new Line(pointI, pointF, this.currColour, this.currLineWidth);
			this.drawing.ajouterForme(forme);
		}

		this.drawing.paint(ctx);
	}.bind(this);
};


