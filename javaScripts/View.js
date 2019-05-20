class View
{
	constructor(model)
	{
		this.model = model;
		this.backgroundPic = new Image();
		this.backgroundPic.src = "images/scaledBackground.png";
		this.canvas = document.getElementById("myCanvas");
	}

	update()
	{
		//clear the screen
		let ctx = this.canvas.getContext("2d");
		ctx.clearRect(0, 0, 1255, 700);

		//draw the sky
		ctx.beginPath();
		ctx.rect(0, 0, 1500, 1000);
		ctx.fillStyle = 'rgb(55, 201, 200)';
		ctx.fill();

		//draw the background
		ctx.drawImage(this.backgroundPic, 100 - this.model.bScrollPos, -500);

		//draw the ground
		ctx.beginPath();
		ctx.rect(0, this.model.startPos, 1500, 1000);
		ctx.fillStyle = "green";
		ctx.fill();

		//draw the sprites
		for(let i = 0; i < this.model.sprites.length; i++)
		{
			this.model.sprites[i].drawMe(ctx);
		}
	}
}
