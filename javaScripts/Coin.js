class Coin
{
	constructor(hvel, vvel, x, y, m)
  {
		this.type = "Coin";
		this.model = m;
		this.x = x;
		this.y = y;
		this.w = 0;
		this.h = 0;
    this.hvel = hvel;
    this.vvel = vvel;

		this.coinPic = new Image();
		this.coinPic.src = "images/coin.png";
  }

	drawMe(ctx)
	{
		for(let i = 0; i < this.model.sprites.length; i++)
		{
			let s = this.model.sprites[i];
			if(s.type == "Coin")
				ctx.drawImage(this.coinPic, s.x - this.model.scrollPos, s.y);
		}
	}

  update()
  {
    this.vvel+=3.14159;
    this.y += this.vvel;
    this.x += this.hvel;
  }
}
