class Game
{
	constructor()
	{
		this.model = new Model();
		this.view = new View(this.model);
		this.controller = new Controller(this.model, this.view);
	}

	onTimer()
	{
		this.controller.update();
		this.model.update();
		this.view.update();
	}
}
