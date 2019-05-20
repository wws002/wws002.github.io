class Pickle_Rick
{
	constructor(model, x, y)
	{
		this.type = "Pickle Rick";
		this.model = model;
		this.x = x;
		this.y = y;
		this.w = 0;
		this.h = 0;
		this.vvel = 0;
		this.hvel = 1;
		this.rick_pic = new Image();
		this.rick_pic.src = "images/pickRick.png";
	}

	drawMe(ctx)
	{
		ctx.drawImage(this.model.rick.rick_pic, this.model.rick.x - this.model.scrollPos, this.model.rick.y);
	}

	update()
	{
		if(this.y == 0)
			this.vvel = 2;

		if(this.y == 400)
			this.vvel = -2;

		if(this.x < 0)
			this.hvel = 1;

		if(this.x > 2500)
			this.hvel = -1;

		this.y += this.vvel;
		this.x += this.hvel;
	}
}
