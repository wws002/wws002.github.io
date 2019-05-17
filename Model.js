class Model
{
	constructor()
	{
		this.scrollPos = 0;
		this.bScrollPos = 0;
		this.startPos = 550;
		this.ground = 455;

		this.mario = new Mario(this, this.startPos, this.ground);
		this.rick = new Pickle_Rick(this,2350, 0);
		this.brick1 = new Brick(this, 350, 350);
		this.brick2 = new Brick(this, 1000, 280);
		this.coinBlock1 = new CoinBlock(this, 150, 250);
		this.coinBlock2 = new CoinBlock(this, 1300, 200);

		this.sprites = [];
		this.sprites.push(this.mario);
		this.sprites.push(this.rick);
		this.sprites.push(this.brick1);
		this.sprites.push(this.brick2);
		this.sprites.push(this.coinBlock1);
		this.sprites.push(this.coinBlock2);
	}

	update()
	{
		for(let i = 0; i < this.sprites.length; i++)
		{
			let s = this.sprites[i];
			s.update();
		}
	}
}
