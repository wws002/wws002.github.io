class Brick
{
	constructor(model, x, y)
	{
		this.type = "Brick";
		this.model = model;
		this.x = x;
		this.y = y;
		this.w = 100;
		this.h = 100;
		this.brickPic = new Image();
		this.brickPic.src = "brickPicSmall.png";
	}

	drawMe(ctx)
	{
		ctx.drawImage(this.model.brick1.brickPic, this.model.brick1.x - this.model.scrollPos, this.model.brick1.y);
		ctx.drawImage(this.model.brick2.brickPic, this.model.brick2.x - this.model.scrollPos, this.model.brick2.y);
	}

	update()
	{
	}
}
