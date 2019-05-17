class CoinBlock
{
	constructor(model, x, y)
	{
		this.type = "CoinBlock";
		this.model = model;
		this.x = x;
		this.y = y;
		this.w = 88;
		this.h = 88;
		this.coinCount = 5;
		this.blockPic = new Image();
		this.emptyBlockPic = new Image();
		this.blockPic.src = "coinBlock2.png";
		this.emptyBlockPic.src = "emptyCoinBlock2.png";
	}

	getRandom()
	{
		return Math.random() * (50-1) + 1 ;
	}

	drawMe(ctx)
	{
		if(this.model.coinBlock1.coinCount > 0)
			ctx.drawImage(this.model.coinBlock1.blockPic, this.model.coinBlock1.x - this.model.scrollPos, this.model.coinBlock1.y);
		else
			ctx.drawImage(this.model.coinBlock1.emptyBlockPic, this.model.coinBlock1.x - this.model.scrollPos, this.model.coinBlock1.y);
		if(this.model.coinBlock2.coinCount > 0)
			ctx.drawImage(this.model.coinBlock2.blockPic, this.model.coinBlock2.x - this.model.scrollPos, this.model.coinBlock2.y);
		else
			ctx.drawImage(this.model.coinBlock2.emptyBlockPic, this.model.coinBlock2.x - this.model.scrollPos, this.model.coinBlock2.y);
	}

	update()
	{
		//if mario's head bumps the bottum of the block
    if (this.model.mario.y == this.y + this.h && this.model.mario.x + this.model.mario.w > this.x && this.model.mario.x < this.x + this.w)
    {
      this.model.mario.vvel = 0.1;
      if(this.coinCount > 0)
      {
        this.vvelocity = -30.0;
        this.n = this.getRandom();
        if(this.n > 25)
          this.hvelocity = this.n%15.0;
        else
          this.hvelocity = -this.n%15.0;

				this.model.sprites.push(new Coin(this.hvelocity, this.vvelocity, this.x, this.y - 40, this.model));

        this.coinCount--;
      }
    }
	}
}
